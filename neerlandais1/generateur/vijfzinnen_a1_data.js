// Stap voor stap — 45 petites productions jalonnées pour vrais débutants (A1), en parallèle du syllabus
// « Néerlandais en situation » (UE2) : section 1 Premiers pas (Emma & Pieter), section 2 Grammaire A1,
// section 3 Vocabulaire thématique, section 4 Mises en situation (jalon A1).
// crit : 3 à 5 critères (une phrase ou une réplique chacun) · k = étiquette courte
// ex : la production modèle ; {n:texte} ou {n:texte|étiquette} = bribe encadrée, reliée au critère n
// lines : true → une réplique par ligne (dialogues, SMS)
// ref : la page du syllabus · mode : 'W' production écrite · 'O' production orale
// img : l'illustration (img/vijfzinnen/<img>.jpg, dessinée par vijf_art_a1.js)

const SECTIONS = [
  // ================================================================== SECTION 1
  {
    id: 'S1', label: 'A1 · Premiers pas', name: 'Premiers pas · Emma & Pieter', nl: 'Emma & Pieter', pages: 'syllabus, section 1 · p. 1 – 57',
    spec: ['saluer selon le moment : **goedemorgen, goedemiddag…**', '**’s morgens · vanmorgen · vandaag**', '**Hoe gaat het (met u)?** · Het gaat …', '**ik ben / ik voel me** + nuanceur + adjectif', '**want** + une raison', '**zijn & hebben** · **er is / er zijn**', 'prendre congé : **tot straks, tot morgen…**'],
    ctx: [
      {
        t: 'Goedemorgen!', img: 'a1_goedemorgen', fr: 'Bonjour !', ref: '1.1 · p. 4', mode: 'O',
        sit: 'Il est 8 h. Vous arrivez au cours et vous saluez Pieter.',
        crit: [
          { t: 'Saluez selon le moment : **GOEDEMORGEN** + un prénom.', k: 'GOEDEMORGEN' },
          { t: 'Dites qui vous êtes : **IK BEN** + votre prénom.', k: 'IK BEN' },
          { t: 'Une habitude du matin : **’S MORGENS** + verbe + **IK**.', k: '’S MORGENS' },
        ],
        ex: [
          '{1:Goedemorgen}, Pieter!',
          '{2:Ik ben} Emma.',
          '{3:’s Morgens|’S MORGENS} drink ik koffie… veel koffie!',
        ],
        notes: 'Première production : trois phrases seulement. Goedemorgen de 5 h à 12 h. Après ’s morgens, le verbe vient avant ik (’s Morgens drink ik) : on l’apprend comme un bloc, sans théorie. Faites circuler la classe : chacun·e salue trois personnes.',
      },
      {
        t: '’s Morgens, ’s middags, ’s avonds', img: 'a1_mijndag', fr: 'Le matin, l’après-midi, le soir', ref: '1.1 · p. 6', mode: 'W',
        sit: 'Racontez votre journée habituelle en trois moments.',
        crit: [
          { t: 'Le matin : **’S MORGENS** + verbe + **IK**.', k: '’S MORGENS' },
          { t: 'L’après-midi : **’S MIDDAGS** + verbe + **IK**.', k: '’S MIDDAGS' },
          { t: 'Le soir : **’S AVONDS** + verbe + **IK**.', k: '’S AVONDS' },
        ],
        ex: [
          '{1:’s Morgens|’S MORGENS} werk ik op school.',
          '{2:’s Middags|’S MIDDAGS} eet ik een broodje.',
          '{3:’s Avonds|’S AVONDS} kijk ik een film… en ik slaap!',
        ],
        notes: '’s morgens, ’s middags et ’s avonds expriment une habitude (tous les jours). Rappelez le bloc « moment + verbe + ik ». Les verbes utiles : werk, eet, drink, kijk, ga, slaap. Variante orale : le voisin ou la voisine devine l’heure de chaque phrase.',
      },
      {
        t: 'Vanavond', img: 'a1_vanavond', fr: 'Ce soir', ref: '1.1 · p. 6', mode: 'O',
        sit: 'Il est 20 h. Pieter téléphone à Emma. Que fait-il ce soir ?',
        crit: [
          { t: 'Saluez selon le moment : **GOEDENAVOND** + prénom.', k: 'GOEDENAVOND' },
          { t: 'Ce soir précisément : **VANAVOND** + verbe + **IK**.', k: 'VANAVOND' },
          { t: 'Avant de dormir : **WELTERUSTEN!** ou **GOEDENACHT!**', k: 'WELTERUSTEN' },
        ],
        ex: [
          '{1:Goedenavond}, Emma!',
          '{2:Vanavond|VANAVOND} kijk ik een film met popcorn.',
          'Het is laat… {3:Welterusten}!',
        ],
        notes: 'Opposez ’s avonds (habitude) et vanavond (ce soir, aujourd’hui précisément). Goedenavond de 18 h à 23 h ; Goedenacht et Welterusten quand on va dormir. Jeu : montrez une heure, la classe répond par la bonne salutation.',
      },
      {
        t: 'Vandaag is anders!', img: 'a1_vandaag', fr: 'Aujourd’hui, c’est différent !', ref: '1.1 · p. 6', mode: 'W',
        sit: 'D’habitude, vous travaillez. Mais aujourd’hui, c’est les vacances !',
        crit: [
          { t: 'Une habitude : **’S MORGENS** + verbe + **IK**.', k: 'HABITUDE' },
          { t: 'Mais aujourd’hui : **VANDAAG** + verbe + **IK**.', k: 'VANDAAG' },
          { t: 'Cet après-midi : **VANMIDDAG** + verbe + **IK**.', k: 'VANMIDDAG' },
        ],
        ex: [
          '{1:’s Morgens werk ik|HABITUDE} op kantoor.',
          'Maar {2:vandaag heb ik|VANDAAG} vakantie!',
          '{3:Vanmiddag|VANMIDDAG} ga ik naar de zee.',
        ],
        notes: 'Le contraste habitude / aujourd’hui est le cœur de la séquence 1.1 : ’s morgens (tous les matins) ↔ vanmorgen, vandaag, vanmiddag, vanavond (aujourd’hui précisément). « Maar vandaag heb ik » : maar ne compte pas ; vandaag occupe la première place, donc le verbe vient juste après. Gardez-le comme un bloc.',
      },
      {
        t: 'Hoe gaat het?', img: 'a1_hoegaathet', fr: 'Comment ça va ?', ref: '1.2 · p. 19', mode: 'O', lines: true,
        sit: 'Pause café. Pieter retrouve Emma à la machine à café.',
        crit: [
          { t: 'Saluez et demandez : **HOE GAAT HET?**', k: 'HOE GAAT HET?' },
          { t: 'Répondez : **HET GAAT** + goed / prima / wel…', k: 'HET GAAT …' },
          { t: 'Retournez la question : **EN MET JOU?**', k: 'EN MET JOU?' },
        ],
        ex: [
          'Pieter: Hoi Emma! {1:Hoe gaat het?}',
          'Emma: {2:Het gaat prima|HET GAAT …}, dank je. {3:En met jou?}',
          'Pieter: Ook goed, bedankt!',
        ],
        notes: 'Échelle des réponses : slecht · niet zo goed · het kan beter · het gaat wel · goed · prima · uitstekend. Tutoiement : Hoe gaat het met je / met jou? — vouvoiement : met u. Jouez le mini-dialogue trois fois, chaque fois plus vite (couche 3 : fluidité).',
      },
      {
        t: 'Een beetje moe', img: 'a1_moe', fr: 'Un peu fatigué·e', ref: '1.2 · p. 25', mode: 'W',
        sit: 'Lundi matin. Comment vous sentez-vous ? Et pourquoi ?',
        crit: [
          { t: 'Votre état : **IK BEN** + nuanceur + adjectif.', k: 'IK BEN + adj.' },
          { t: 'La raison : **WANT** + ik heb…', k: 'WANT' },
          { t: 'Une deuxième émotion : **IK VOEL ME** + adjectif.', k: 'IK VOEL ME' },
        ],
        ex: [
          '{1:Ik ben een beetje moe|IK BEN + adj.}, {2:want ik heb veel werk|WANT}.',
          '{3:Ik voel me} ook gestrest…',
          'Koffie, alsjeblieft!',
        ],
        notes: 'Les nuanceurs : een beetje (un peu) → vrij (assez) → heel / zeer (très) → ontzettend (extrêmement). Adjectifs : moe, blij, gestrest, ontspannen, druk, nerveus, gelukkig, verdrietig, bang. Après want, l’ordre des mots ne change pas : want ik heb… Jeu « Twee gevoelens, één leugen » : trois phrases, une fausse.',
      },
      {
        t: 'Goedemiddag, meneer Janssens!', img: 'a1_janssens', fr: 'Bonjour, Monsieur !', ref: '1.2 · p. 21', mode: 'O', lines: true,
        sit: 'Pieter croise son professeur, meneer Janssens. Il le vouvoie (U).',
        crit: [
          { t: 'Saluez poliment : **GOEDEMIDDAG, MENEER** + nom.', k: 'GOEDEMIDDAG' },
          { t: 'Vouvoyez : **HOE GAAT HET MET U?**', k: 'MET U' },
          { t: 'Répondez avec une raison : **WANT** + ik heb…', k: 'WANT' },
          { t: 'Prenez congé : **TOT STRAKS!** ou **TOT ZIENS!**', k: 'TOT …' },
        ],
        ex: [
          'Pieter: {1:Goedemiddag, meneer Janssens|GOEDEMIDDAG}! {2:Hoe gaat het met u?|MET U}',
          'Meneer Janssens: Goed, dank je. En met jou?',
          'Pieter: Het kan beter. Ik ben nerveus, {3:want ik heb vanmiddag een presentatie|WANT}.',
          'Meneer Janssens: Succes! {4:Tot straks|TOT …}, Pieter!',
        ],
        notes: 'Repris du texte 1 de la séquence 1.2. Vouvoiement : met u, dank u ; meneer / mevrouw + nom. Le professeur tutoie Pieter (dank je), Pieter le vouvoie. Rejouez la scène avec « je » puis avec « u » (exercice 1.2.6, « Twee gesprekken »).',
      },
      {
        t: 'Dit ben ik', img: 'a1_ditbenik', fr: 'Voici qui je suis', ref: '1.3 · p. 35', mode: 'W',
        sit: 'Premier jour du cours. Vous vous présentez à la classe.',
        crit: [
          { t: 'Votre prénom : **IK BEN** + prénom.', k: 'IK BEN' },
          { t: 'Votre métier ou vos études : **IK BEN** + métier (sans article).', k: 'IK BEN + métier' },
          { t: 'Votre ville ou votre pays : **IK KOM UIT** …', k: 'IK KOM UIT' },
          { t: 'Une chute avec **IK HEB** …', k: 'IK HEB' },
        ],
        ex: [
          '{1:Ik ben} Sarah.',
          '{2:Ik ben student|IK BEN + métier}.',
          '{3:Ik kom uit} Gent.',
          'En {4:ik heb} een kat… en drie fietsen!',
        ],
        notes: 'Pas d’article devant le métier : Ik ben leraar / student / verpleegster (✗ een leraar). ZIJN : ik ben, jij bent, hij is ; HEBBEN : ik heb, jij hebt, hij heeft. Exercice « Ik in 90 seconden » : même présentation en 90, 60 puis 45 secondes.',
      },
      {
        t: 'Dit is Emma', img: 'a1_emma', fr: 'Voici Emma', ref: '1.3 · p. 37', mode: 'W',
        sit: 'Présentez Emma à un·e ami·e. Attention : il / elle → IS, HEEFT.',
        crit: [
          { t: 'Présentez-la : **DIT IS** + prénom.', k: 'DIT IS' },
          { t: 'Son métier : **ZIJ IS** + métier.', k: 'ZIJ IS' },
          { t: 'Sa famille : **ZIJ HEEFT** + een broer / een zus…', k: 'ZIJ HEEFT' },
          { t: 'Une chute : aujourd’hui, elle **IS** + adjectif.', k: 'IS + adj.' },
        ],
        ex: [
          '{1:Dit is} Emma.',
          '{2:Zij is lerares|ZIJ IS}.',
          '{3:Zij heeft} een broer en een hond.',
          'Vandaag {4:is ze heel blij|IS + adj.}: het is haar verjaardag!',
        ],
        notes: 'Troisième personne : hij / zij IS, hij / zij HEEFT (✗ hebt). Zij (forme longue, pour insister) ou ze (forme courte, neutre). Prolongement : chacun·e présente son ou sa voisin·e à la classe.',
      },
      {
        t: 'Ik heb honger!', img: 'a1_honger', fr: 'J’ai faim !', ref: '1.3 · p. 41', mode: 'O', lines: true,
        sit: 'Il est midi. Pieter a faim. Emma a-t-elle quelque chose à manger ?',
        crit: [
          { t: 'Une sensation : **IK HEB** honger / dorst.', k: 'IK HEB' },
          { t: 'Une question : **HEB JE** … ?', k: 'HEB JE …?' },
          { t: 'Une réponse négative : **NEE, IK HEB GEEN** …', k: 'GEEN' },
          { t: 'Une chute avec **ER IS** …', k: 'ER IS' },
        ],
        ex: [
          'Pieter: {1:Ik heb} honger! {2:Heb je} een broodje, Emma?',
          'Emma: {3:Nee, ik heb geen|GEEN} broodje.',
          'Maar kijk: {4:er is} een frietkot!',
        ],
        notes: 'Avec HEBBEN : honger (faim), dorst (soif), tijd (le temps), gelijk (raison). Question oui / non : le verbe en premier, et le -t disparaît devant je : Heb je…? (✗ Hebt je). Een → geen à la forme négative.',
      },
      {
        t: 'In de klas', img: 'a1_klas', fr: 'En classe', ref: '1.3 · p. 39', mode: 'W',
        sit: 'Regardez la classe. Qu’est-ce qu’il y a ?',
        crit: [
          { t: 'Une chose : **ER IS** + een + nom.', k: 'ER IS' },
          { t: 'Plusieurs choses : **ER ZIJN** + nombre + pluriel.', k: 'ER ZIJN' },
          { t: 'Une personne : **DE LERAAR IS** + adjectif.', k: 'IS + adj.' },
          { t: 'Une chute avec **GEEN**.', k: 'GEEN' },
        ],
        ex: [
          '{1:Er is} een groot bord.',
          '{2:Er zijn} twaalf studenten.',
          'De leraar {3:is heel vriendelijk|IS + adj.}.',
          'Maar er is {4:geen} koffie!',
        ],
        notes: 'Er is + singulier · er zijn + pluriel. Comptez ensemble les objets de la classe (een, twee, drie… twaalf). Variante : un·e élève décrit la classe, les autres corrigent ce qui est faux (« Waar of niet waar? »).',
      },
      {
        t: 'Tot straks!', img: 'a1_totstraks', fr: 'À tout à l’heure !', ref: '1.4 · p. 51', mode: 'O',
        sit: 'Votre cours commence dans deux minutes. Vous quittez Pieter à la cafétéria.',
        crit: [
          { t: 'Une raison : **IK HEB GEEN TIJD**.', k: 'GEEN TIJD' },
          { t: 'Ce qui se passe : **MIJN LES BEGINT ZO**.', k: 'BEGINT ZO' },
          { t: 'Le prochain rendez-vous : **TOT STRAKS!** ou **TOT ZO!**', k: 'TOT STRAKS' },
          { t: 'Un dernier mot : **DAG** + prénom !', k: 'DAG' },
        ],
        ex: [
          'Sorry, {1:ik heb geen tijd}.',
          '{2:Mijn les begint zo}!',
          '{3:Tot straks}! {4:Dag Pieter}!',
        ],
        notes: 'Tot zo : dans quelques minutes · tot straks : dans quelques heures · tot morgen : demain · tot ziens : on ne sait pas quand (neutre, poli). Doei : très familier, entre ami·es. Repris du dialogue d’ouverture (exercice 1.3.7).',
      },
      {
        t: 'Fijne avond!', img: 'a1_fijneavond', fr: 'Bonne soirée !', ref: '1.4 · p. 52', mode: 'O',
        sit: 'Il est 18 h. La journée de travail est finie. Vous revoyez vos collègues demain.',
        crit: [
          { t: 'Votre état : **IK BEN MOE**.', k: 'IK BEN MOE' },
          { t: 'Ce que vous faites : **IK GA NAAR HUIS**.', k: 'NAAR HUIS' },
          { t: 'Un souhait : **FIJNE AVOND!**', k: 'FIJNE AVOND' },
          { t: 'Le prochain rendez-vous : **TOT MORGEN!**', k: 'TOT MORGEN' },
        ],
        ex: [
          'Pfff, {1:ik ben moe}.',
          '{2:Ik ga naar huis}.',
          '{3:Fijne avond}, allemaal!',
          '{4:Tot morgen}!',
        ],
        notes: 'Naar huis (on y va : mouvement) ≠ thuis (on y est). Souhaits : Prettige dag! · Fijne dag! · Fijne avond! · Fijn weekend! Exercice 1.4.2 « Afscheidskaartjes » : une raison, ce que vous faites, le prochain rendez-vous.',
      },
      {
        t: 'Stel jezelf voor', img: 'a1_steljezelfvoor', fr: 'Présentez-vous', ref: 'synthèse · p. 57', mode: 'O',
        sit: 'La synthèse du palier : vous vous présentez à un autre binôme, sans notes.',
        crit: [
          { t: 'Une **salutation** selon le moment de la journée.', k: 'SALUTATION' },
          { t: 'Votre identité avec **ZIJN** : Ik ben…', k: 'ZIJN' },
          { t: 'Ce que vous avez avec **HEBBEN** : Ik heb…', k: 'HEBBEN' },
          { t: 'Un contraste : **JIJ** …, **MAAR IK** …', k: 'JIJ … MAAR IK' },
          { t: 'Une formule de **congé** selon le contexte.', k: 'CONGÉ' },
        ],
        ex: [
          '{1:Goedemiddag|SALUTATION}!',
          '{2:Ik ben|ZIJN} Lucas en ik kom uit Namen.',
          '{3:Ik heb|HEBBEN} twee katten en een fiets.',
          'Sorry, {4:jij hebt tijd|JIJ …}, {4:maar ik niet|MAAR IK}!',
          '{5:Tot morgen|CONGÉ}!',
        ],
        notes: 'C’est exactement la mise en situation finale du syllabus (p. 57) : cinq phrases, cinq consignes. Forme longue du pronom (jij, zij, wij) pour insister ou opposer. Évaluez avec la grille sur 10, puis faites rejouer de mémoire.',
      },
    ],
  },
  // ================================================================== SECTION 2
  {
    id: 'S2', label: 'A1 · Grammaire', name: 'Grammaire · palier A1', nl: 'de grammatica', pages: 'syllabus, section 2 · p. 58 – 67',
    spec: ['**de / het / een**', 'le **pluriel** : -en, -s', '**deze · dit · die · dat** · **mijn…**', 'l’**adjectif** : -e devant le nom', '**vraagwoorden** : wie, wat, waar…', '**niet** ou **geen** ?', '**l’heure** : om … uur, half …', '**in · op · bij · naar**', 'les **diminutifs** (-je)', 'l’**impératif** poli'],
    ctx: [
      {
        t: 'De of het?', img: 'a1_ontbijttafel', fr: 'De ou het ?', ref: 'fiche 01 · p. 58', mode: 'W',
        sit: 'Le petit-déjeuner chez Emma. Décrivez la table.',
        crit: [
          { t: 'Un mot en **DE** + **IS** + adjectif.', k: 'DE' },
          { t: 'Un mot en **HET** + **IS** + adjectif.', k: 'HET' },
          { t: 'Une chose avec **EEN** : Er is een…', k: 'EEN' },
          { t: 'Une chute avec un **pluriel** : toujours **DE** !', k: 'DE + pluriel' },
        ],
        ex: [
          '{1:De koffie|DE} is heet.',
          '{2:Het brood|HET} is vers.',
          'Er is {3:een banaan|EEN} voor Emma.',
          'Help! {4:De katten|DE + pluriel} eten de kaas!',
        ],
        notes: 'Apprenez toujours le mot avec son article. De ≈ 3 mots sur 4 ; het : les diminutifs (het meisje), les langues (het Nederlands), les verbes-noms (het eten). Au pluriel, toujours de : het huis → de huizen. Pas de « een » au pluriel.',
      },
      {
        t: 'Bij de bakker', img: 'a1_bakker', fr: 'Chez le boulanger', ref: 'fiche 02 · p. 59', mode: 'W',
        sit: 'Dimanche matin, vous achetez le petit-déjeuner pour toute la famille.',
        crit: [
          { t: 'Un pluriel en **-EN** : twee brod**en**…', k: '-EN' },
          { t: 'Un pluriel en **-S** : zes croissant**s**…', k: '-S' },
          { t: 'Une question : **HOEVEEL KOSTEN** … ?', k: 'HOEVEEL' },
          { t: 'Une chute avec un pluriel irrégulier : kinder**en**, eier**en**.', k: '-EREN' },
        ],
        ex: [
          'Ik koop twee {1:broden|-EN} en zes {2:croissants|-S}.',
          '{3:Hoeveel kosten|HOEVEEL} de taarten?',
          'Ik heb vier {4:kinderen|-EREN}… en ze hebben honger!',
        ],
        notes: 'Règle générale : -en. Après -el, -er, -en, -je : -s (tafels, computers, meisjes). Après a, o, u, i, y : -’s (auto’s). L’orthographe bouge : brood → broden (voyelle longue : une seule lettre), bus → bussen (voyelle courte : consonne doublée). Irréguliers : kind → kinderen, ei → eieren.',
      },
      {
        t: 'Waar is mijn gsm?', img: 'a1_spullen', fr: 'Où est mon portable ?', ref: 'fiche 03 · p. 60', mode: 'O',
        sit: 'Après le cours, des objets traînent sur la table. À qui sont-ils ?',
        crit: [
          { t: 'Un mot en DE : **DEZE** (ici) ou **DIE** (là) + nom.', k: 'DEZE / DIE' },
          { t: 'Un mot en HET : **DIT** (ici) ou **DAT** (là) + nom.', k: 'DIT / DAT' },
          { t: 'Un possessif : **MIJN, JOUW, ZIJN, HAAR**…', k: 'POSSESSIF' },
          { t: 'Une chute : **WAAR IS** + possessif + nom ?', k: 'WAAR IS …?' },
        ],
        ex: [
          '{1:Deze pen|DEZE} is van Pieter.',
          '{2:Dat boek|DAT} is van Emma.',
          '{3:Mijn tas|MIJN} is hier.',
          'Maar {4:waar is mijn gsm|WAAR IS …?}?!',
        ],
        notes: 'De-woord : deze (ici) / die (là) · het-woord : dit (ici) / dat (là) · pluriel : deze / die. Possessifs : mijn, jouw (uw), zijn, haar, ons / onze, jullie, hun. Ons seulement devant un mot en het au singulier (ons huis), sinon onze (onze school).',
      },
      {
        t: 'Het huis van Sarah', img: 'a1_huisvansarah', fr: 'La maison de Sarah', ref: 'fiche 04 · p. 61', mode: 'W',
        sit: 'Voici la maison de Sarah. Décrivez-la.',
        crit: [
          { t: 'Après le verbe, pas de -e : het huis **IS GROOT**.', k: 'IS + adj.' },
          { t: 'Devant un nom, **-E** : een rod**e** deur.', k: 'adj. + -E' },
          { t: 'Exception : **EEN** + adjectif + mot en HET (pas de -e).', k: 'EEN + adj. + HET' },
          { t: 'Une chute avec un adjectif au **pluriel** (+ -e).', k: 'pluriel + -E' },
        ],
        ex: [
          'Het huis van Sarah {1:is groot|IS + adj.}.',
          'Het heeft {2:een rode deur|adj. + -E} en {3:een klein balkon|EEN + adj. + HET}.',
          'En in de tuin? {4:Twee grote honden|pluriel + -E}!',
        ],
        notes: 'Mémo : een groot huis · het grote huis · een grote man · grote huizen. Pas de -e seulement si trois conditions sont réunies : mot en het + een (ou geen) + singulier. Variante : décrivez votre propre maison ou votre chambre.',
      },
      {
        t: 'Hoe heet je?', img: 'a1_vragen', fr: 'Comment t’appelles-tu ?', ref: 'fiche 05 · p. 62', mode: 'O', lines: true,
        sit: 'Une nouvelle étudiante arrive en classe. Posez-lui des questions.',
        crit: [
          { t: 'Son nom : **HOE HEET JE?**', k: 'HOE' },
          { t: 'Son domicile : **WAAR WOON JE?**', k: 'WAAR' },
          { t: 'Une question oui / non : le **verbe** en premier.', k: 'VERBE + JE' },
          { t: 'Une chute : **WAT** + verbe + **JE** ?', k: 'WAT' },
        ],
        ex: [
          '— Hallo! {1:Hoe heet je}? — Lisa.',
          '— {2:Waar woon je}? — In Gent.',
          '— {3:Spreek je|VERBE + JE} Frans? — Ja, een beetje.',
          '— {4:Wat drink je}? — Thee… met veel suiker!',
        ],
        notes: 'Question ouverte : mot en W + verbe + sujet (Waar woon je?). Question oui / non : verbe + sujet (Woon je in Gent?). Devant je / jij, le -t disparaît : jij drinkt → Drink jij koffie? Les mots en W : wie, wat, waar, wanneer, waarom, hoe, hoeveel, welke.',
      },
      {
        t: 'Een slechte dag', img: 'a1_slechtedag', fr: 'Une mauvaise journée', ref: 'fiche 06 · p. 63', mode: 'W',
        sit: 'Lundi, rien ne va ! Racontez votre journée catastrophe.',
        crit: [
          { t: '**GEEN** devant un nom (au lieu de een / ∅).', k: 'GEEN' },
          { t: '**NIET** après le verbe, à la fin.', k: 'NIET (fin)' },
          { t: '**NIET** devant un adjectif.', k: 'NIET + adj.' },
          { t: 'Une chute positive avec **MAAR** !', k: 'MAAR' },
        ],
        ex: [
          'Ik heb {1:geen koffie|GEEN}.',
          'De bus komt {2:niet|NIET (fin)}.',
          'Het is {3:niet warm|NIET + adj.}: het regent!',
          '{4:Maar} vanavond eet ik pizza!',
        ],
        notes: 'Astuce du syllabus : si l’on peut dire « pas de » ou « aucun » en français → geen. Sinon → niet. Geen remplace een ou l’absence d’article : Ik heb een auto → Ik heb geen auto. Niet se place à la fin (Ik werk vandaag niet) ou juste devant l’adjectif ou la préposition.',
      },
      {
        t: 'Hoe laat is het?', img: 'a1_hoelaat', fr: 'Quelle heure est-il ?', ref: 'fiche 07 · p. 64', mode: 'O',
        sit: 'Emma est en retard ce matin. Racontez.',
        crit: [
          { t: 'Un jour : **OP** + jour.', k: 'OP + jour' },
          { t: 'Un rendez-vous : **OM** + heure.', k: 'OM + heure' },
          { t: 'L’heure : **HET IS** + half / kwart over / kwart voor…', k: 'HET IS …' },
          { t: 'Une chute avec un **nombre** au-dessus de 20.', k: 'NOMBRE' },
        ],
        ex: [
          '{1:Op maandag|OP + jour} heeft Emma een les {2:om negen uur|OM + heure}.',
          'Oei, {3:het is half negen|HET IS …}!',
          'En haar bus heeft {4:vijfentwintig|NOMBRE} minuten vertraging!',
        ],
        notes: 'Piège : half negen = 8 h 30 (à mi-chemin vers neuf heures). Kwart over acht = 8 h 15 ; kwart voor negen = 8 h 45. Au-dessus de 20, l’unité d’abord : 25 = vijfentwintig. Om + heure · op + jour, date · in + mois, saison.',
      },
      {
        t: 'Waar is de kat?', img: 'a1_kat', fr: 'Où est le chat ?', ref: 'fiche 08 · p. 65', mode: 'W',
        sit: 'Le chat de Sarah se cache partout ! Où est-il ?',
        crit: [
          { t: '**OP** : sur une surface.', k: 'OP' },
          { t: '**IN** : dans un lieu fermé.', k: 'IN' },
          { t: '**BIJ** : chez, près de.', k: 'BIJ' },
          { t: 'Une chute avec **NAAR** (un mouvement) !', k: 'NAAR' },
        ],
        ex: [
          'Eerst is de kat {1:op de tafel|OP}.',
          'Dan is hij {2:in de doos|IN}.',
          'Nu slaapt hij {3:bij het raam|BIJ}.',
          'En nu? Hij gaat {4:naar de keuken|NAAR}: daar is de vis!',
        ],
        notes: 'In : dans un lieu fermé, une ville, un pays · op : sur une surface · bij : chez, près de · naar : vers (avec mouvement). Thuis (sans mouvement) ≠ naar huis (avec mouvement). Jeu : cachez un objet dans la classe, les autres demandent « Is het op de tafel? ».',
      },
      {
        t: 'Een kopje koffie', img: 'a1_kopje', fr: 'Un petit café', ref: 'fiche 09 · p. 66', mode: 'O',
        sit: 'Sur une petite terrasse, Emma et Pieter commandent. Tout est « petit » !',
        crit: [
          { t: 'Une boisson au diminutif : **EEN KOPJE**, **EEN GLAASJE**…', k: 'KOPJE' },
          { t: 'Un en-cas au diminutif : **EEN BROODJE**, **EEN KOEKJE**…', k: 'BROODJE' },
          { t: 'Le diminutif est toujours **HET**.', k: 'HET + -JE' },
          { t: 'Une chute avec un diminutif au **pluriel** (-s).', k: '-JES' },
        ],
        ex: [
          'Ik wil graag {1:een kopje koffie|KOPJE} en {2:een broodje|BROODJE}.',
          '{3:Het broodje|HET + -JE} is lekker!',
          'En nu… {4:twee ijsjes|-JES}, alstublieft!',
        ],
        notes: 'Diminutif : -je (huisje), -tje après une voyelle (autootje), -etje après voyelle courte + l, m, n, r (zonnetje), -pje après -m (boompje). Tous en het au singulier, -s au pluriel : het meisje → de meisjes. Ik wil graag… : la formule polie pour commander.',
      },
      {
        t: 'Kom maar binnen!', img: 'a1_kommaarbinnen', fr: 'Entrez donc !', ref: 'fiche 10 · p. 67', mode: 'O',
        sit: 'Vous êtes le ou la professeur·e. Donnez des consignes à la classe… gentiment !',
        crit: [
          { t: 'Une invitation avec **MAAR** : Kom maar binnen!', k: 'MAAR' },
          { t: 'Un impératif : le radical du verbe.', k: 'IMPÉRATIF' },
          { t: 'Avec **EVEN** : un instant.', k: 'EVEN' },
          { t: 'Une chute polie avec **ALSJEBLIEFT**.', k: 'ALSJEBLIEFT' },
        ],
        ex: [
          'Goedemorgen! {1:Kom maar binnen|MAAR}!',
          '{2:Open|IMPÉRATIF} je boek.',
          '{3:Luister even|EVEN}!',
          'En je gsm in je tas, {4:alsjeblieft}!',
        ],
        notes: 'Impératif = infinitif sans -en : luisteren → luister, kijken → kijk, lezen → lees (z → s). Une seule forme pour tout le monde. Un impératif seul paraît sec : ajoutez even (un instant), eens (pour voir), maar (vas-y) ou alsjeblieft / alstublieft. Jeu « Jacques a dit » : « Simon zegt: sta op! ».',
      },
    ],
  },
  // ================================================================== SECTION 3
  {
    id: 'S3', label: 'A1 · Vocabulaire', name: 'Vocabulaire thématique', nl: 'de woordenschat', pages: 'syllabus, section 3 · p. 78 – 88',
    spec: ['se **présenter**', 'la **famille**', 'la **ville** et les transports', 'manger & boire', 'faire les **courses**', 'la **santé** et le corps', 'le **travail**', '**téléphone** & mail', 'l’**administration**', 'le **temps** & la météo', 'les **sentiments**'],
    ctx: [
      {
        t: 'Aangenaam!', img: 'a1_aangenaam', fr: 'Enchanté·e !', ref: 'vocabulaire 01 · p. 78', mode: 'O',
        sit: 'Une réception professionnelle. Vous rencontrez quelqu’un et vous échangez vos cartes de visite.',
        crit: [
          { t: 'Serrez la main : **AANGENAAM**, ik ben…', k: 'AANGENAAM' },
          { t: 'Votre profession : **IK BEN** + métier.', k: 'BEROEP' },
          { t: 'Vos langues : **IK SPREEK** …', k: 'TAAL' },
          { t: 'Une chute avec **MIJN VISITEKAARTJE**.', k: 'VISITEKAARTJE' },
        ],
        ex: [
          '{1:Aangenaam}, ik ben Tom.',
          'Ik ben {2:verpleger|BEROEP}.',
          'Ik spreek {3:Frans en een beetje Nederlands|TAAL}.',
          'Hier is {4:mijn visitekaartje}… met mijn telefoonnummer!',
        ],
        notes: 'Mots de la fiche : de naam, een hand geven, het visitekaartje, de identiteitskaart, het adres, het telefoonnummer, het land, de taal, het beroep. Aangenaam ! = enchanté·e. Variante : échangez de vraies (ou fausses) cartes de visite et présentez votre partenaire.',
      },
      {
        t: 'Bij oma op zondag', img: 'a1_oma', fr: 'Le dimanche chez la grand-mère', ref: 'vocabulaire 02 · p. 79', mode: 'W',
        sit: 'Dimanche, toute la famille mange chez la grand-mère. Présentez-la.',
        crit: [
          { t: 'Les parents : **MIJN VADER** / **MIJN MOEDER** …', k: 'OUDERS' },
          { t: 'Les frères et sœurs : **IK HEB** een broer / een zus…', k: 'BROER / ZUS' },
          { t: 'Les grands-parents : **MIJN OMA** / **MIJN OPA** …', k: 'OMA / OPA' },
          { t: 'Une chute avec **DE BABY** ou un animal !', k: 'DE BABY' },
        ],
        ex: [
          '{1:Mijn vader|OUDERS} is kok en {1:mijn moeder|OUDERS} is dokter.',
          'Ik heb {2:een zus|ZUS} en {2:een broer|BROER}.',
          '{3:Mijn oma|OMA} kookt heel lekker.',
          'En {4:de baby}? Hij eet alle frieten!',
        ],
        notes: 'Mots de la fiche : de vader, de moeder, de ouders, de zoon, de dochter, de broer, de zus, de opa, de oma, de baby, het gezin, de tweeling, de buurman. Variante : apportez une photo de famille (réelle ou inventée) et présentez-la à l’oral.',
      },
      {
        t: 'Met de fiets naar het werk', img: 'a1_stad', fr: 'À vélo au travail', ref: 'vocabulaire 03 · p. 80', mode: 'O',
        sit: 'Vous habitez en ville. Comment allez-vous au travail ?',
        crit: [
          { t: 'Votre ville : **IK WOON IN** …', k: 'WOON IN' },
          { t: 'Le transport : **MET DE** fiets / tram / bus / trein.', k: 'MET DE' },
          { t: 'Un lieu de la ville : het station, de brug, de kerk…', k: 'IN DE STAD' },
          { t: 'Une chute avec **HET VERKEERSLICHT**.', k: 'VERKEERSLICHT' },
        ],
        ex: [
          '{1:Ik woon in} Antwerpen.',
          'Ik ga {2:met de fiets} naar het werk.',
          'Ik fiets naar {3:het station|IN DE STAD} en over {3:de brug|IN DE STAD}.',
          'Maar {4:het verkeerslicht} is rood… en ik ben laat!',
        ],
        notes: 'Mots de la fiche : het station, de trein, de bus, de tram, de fiets, de auto, de straat, het verkeerslicht, de brug, de kerk, het museum, de bibliotheek, de plattegrond, de bushalte, de parking. Met de… (le moyen) · naar… (la destination).',
      },
      {
        t: 'Wat eten we vanavond?', img: 'a1_avondeten', fr: 'Qu’est-ce qu’on mange ce soir ?', ref: 'vocabulaire 04 · p. 81', mode: 'W',
        sit: 'Des ami·es viennent dîner. Vous préparez le repas.',
        crit: [
          { t: 'Le plat : **IK KOOK** + vis / vlees / soep…', k: 'IK KOOK' },
          { t: 'L’accompagnement : **MET** + groenten / frieten…', k: 'MET' },
          { t: 'La boisson : **WE DRINKEN** …', k: 'WE DRINKEN' },
          { t: 'Une chute avec **LEKKER** (ou pas !).', k: 'LEKKER' },
        ],
        ex: [
          'Vanavond {1:kook ik|IK KOOK} vis {2:met groenten|MET}.',
          '{3:We drinken} water en een beetje wijn.',
          'Oei, de vis is zwart: {4:niet lekker|LEKKER}… We eten frieten!',
        ],
        notes: 'Mots de la fiche : het brood, de kaas, de boter, het ei, de melk, de koffie, de thee, het water, de soep, de frieten, het vlees, de vis, de groenten, het fruit, het bestek. Lekker = bon (au goût). « Vanavond kook ik » : le bloc de la séquence 1.1 (moment + verbe + ik). Variante : composez à deux le menu de la classe.',
      },
      {
        t: 'In de supermarkt', img: 'a1_supermarkt', fr: 'Au supermarché', ref: 'vocabulaire 05 · p. 82', mode: 'O',
        sit: 'Vous faites les courses de la semaine. Au moment de payer…',
        crit: [
          { t: 'Ce que vous achetez : **IK KOOP** …', k: 'IK KOOP' },
          { t: 'Où vous allez : **NAAR DE KASSA**.', k: 'KASSA' },
          { t: 'Le prix : **HET KOST** … euro.', k: 'PRIJS' },
          { t: 'Une chute avec **HET KASTICKET**.', k: 'KASTICKET' },
        ],
        ex: [
          '{1:Ik koop} een fles water, melk en drie blikken tomaten.',
          'Dan ga ik {2:naar de kassa|KASSA}.',
          '{3:Het kost|PRIJS} tweeënveertig euro.',
          '{4:Het kasticket} is één meter lang!',
        ],
        notes: 'Mots de la fiche : de winkel, de supermarkt, de bakker, de slager, de markt, het mandje, het winkelwagentje, de kassa, het geld, de prijs, het kasticket, de tas, de fles, het blik, de weegschaal. Nombres : 42 = tweeënveertig (le tréma sépare les deux e).',
      },
      {
        t: 'Ik ben ziek', img: 'a1_ziek', fr: 'Je suis malade', ref: 'vocabulaire 06 · p. 83', mode: 'O',
        sit: 'Vous êtes au lit, malade. Vous téléphonez à votre collègue.',
        crit: [
          { t: 'Votre état : **IK BEN ZIEK**.', k: 'ZIEK' },
          { t: 'Où vous avez mal : **MIJN** … **DOET PIJN**.', k: 'DOET PIJN' },
          { t: 'Un symptôme : **IK HEB KOORTS**.', k: 'KOORTS' },
          { t: 'Une chute : **IK GA NAAR** de dokter / de apotheek…', k: 'IK GA NAAR' },
        ],
        ex: [
          'Hallo Pieter, {1:ik ben ziek}.',
          '{2:Mijn hoofd doet pijn|DOET PIJN}.',
          '{3:Ik heb koorts|KOORTS}: negenendertig graden!',
          'Morgen {4:ga ik naar|IK GA NAAR} de dokter… of naar oma!',
        ],
        notes: 'Mots de la fiche : het hoofd, het oog, de neus, de mond, het oor, de hand, de arm, het been, de voet, de buik, de dokter, het ziekenhuis, de apotheek, de medicijnen, de koorts. Mijn buik / mijn keel / mijn rug doet pijn. Mimez : la classe devine où vous avez mal.',
      },
      {
        t: 'Op kantoor', img: 'a1_kantoor', fr: 'Au bureau', ref: 'vocabulaire 07 · p. 84', mode: 'W',
        sit: 'Premier jour dans votre nouveau travail. Décrivez votre bureau.',
        crit: [
          { t: 'Le lieu : **IK WERK IN** een kantoor / een fabriek…', k: 'WERK IN' },
          { t: 'Le matériel : **ER IS** een computer, een printer…', k: 'ER IS' },
          { t: 'Les gens : **MIJN COLLEGA** / **MIJN BAAS** is…', k: 'COLLEGA' },
          { t: 'Une chute avec **DE KOFFIEAUTOMAAT**.', k: 'KOFFIEAUTOMAAT' },
        ],
        ex: [
          '{1:Ik werk in} een groot kantoor in Brussel.',
          '{2:Er is} een nieuwe computer op mijn bureau.',
          '{3:Mijn collega|COLLEGA} is heel vriendelijk.',
          'Maar {4:de koffieautomaat} is kapot!',
        ],
        notes: 'Mots de la fiche : het kantoor (le lieu), het bureau (le meuble), de computer, de printer, de vergadering, de collega, de baas, de fabriek, het contract, het loon, de koffieautomaat, de lift, de klant. Attention : het bureau = le meuble ; het kantoor = le bureau-lieu.',
      },
      {
        t: 'Een berichtje', img: 'a1_berichtje', fr: 'Un SMS', ref: 'vocabulaire 08 · p. 85', mode: 'W', lines: true,
        sit: 'Vous êtes en retard. Vous envoyez un SMS à votre collègue.',
        crit: [
          { t: 'Saluez : **HOI** + prénom.', k: 'HOI' },
          { t: 'Le problème : **MIJN GSM**, **MIJN OPLADER**, **DE WIFI**…', k: 'GSM' },
          { t: 'Une demande à l’impératif : **BEL** me / **STUUR** …', k: 'IMPÉRATIF' },
          { t: 'Prenez congé : **TOT STRAKS** + votre prénom.', k: 'TOT STRAKS' },
        ],
        ex: [
          '{1:Hoi Pieter}!',
          'Ik ben laat: {2:mijn gsm|GSM} is bijna leeg en ik heb geen oplader.',
          '{3:Bel|IMPÉRATIF} me niet, {3:stuur|IMPÉRATIF} een berichtje!',
          '{4:Tot straks}, Emma',
        ],
        notes: 'Mots de la fiche : de telefoon, de gsm, bellen, het berichtje, de e-mail, de bijlage, het scherm, de headset, de wifi, de oplader, versturen, het wachtwoord, het videogesprek. Écrivez le SMS sur un vrai téléphone et envoyez-le à votre voisin·e, qui répond.',
      },
      {
        t: 'Op het gemeentehuis', img: 'a1_gemeentehuis', fr: 'À la maison communale', ref: 'vocabulaire 09 · p. 86', mode: 'O',
        sit: 'Vous avez rendez-vous à la maison communale pour un document.',
        crit: [
          { t: 'Saluez et annoncez : **IK HEB EEN AFSPRAAK**.', k: 'AFSPRAAK' },
          { t: 'Vos documents : **HIER IS** mijn paspoort / het formulier.', k: 'HIER IS' },
          { t: 'Une question : **WAAR IS** het loket … ?', k: 'WAAR IS' },
          { t: 'Une chute avec **DE WACHTRIJ**.', k: 'WACHTRIJ' },
        ],
        ex: [
          'Goedemorgen, {1:ik heb een afspraak} om tien uur.',
          '{2:Hier is} mijn paspoort en het formulier.',
          '{3:Waar is} loket drie?',
          'O nee, {4:de wachtrij} is heel lang… twintig mensen!',
        ],
        notes: 'Mots de la fiche : het formulier, de handtekening, het paspoort, het gemeentehuis, het loket, de wachtrij, de stempel, de brief, de envelop, de postzegel, de brievenbus, de afspraak, het dossier, de factuur. Jeu de rôle : l’employé·e au guichet répond « Neem een nummertje! ».',
      },
      {
        t: 'Het is winter!', img: 'a1_winter', fr: 'C’est l’hiver !', ref: 'vocabulaire 10 · p. 87', mode: 'O',
        sit: 'Quel temps fait-il ? Décrivez la saison et la météo.',
        crit: [
          { t: 'La saison : **HET IS** winter / zomer / lente / herfst.', k: 'SEIZOEN' },
          { t: 'La météo : **HET SNEEUWT**, **HET REGENT**, **HET WAAIT**…', k: 'HET WEER' },
          { t: 'La température : … **GRADEN**.', k: 'GRADEN' },
          { t: 'Une chute : **VANDAAG** + verbe + **IK** …', k: 'VANDAAG' },
        ],
        ex: [
          '{1:Het is winter|SEIZOEN}.',
          '{2:Het sneeuwt|HET WEER} en {2:het waait|HET WEER}.',
          'Het is {3:min vijf graden|GRADEN}!',
          '{4:Vandaag blijf ik|VANDAAG} thuis, met een warme chocolademelk.',
        ],
        notes: 'Mots de la fiche : de zon, de regen, de wolk, de wind, de sneeuw, het onweer, de regenboog, de mist, de temperatuur, de lente, de zomer, de herfst, de winter. Het regent / het sneeuwt / het waait / de zon schijnt. Variante : chacun·e tire une saison et la classe devine.',
      },
      {
        t: 'Karaoke!', img: 'a1_karaoke', fr: 'Karaoké !', ref: 'vocabulaire 11 · p. 88', mode: 'O',
        sit: 'Soirée karaoké avec la classe. Qu’en pensez-vous ?',
        crit: [
          { t: 'Une émotion : **IK BEN** + nuanceur + adjectif.', k: 'IK BEN + adj.' },
          { t: 'Une opinion : **IK VIND HET LEUK**.', k: 'LEUK' },
          { t: 'Une opinion négative : **IK VIND HET NIET LEUK**.', k: 'NIET LEUK' },
          { t: 'Une chute avec **WANT**.', k: 'WANT' },
        ],
        ex: [
          '{1:Ik ben een beetje zenuwachtig|IK BEN + adj.}.',
          'Muziek? {2:Ik vind het leuk|LEUK}!',
          'Zingen? {3:Ik vind het niet leuk|NIET LEUK}…',
          'Maar ik zing toch, {4:want Pieter zingt heel vals|WANT}!',
        ],
        notes: 'Mots de la fiche : blij, verdrietig, boos, bang, moe, verrast, verliefd, zenuwachtig, zich vervelen, trots, rustig, ziek · Ik vind het (niet) leuk · Ik weet het niet. Vals zingen = chanter faux. Variante : un sondage dans la classe (« Vind je zingen leuk? »).',
      },
    ],
  },
  // ================================================================== SECTION 4
  {
    id: 'S4', label: 'A1 · Situations', name: 'Mises en situation · jalon A1', nl: 'dialoog & rollenspel', pages: 'syllabus, section 4 · p. 92 – 100',
    spec: ['poser des **questions simples**', '**ik zoek · ik wil · ik kan**', 'les **jours** et les **heures**', 'remplir un **formulaire**', 'se présenter **au travail**', 'dire **comment on va**', 'demander son **chemin**', 'parler d’un **examen**'],
    ctx: [
      {
        t: 'Bij het uitzendbureau', img: 'a1_uitzendbureau', fr: 'À l’agence d’intérim', ref: 'fiche 1 · p. 92', mode: 'O',
        sit: 'Vous cherchez du travail. Vous vous inscrivez dans une agence d’intérim.',
        crit: [
          { t: 'Saluez poliment : **GOEDEMORGEN, MEVROUW**.', k: 'GROETEN' },
          { t: 'Votre but : **IK ZOEK WERK**.', k: 'IK ZOEK' },
          { t: 'Votre demande : **IK WIL ME INSCHRIJVEN**.', k: 'INSCHRIJVEN' },
          { t: 'Une question : **WELKE DOCUMENTEN** heb ik nodig?', k: 'WELKE' },
          { t: 'Une chute avec **NIET** ou **GEEN**.', k: 'NIET / GEEN' },
        ],
        ex: [
          '{1:Goedemorgen, mevrouw|GROETEN}.',
          '{2:Ik zoek werk} en {3:ik wil me inschrijven|INSCHRIJVEN}.',
          '{4:Welke documenten} heb ik nodig?',
          'Oei… ik heb mijn identiteitskaart {5:niet|NIET / GEEN} bij me!',
        ],
        notes: 'Vocabulaire du jalon A1 : inschrijven, zoeken, de werkzoekende, het interimkantoor, het inschrijvingsformulier, zich aanmelden. « Ik heb mijn identiteitskaart niet bij me » : niet devant un possessif (fiche 06). Jeu de rôle : l’employé·e demande « Hoe heet u? Wat is uw adres? ».',
      },
      {
        t: 'Over je cv', img: 'a1_cv', fr: 'Parler du CV', ref: 'fiche 2 · p. 93', mode: 'O', lines: true,
        sit: 'Vous êtes conseiller·ère. Posez des questions sur le CV d’un·e candidat·e.',
        crit: [
          { t: 'Le métier : **WAT IS UW BEROEP?**', k: 'BEROEP' },
          { t: 'La formation : **WELKE OPLEIDING** volgt u?', k: 'OPLEIDING' },
          { t: 'Les langues : **SPREEKT U** Nederlands?', k: 'SPREEKT U' },
          { t: 'L’expérience : **HEBT U ERVARING?**', k: 'ERVARING' },
          { t: 'Une chute : une réponse surprenante !', k: 'CHUTE' },
        ],
        ex: [
          '— {1:Wat is uw beroep}? — Ik ben kok.',
          '— {2:Welke opleiding} volgt u? — Een cursus Nederlands!',
          '— {3:Spreekt u} Nederlands? — Ja, een beetje.',
          '— {4:Hebt u ervaring}? — Ja… {5:in mijn keuken, voor mijn kat!|CHUTE}',
        ],
        notes: 'Vocabulaire du jalon A1 : de identiteit, de ervaring, de opleiding, de rubriek, volgen, werken, spreken, het beroep. Vouvoiement : u + verbe avec -t (Spreekt u? Hebt u?). Inversez les rôles : la ou le candidat·e répond avec ses vraies informations.',
      },
      {
        t: 'Wanneer ben je vrij?', img: 'a1_agenda', fr: 'Quand es-tu libre ?', ref: 'fiche 3 · p. 94', mode: 'O', lines: true,
        sit: 'Vous fixez un rendez-vous avec un·e collègue pour un projet.',
        crit: [
          { t: 'Demandez : **WANNEER BEN JE VRIJ?**', k: 'WANNEER' },
          { t: 'Un jour : **OP** maandag, dinsdag, woensdag…', k: 'OP + jour' },
          { t: 'Une heure : **OM** … uur.', k: 'OM + heure' },
          { t: 'Concluez : **TOT** + jour !', k: 'TOT …' },
        ],
        ex: [
          '— {1:Wanneer ben je vrij}, Pieter?',
          '— {2:Op woensdag|OP + jour}, maar niet op donderdag.',
          '— Woensdag {3:om tien uur|OM + heure}?',
          '— Prima! {4:Tot woensdag|TOT …}!',
        ],
        notes: 'Les jours : maandag, dinsdag, woensdag, donderdag, vrijdag, zaterdag, zondag. Vocabulaire du jalon A1 : beschikbaar, afspreken, vrijmaken, passen (Past dat?). Jeu : chacun·e a un agenda rempli à moitié ; trouvez un créneau commun.',
      },
      {
        t: 'Een cursus Nederlands', img: 'a1_cursus', fr: 'Un cours de néerlandais', ref: 'fiche 4 · p. 95', mode: 'O',
        sit: 'Vous voulez suivre un cours de néerlandais. Vous posez vos questions à l’accueil.',
        crit: [
          { t: 'Le début : **WANNEER** begint de les?', k: 'WANNEER' },
          { t: 'Le lieu : **WAAR** is het klaslokaal?', k: 'WAAR' },
          { t: 'Le prix : **HOEVEEL** kost de cursus?', k: 'HOEVEEL' },
          { t: 'Une chute avec **HOE LANG** duurt … ?', k: 'HOE LANG' },
        ],
        ex: [
          '{1:Wanneer} begint de les?',
          '{2:Waar} is het klaslokaal?',
          '{3:Hoeveel} kost de cursus?',
          'En {4:hoe lang} duurt de pauze?',
        ],
        notes: 'Vocabulaire du jalon A1 : wanneer, het klaslokaal, de les, hoeveel, hoe lang, welke, beginnen, kosten, duren. Jalon A2 (pour les plus rapides) : répondre — « De les begint op maandag en duurt tien weken. »',
      },
      {
        t: 'Een formulier invullen', img: 'a1_formulier', fr: 'Remplir un formulaire', ref: 'fiche 5 · p. 96', mode: 'W',
        sit: 'Vous vous inscrivez à la bibliothèque. Écrivez vos informations.',
        crit: [
          { t: '**MIJN VOORNAAM IS** …', k: 'VOORNAAM' },
          { t: '**MIJN ACHTERNAAM IS** …', k: 'ACHTERNAAM' },
          { t: '**MIJN ADRES IS** + rue + numéro + ville.', k: 'ADRES' },
          { t: '**MIJN TELEFOONNUMMER IS** …', k: 'TELEFOONNUMMER' },
          { t: 'Une chute : **DEZE KAART IS VAN** …', k: 'VAN …' },
        ],
        ex: [
          '{1:Mijn voornaam is} Sarah.',
          '{2:Mijn achternaam is} Peeters.',
          '{3:Mijn adres is} Kerkstraat 12, Gent.',
          '{4:Mijn telefoonnummer is} 0475 12 34 56.',
          'En {5:deze kaart is van|VAN …} mijn kat, Minou!',
        ],
        notes: 'Vocabulaire du jalon A1 : de voornaam, de achternaam, het telefoonnummer, het adres, de cursus, volgen, de kaart. À l’oral, dites le numéro de téléphone chiffre par chiffre (nul vier zeven vijf…). Variante : dictée de numéros par deux.',
      },
      {
        t: 'Wat kunt u goed?', img: 'a1_sollicitatie', fr: 'Que savez-vous bien faire ?', ref: 'fiche 6 · p. 97', mode: 'O',
        sit: 'Entretien d’embauche. Répondez simplement aux questions.',
        crit: [
          { t: 'Ce que vous savez faire : **IK KAN GOED** + verbe.', k: 'IK KAN GOED' },
          { t: 'Ce que vous voulez apprendre : **IK WIL GRAAG** … **LEREN**.', k: 'IK WIL … LEREN' },
          { t: 'Quand vous commencez : **IK KAN BEGINNEN OP** …', k: 'BEGINNEN' },
          { t: 'Une chute avec **MAAR** !', k: 'MAAR' },
        ],
        ex: [
          '{1:Ik kan goed} koken en organiseren.',
          '{2:Ik wil graag|IK WIL …} beter Nederlands {2:leren|… LEREN}.',
          '{3:Ik kan beginnen op|BEGINNEN} maandag…',
          '{4:Maar} niet om zeven uur ’s morgens!',
        ],
        notes: 'Vocabulaire du jalon A1 : kunnen, willen, moeten, leren, beginnen, goed, graag, nog, vanaf. Verbe modal + infinitif à la fin : Ik kan goed koken. Ik wil Nederlands leren. Jeu de rôle avec les questions du syllabus : Wat kunt u goed? Wanneer kunt u beginnen?',
      },
      {
        t: 'Nieuw op het werk', img: 'a1_nieuw', fr: 'Nouveau au travail', ref: 'fiche 7 · p. 98', mode: 'O', lines: true,
        sit: 'Premier jour dans l’entreprise. Vous parlez avec un·e collègue.',
        crit: [
          { t: 'Présentez-vous : **IK BEN NIEUW HIER**.', k: 'NIEUW' },
          { t: 'Votre service : **IK WERK OP DE AFDELING** …', k: 'AFDELING' },
          { t: 'Une question : **WAT DOE JIJ?**', k: 'WAT DOE JIJ?' },
          { t: 'Une autre question : **WIE IS** … ?', k: 'WIE IS' },
          { t: 'Une chute amusante !', k: 'CHUTE' },
        ],
        ex: [
          '— Hallo, {1:ik ben nieuw hier|NIEUW}. Ik ben Lisa.',
          '— {2:Ik werk op de afdeling|AFDELING} marketing. {3:Wat doe jij}?',
          '— Ik werk in de administratie.',
          '— En {4:wie is} de manager? — {5:Ik!|CHUTE}',
        ],
        notes: 'Vocabulaire du jalon A1 : nieuw, hier, de afdeling, werken, doen, de marketing, de administratie, de verkoopafdeling. Jouez la scène debout, comme à la machine à café. Variante : chacun·e tire une carte « afdeling » (marketing, verkoop, logistiek…).',
      },
      {
        t: 'Hoe voel je je?', img: 'a1_gevoel', fr: 'Comment te sens-tu ?', ref: 'fiche 8 · p. 99', mode: 'O', lines: true,
        sit: 'Votre collègue Sarah a l’air très fatiguée. Vous lui demandez comment elle va.',
        crit: [
          { t: 'Demandez : **HOE VOEL JE JE VANDAAG?**', k: 'HOE VOEL JE JE' },
          { t: 'Une question oui / non : **BEN JE** moe / gestrest?', k: 'BEN JE …?' },
          { t: 'Répondez avec un nuanceur : een beetje, heel, **ONTZETTEND**…', k: 'NUANCEUR' },
          { t: 'Une chute avec **WANT**.', k: 'WANT' },
        ],
        ex: [
          '— {1:Hoe voel je je vandaag|HOE VOEL JE JE}, Sarah? {2:Ben je moe|BEN JE …?}?',
          '— Ja, {3:ontzettend moe|NUANCEUR}, {4:want mijn baby slaapt niet|WANT}!',
        ],
        notes: 'Vocabulaire du jalon A1 : moe, gestrest, rustig, vrij, heel, bezet, een beetje, ontzettend. Recyclage de la séquence 1.2 (ik voel me + nuanceur + adjectif). Jeu : on mime une émotion, la classe demande « Ben je… ? ».',
      },
      {
        t: 'Waar is lokaal 204?', img: 'a1_weg', fr: 'Où est le local 204 ?', ref: 'fiche 9 · p. 100', mode: 'O', lines: true,
        sit: 'À l’école, vous cherchez le local 204. Vous demandez votre chemin.',
        crit: [
          { t: 'Abordez poliment : **PARDON, MAG IK IETS VRAGEN?**', k: 'MAG IK …?' },
          { t: 'Votre question : **WAAR IS** lokaal 204?', k: 'WAAR IS' },
          { t: 'La réponse : **LINKS**, **RECHTS** ou **RECHTDOOR**.', k: 'RECHTS' },
          { t: 'Remerciez : **DANK U WEL!**', k: 'DANK U' },
          { t: 'Une chute : le local est… juste là !', k: 'CHUTE' },
        ],
        ex: [
          '— {1:Pardon, mag ik iets vragen|MAG IK …?}? {2:Waar is} lokaal 204?',
          '— Niet links, maar {3:rechts|RECHTS}, achteraan.',
          '— {4:Dank u wel}!',
          '— Graag gedaan… Maar kijk: {5:lokaal 204 is hier!|CHUTE}',
        ],
        notes: 'Vocabulaire de la fiche : goedemorgen, hoe gaat het, dank u, tot straks · mag ik iets vragen, de hulp, het klaslokaal, natuurlijk, bedankt, rechts achteraan. Jeu de piste : un plan de l’école, un·e élève guide l’autre les yeux fermés.',
      },
      {
        t: 'Het examen', img: 'a1_examen', fr: 'L’examen', ref: 'fiche 10 · p. 100', mode: 'O',
        sit: 'Aujourd’hui, c’est l’examen de néerlandais. Comment ça se passe ?',
        crit: [
          { t: 'Le contexte : **VANDAAG HEB IK EEN EXAMEN**.', k: 'EXAMEN' },
          { t: 'Votre émotion : **IK BEN** + nuanceur + zenuwachtig.', k: 'IK BEN + adj.' },
          { t: 'Une question : **MOEILIJK** of **MAKKELIJK**?', k: 'MOEILIJK?' },
          { t: 'Une chute : le résultat… **IK BEN TROTS!**', k: 'TROTS' },
        ],
        ex: [
          '{1:Vandaag heb ik een examen|EXAMEN}.',
          '{2:Ik ben heel zenuwachtig|IK BEN + adj.}.',
          'Is het {3:moeilijk|MOEILIJK?}? Nee, het is makkelijk!',
          'Achttien op twintig: {4:ik ben trots|TROTS}!',
        ],
        notes: 'Vocabulaire du jalon A1 : studeren, komen, halen, moeilijk, makkelijk, gelukt, het examen, het resultaat · trots, tevreden, zenuwachtig. Pour les plus rapides (jalon A2) : raconter au passé — « Ik heb goed gestudeerd. »',
      },
    ],
  },
];

module.exports = { SECTIONS };
