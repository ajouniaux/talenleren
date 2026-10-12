#!/usr/bin/env python3
"""
Génère les fichiers MP3 de la Luistoets à partir des transcriptions de contenu.js,
avec des voix neuronales flamandes (nl-BE) du service de lecture à voix haute de
Microsoft Edge, via l'outil libre « edge-tts » (usage non officiel de ce service).

Installation (une fois) :
    pip install edge-tts
    + ffmpeg recommandé (https://ffmpeg.org) pour insérer de courts silences
      entre les répliques ; sans ffmpeg, les répliques sont simplement mises bout à bout.

Utilisation (depuis le dossier docs/outils) :
    python generer_audio.py              # génère ../audio/a2-luistoets.mp3 et b1-luistoets.mp3
    python generer_audio.py --niveau B1  # un seul niveau
    python generer_audio.py --verifier   # affiche les répliques lues, sans rien générer

Écoutez toujours le résultat avant de l'utiliser avec des étudiants.
"""
import argparse
import asyncio
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ICI = Path(__file__).resolve().parent
CONTENU = ICI.parent / "contenu.js"
VOIX = {"F": "nl-BE-DenaNeural", "M": "nl-BE-ArnaudNeural"}
VITESSE = {"A2": "-10%", "B1": "+0%"}
SILENCE_S = 0.6


def bloc(texte, debut, ouvrant, fermant):
    """Renvoie le bloc délimité (ex. [ ... ]) qui commence à la position « debut »."""
    i = texte.index(ouvrant, debut)
    profondeur, dans_chaine, echap = 0, None, False
    for j in range(i, len(texte)):
        c = texte[j]
        if dans_chaine:
            if echap:
                echap = False
            elif c == "\\":
                echap = True
            elif c == dans_chaine:
                dans_chaine = None
        elif c in "\"'`":
            dans_chaine = c
        elif c == ouvrant:
            profondeur += 1
        elif c == fermant:
            profondeur -= 1
            if profondeur == 0:
                return texte[i:j + 1]
    raise ValueError("bloc non fermé dans contenu.js")


def lire_ecoutes():
    """Extrait, pour chaque niveau, le fichier audio, les personnages et la transcription."""
    js = CONTENU.read_text(encoding="utf-8")
    ecoutes = []
    for m in re.finditer(r"\n  (A2|B1|[A-C][12]): \{", js):
        niveau = m.group(1)
        pos = js.index("ecoute:", m.end())
        audio = re.search(r'audio:\s*"([^"]+)"', js[pos:]).group(1)
        p_pers = js.index("personnages:", pos)
        personnages = {
            cle: voix
            for cle, voix in re.findall(r'(\w+):\s*\{\s*nom:\s*"[^"]*",\s*voix:\s*"([FM])"\s*\}', bloc(js, p_pers, "{", "}"))
        }
        p_trans = js.index("transcription:", pos)
        brut = bloc(js, p_trans, "[", "]")
        repliques = json.loads(re.sub(r",(\s*\])", r"\1", brut))
        ecoutes.append({"niveau": niveau, "audio": audio, "personnages": personnages, "repliques": repliques})
    return ecoutes


async def synthetiser(texte, voix, vitesse, chemin):
    import edge_tts  # importé ici pour que --verifier fonctionne sans edge-tts
    await edge_tts.Communicate(texte, voix, rate=vitesse).save(str(chemin))


def assembler(morceaux, sortie, dossier):
    if shutil.which("ffmpeg"):
        silence = dossier / "silence.mp3"
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
                        "-t", str(SILENCE_S), "-b:a", "48k", str(silence)], check=True)
        liste = dossier / "liste.txt"
        lignes = []
        for k, m in enumerate(morceaux):
            if k:
                lignes.append(f"file '{silence.as_posix()}'")
            lignes.append(f"file '{m.as_posix()}'")
        liste.write_text("\n".join(lignes), encoding="utf-8")
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0", "-i", str(liste),
                        "-ar", "24000", "-ac", "1", "-b:a", "64k", str(sortie)], check=True)
    else:
        with open(sortie, "wb") as f:
            for m in morceaux:
                f.write(m.read_bytes())


async def principal():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--niveau", choices=["A2", "B1"], help="ne générer qu'un niveau")
    ap.add_argument("--verifier", action="store_true", help="afficher les répliques sans générer d'audio")
    ap.add_argument("--voix-f", default=VOIX["F"], help=f"voix féminine (défaut : {VOIX['F']})")
    ap.add_argument("--voix-m", default=VOIX["M"], help=f"voix masculine (défaut : {VOIX['M']})")
    args = ap.parse_args()
    voix = {"F": args.voix_f, "M": args.voix_m}

    for e in lire_ecoutes():
        if args.niveau and e["niveau"] != args.niveau:
            continue
        sortie = (ICI.parent / e["audio"]).resolve()
        print(f"\n== {e['niveau']} → {sortie.relative_to(ICI.parent)} ({len(e['repliques'])} répliques)")
        if args.verifier:
            for cle, texte in e["repliques"]:
                print(f"  [{voix[e['personnages'].get(cle, 'F')]}] {cle}: {texte}")
            continue
        sortie.parent.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory() as tmp:
            dossier = Path(tmp)
            morceaux = []
            for k, (cle, texte) in enumerate(e["repliques"]):
                chemin = dossier / f"{k:03d}.mp3"
                print(f"  {k + 1:>2}/{len(e['repliques'])} {cle}: {texte[:60]}…")
                await synthetiser(texte, voix[e["personnages"].get(cle, "F")], VITESSE.get(e["niveau"], "+0%"), chemin)
                morceaux.append(chemin)
            assembler(morceaux, sortie, dossier)
        print(f"  ✓ {sortie.name} créé ({sortie.stat().st_size // 1024} Ko)")


if __name__ == "__main__":
    try:
        asyncio.run(principal())
    except ModuleNotFoundError:
        sys.exit("Le module edge-tts est absent : installez-le avec « pip install edge-tts ».")
