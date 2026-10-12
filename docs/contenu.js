/* =====================================================================
   CONTENU DES ÉPREUVES (A2 et B1)

   Règles d'édition :
   • Chaque question a EXACTEMENT 4 propositions dans « options ».
   • LA PREMIÈRE PROPOSITION EST TOUJOURS LA BONNE RÉPONSE.
     L'application mélange l'ordre à l'écran pour chaque étudiant.
   • « niveau » (A1, A2, B1) indique le niveau visé par la question :
     il sert seulement au rapport du professeur (prérequis / niveau cible).
   • Dans les textes, un « \n » force un retour à la ligne.
   • Luistoets : si le fichier « audio » existe, il est utilisé ;
     sinon, la transcription est lue par la voix néerlandaise du navigateur.
     Format d'une réplique : ["clé du personnage", "texte"].
   ===================================================================== */
window.CONTENU = {
  /* =================================================================
     NIVEAU A2
     ================================================================= */
  A2: {
    niveau: "A2",
    libelle: "Utilisateur élémentaire",
    resume: "Comprendre et rédiger des messages simples de la vie professionnelle : horaires, rendez-vous, consignes, disponibilités.",

    /* ---------------- Leestoets ---------------- */
    lecture: {
      titre: "Je eerste werkdag",
      consigne: "Lees de e-mail. Beantwoord dan de vragen: kies telkens het juiste antwoord.",
      consigneFr: "Lisez l'e-mail, puis répondez aux questions : choisissez chaque fois la bonne réponse.",
      document: {
        type: "email",
        entete: {
          Van: "Sarah Peeters <personeel@hoteldelinde.be>",
          Aan: "Karim Benali",
          Onderwerp: "Welkom! Je eerste werkdag",
        },
        paragraphes: [
          "Beste Karim,",
          "Welkom bij Hotel De Linde! We zijn blij dat je ons team komt versterken. Hier vind je alle informatie voor je eerste werkdag, volgende maandag.",
          "Je collega's aan de receptie beginnen om 7 uur, maar jij begint op je eerste dag om 9 uur. Kom eerst naar mijn kantoor. Dat is op de eerste verdieping, naast de lift. Ik geef je een rondleiding in het hotel en je krijgt je uniform. Breng zelf zwarte schoenen mee, want die horen niet bij het uniform.",
          "Vergeet ook je identiteitskaart en je bankrekeningnummer niet. Ik heb ze nodig voor je contract.",
          "De middagpauze is van 12 tot 12.30 uur. Het personeel eet samen in de refter, in de kelder. Soep en koffie zijn gratis. Je kunt je eigen boterhammen meebrengen of een warme maaltijd kopen voor 5 euro.",
          "Kom je met de auto? Parkeer dan niet voor het hotel, want die plaatsen zijn voor onze gasten. Het personeel parkeert achter het hotel, in de Molenstraat. Met de tram is het nog makkelijker: de halte Korenmarkt is op twee minuten te voet.",
          "De eerste week werk je samen met Tom. Hij werkt al tien jaar bij ons en kent alle vaste klanten. Vanaf de tweede week werk je alleen. Je uurrooster voor de hele maand krijg je vrijdag per e-mail.",
          "Ben je ziek of heb je een probleem? Bel me dan vóór 8 uur op het nummer 09 234 56 78.",
          "Tot maandag!",
          "Sarah Peeters\nPersoneelsdienst Hotel De Linde",
        ],
      },
      questions: [
        { niveau: "A2", question: "Waarom schrijft Sarah deze e-mail?",
          options: ["Om Karim informatie te geven over zijn eerste werkdag.", "Om Karim uit te nodigen voor een sollicitatiegesprek.", "Om Karim te vragen zijn contract terug te sturen.", "Om Karim een kamer in het hotel aan te bieden."] },
        { niveau: "A1", question: "Hoe laat begint Karim op zijn eerste werkdag?",
          options: ["Om 9 uur.", "Om 7 uur.", "Om 8 uur.", "Om 12 uur."] },
        { niveau: "A1", question: "Waar moet Karim eerst naartoe?",
          options: ["Naar het kantoor van Sarah, op de eerste verdieping.", "Naar de receptie, op het gelijkvloers.", "Naar de refter, in de kelder.", "Naar de parking, in de Molenstraat."] },
        { niveau: "A2", question: "Waarvoor heeft Sarah Karims bankrekeningnummer nodig?",
          options: ["Voor zijn contract.", "Voor zijn uniform.", "Voor de parking.", "Voor de warme maaltijd."] },
        { niveau: "A2", question: "Wat is een „refter”?",
          options: ["Een ruimte waar het personeel eet.", "Een kantoor van de personeelsdienst.", "Een kamer voor de gasten.", "Een parking voor het personeel."] },
        { niveau: "A1", question: "Wat is gratis tijdens de middagpauze?",
          options: ["Soep en koffie.", "De warme maaltijd.", "De boterhammen.", "Een broodje en een drankje."] },
        { niveau: "A2", question: "Karim komt met de auto. Waar mag hij parkeren?",
          options: ["Achter het hotel, in de Molenstraat.", "Voor het hotel.", "Bij de tramhalte Korenmarkt.", "In de kelder van het hotel."] },
        { niveau: "A2", question: "Wie is Tom?",
          options: ["Een collega met veel ervaring.", "De directeur van het hotel.", "Een nieuwe receptionist, net als Karim.", "Een vaste klant van het hotel."] },
        { niveau: "A2", question: "Wanneer krijgt Karim zijn uurrooster?",
          options: ["Vrijdag, per e-mail.", "Maandag, van Sarah.", "In de tweede week, van Tom.", "Nu, bij deze e-mail."] },
        { niveau: "A2", question: "Karim is maandagochtend ziek. Wat moet hij doen?",
          options: ["Sarah vóór 8 uur bellen.", "Tom een e-mail sturen.", "Om 9 uur naar het kantoor van Sarah gaan.", "Wachten tot vrijdag."] },
      ],
    },

    /* ---------------- Luistoets ---------------- */
    ecoute: {
      titre: "Een telefoongesprek met het interimkantoor",
      situation: "Marc belt naar een interimkantoor.",
      consigne: "Luister naar het gesprek. Beantwoord dan de vragen. Je mag de vragen al lezen voor je luistert.",
      consigneFr: "Écoutez la conversation, puis répondez aux questions. Vous pouvez lire les questions avant d'écouter.",
      audio: "audio/a2-luistoets.mp3",
      personnages: {
        L: { nom: "Lies (interimkantoor)", voix: "F" },
        M: { nom: "Marc", voix: "M" },
      },
      transcription: [
        ["L", "Goedemorgen, interimkantoor Werk Plus, met Lies. Waarmee kan ik u helpen?"],
        ["M", "Goedemorgen, mevrouw. Mijn naam is Marc Dubois. Ik bel voor de job als magazijnier op uw website. Is die job nog vrij?"],
        ["L", "Ja, die is nog vrij. Het is een job in een magazijn in Zaventem, vlak bij de luchthaven. Hebt u al ervaring?"],
        ["M", "Ja, ik heb drie jaar in een magazijn in Charleroi gewerkt. Maar nu woon ik in Brussel."],
        ["L", "Heel goed. En hebt u een auto?"],
        ["M", "Nee, ik heb geen auto. Ik neem de trein."],
        ["L", "Geen probleem. Het magazijn is op tien minuten te voet van het station. Het is wel werk in twee ploegen: de ene week werkt u van 6 tot 14 uur, de andere week van 14 tot 22 uur. Is dat oké voor u?"],
        ["M", "Ja, dat is oké. Alleen op zaterdag kan ik niet werken. Dan breng ik mijn dochter naar de voetbalclub."],
        ["L", "Dat is geen probleem, het magazijn is in het weekend gesloten. U verdient vijftien euro per uur. Kunt u morgen langskomen voor een gesprek?"],
        ["M", "Morgen, dinsdag? Nee, dat gaat helaas niet. Dan heb ik een afspraak bij de dokter. Woensdag kan ik wel."],
        ["L", "Woensdag om half elf, past dat?"],
        ["M", "Ja, dat past."],
        ["L", "Neem dan uw identiteitskaart en uw cv mee. Ons kantoor is in de Nieuwstraat, nummer achtenveertig, naast de bank."],
        ["M", "Nieuwstraat achtenveertig, naast de bank. Ik noteer het."],
        ["L", "En vraag naar mij: Lies."],
        ["M", "Prima. Dank u wel, mevrouw. Tot woensdag!"],
        ["L", "Graag gedaan, meneer Dubois. Tot woensdag!"],
      ],
      questions: [
        { niveau: "A2", question: "Waarom belt Marc naar het interimkantoor?",
          options: ["Hij is geïnteresseerd in een job als magazijnier.", "Hij wil een afspraak bij de dokter maken.", "Hij zoekt een appartement in Zaventem.", "Hij wil zijn contract stoppen."] },
        { niveau: "A2", question: "Waar is het magazijn?",
          options: ["In Zaventem, vlak bij de luchthaven.", "In Brussel, naast het station.", "In Charleroi, naast de bank.", "In de Nieuwstraat, naast de bank."] },
        { niveau: "A1", question: "Hoeveel jaar ervaring heeft Marc in een magazijn?",
          options: ["Drie jaar.", "Twee jaar.", "Tien jaar.", "Geen ervaring."] },
        { niveau: "A1", question: "Hoe gaat Marc naar zijn werk?",
          options: ["Met de trein.", "Met de auto.", "Met de bus.", "Met de fiets."] },
        { niveau: "A2", question: "Wat zijn de werkuren?",
          options: ["De ene week van 6 tot 14 uur, de andere week van 14 tot 22 uur.", "Elke dag van 8 tot 16 uur.", "De ene week van 7 tot 15 uur, de andere week van 15 tot 23 uur.", "Alleen 's nachts, van 22 tot 6 uur."] },
        { niveau: "A2", question: "Waarom kan Marc op zaterdag niet werken?",
          options: ["Hij brengt zijn dochter naar de voetbalclub.", "Hij heeft een afspraak bij de dokter.", "Hij werkt op zaterdag in een ander magazijn.", "Er rijden geen treinen op zaterdag."] },
        { niveau: "A1", question: "Hoeveel verdient Marc per uur?",
          options: ["15 euro.", "50 euro.", "16 euro.", "14 euro."] },
        { niveau: "A1", question: "Wanneer heeft Marc een gesprek op het interimkantoor?",
          options: ["Woensdag om 10.30 uur.", "Dinsdag om 10.30 uur.", "Woensdag om 11.30 uur.", "Dinsdag om 11.30 uur."] },
        { niveau: "A2", question: "Wat moet Marc meebrengen?",
          options: ["Zijn identiteitskaart en zijn cv.", "Zijn rijbewijs en zijn cv.", "Zijn identiteitskaart en een foto.", "Zijn bankkaart en zijn diploma."] },
        { niveau: "A1", question: "Wat is het adres van het interimkantoor?",
          options: ["Nieuwstraat 48, naast de bank.", "Nieuwstraat 84, naast de bank.", "Nieuwstraat 48, naast het station.", "Stationsstraat 48, naast de bakker."] },
      ],
    },

    /* ---------------- Schrijfopdracht ---------------- */
    ecriture: {
      titre: "Een e-mail van je verantwoordelijke",
      situation: "Je werkt als bediende bij de firma Van Damme. Je verantwoordelijke, Els Claes, stuurt je deze e-mail.",
      situationFr: "Vous travaillez comme employé(e) dans l'entreprise Van Damme. Votre responsable, Els Claes, vous envoie l'e-mail ci-dessous.",
      documents: [
        {
          type: "email",
          entete: { Van: "Els Claes", Aan: "Het team", Onderwerp: "Teamvergadering volgende dinsdag" },
          paragraphes: [
            "Hallo iedereen,",
            "Volgende dinsdag om 10 uur hebben we een teamvergadering over het nieuwe uurrooster. De vergadering duurt ongeveer een uur. Daarna eten we samen een broodje in de refter.",
            "Kun je me laten weten of je komt? Heb je vragen over het nieuwe uurrooster? Schrijf ze dan ook in je antwoord.",
            "Groetjes,\nEls",
          ],
        },
      ],
      consigne: "Schrijf een antwoord aan Els (60 tot 90 woorden). Volg de stappen.",
      consigneFr: "Rédigez une réponse à Els (60 à 90 mots). Suivez les étapes.",
      etapes: [
        { nl: "Begin je e-mail met een aanspreking.", fr: "Commencez par une formule d'appel." },
        { nl: "Bedank Els voor de uitnodiging.", fr: "Remerciez Els pour l'invitation." },
        { nl: "Zeg dat je dinsdag om 10 uur niet kunt komen en geef de reden.", fr: "Dites que vous ne pouvez pas venir mardi à 10 h et donnez la raison." },
        { nl: "Stel een oplossing voor (bijvoorbeeld: je komt later, of je vraagt het verslag).", fr: "Proposez une solution (par exemple : vous arrivez plus tard, ou vous demandez le compte rendu)." },
        { nl: "Stel één vraag over het nieuwe uurrooster.", fr: "Posez une question sur le nouvel horaire." },
        { nl: "Sluit af met een groet en je voornaam.", fr: "Terminez par une salutation et votre prénom." },
      ],
      motsMin: 60,
      motsMax: 90,
    },
  },

  /* =================================================================
     NIVEAU B1
     ================================================================= */
  B1: {
    niveau: "B1",
    libelle: "Utilisateur indépendant",
    resume: "Comprendre les points essentiels d'un article et d'une interview, rédiger une réponse formelle structurée à une situation professionnelle.",

    /* ---------------- Leestoets ---------------- */
    lecture: {
      titre: "Vier lange dagen of vijf gewone?",
      consigne: "Lees het artikel. Beantwoord dan de vragen: kies telkens het beste antwoord.",
      consigneFr: "Lisez l'article, puis répondez aux questions : choisissez chaque fois la meilleure réponse.",
      document: {
        type: "article",
        source: "Weekblad Regio Mechelen — rubriek Werk",
        titre: "Vier lange dagen of vijf gewone? Bij Drukkerij Lambrecht kiest het personeel zelf",
        paragraphes: [
          "Sinds eind 2022 kunnen werknemers in België vragen om hun voltijdse werkweek in vier dagen te presteren. Ze werken dan evenveel uren als vroeger, maar hun werkdagen zijn langer. Drukkerij Lambrecht in Mechelen, een bedrijf met 85 werknemers, test het systeem nu al een jaar. Wij gingen er op bezoek.",
          "„Het idee kwam eigenlijk van het personeel zelf”, vertelt personeelsdirecteur Ann Wouters. „Tijdens een vergadering vroegen enkele werknemers of ze meer tijd voor hun gezin konden krijgen. We hebben toen beslist om het een jaar te proberen. Iedereen mocht kiezen: vier dagen van 9,5 uur of vijf dagen van 7,6 uur.” Uiteindelijk koos ongeveer de helft van het personeel voor de vierdagenweek.",
          "Bram Claes (34) is een van hen. Hij werkt in de productie en heeft twee jonge kinderen. „Op woensdag ben ik nu thuis. Ik breng de kinderen naar school en 's middags gaan we samen zwemmen. Vroeger zag ik hen tijdens de week bijna niet. De andere dagen zijn natuurlijk vermoeiend, maar dat heb ik er graag voor over.”",
          "Niet iedereen is even enthousiast. Linda Mertens (58) werkt al dertig jaar op de boekhouding en koos bewust voor vijf dagen. „Na een gewone werkdag ben ik al moe. Als ik nog bijna twee uur langer moet blijven, maak ik fouten. Bovendien woon ik vlakbij, dus een dag minder pendelen levert mij weinig op.” Ze ziet ook een nadeel voor het team: „Op vrijdag zijn we soms met heel weinig. Dan is het moeilijk om een vergadering te plannen of een klant snel te helpen.”",
          "Ook de directie ziet voor- en nadelen. Het aantal ziektedagen is met twintig procent gedaald en het bedrijf vindt gemakkelijker nieuwe werknemers. „Bij sollicitatiegesprekken is dat vaak de eerste vraag van de kandidaten”, zegt Wouters. Toch moest de planning volledig veranderen. „Vroeger maakte één persoon het uurrooster in een uurtje. Nu hebben we daar een speciaal computerprogramma voor nodig.”",
          "Volgende maand beslist de drukkerij of het systeem blijft. Wouters is optimistisch: „Ik denk dat we doorgaan, maar met één aanpassing: op vrijdag moet minstens de helft van elk team aanwezig zijn.”",
        ],
      },
      questions: [
        { niveau: "B1", question: "Wat is het hoofdonderwerp van dit artikel?",
          options: ["De ervaringen van een bedrijf waar het personeel mag kiezen tussen vier en vijf werkdagen.", "Een nieuwe wet die alle Belgische werknemers verplicht om vier dagen per week te werken.", "Een drukkerij die door de crisis minder werknemers nodig heeft.", "Een staking van het personeel van een drukkerij in Mechelen."] },
        { niveau: "A2", question: "Wat verandert er voor een werknemer die voor de vierdagenweek kiest?",
          options: ["Hij werkt evenveel uren, maar zijn werkdagen zijn langer.", "Hij werkt minder uren en verdient dus minder.", "Hij werkt meer uren en verdient dus meer.", "Hij werkt evenveel uren, maar alleen 's ochtends."] },
        { niveau: "A2", question: "Hoe is het project bij de drukkerij begonnen?",
          options: ["Enkele werknemers stelden de vraag tijdens een vergadering.", "De personeelsdirecteur las er een artikel over.", "De overheid vroeg de drukkerij om het systeem te testen.", "Een vakbond eiste het na een staking."] },
        { niveau: "A2", question: "Hoeveel werknemers kozen voor de vierdagenweek?",
          options: ["Ongeveer de helft van het personeel.", "Bijna alle 85 werknemers.", "Twintig procent van het personeel.", "Alleen de werknemers met jonge kinderen."] },
        { niveau: "B1", question: "Bram zegt: „dat heb ik er graag voor over”. Wat bedoelt hij?",
          options: ["De lange dagen zijn zwaar, maar de vrije woensdag is dat waard.", "Hij wil graag nog langer werken om meer te verdienen.", "Hij vindt de lange dagen te zwaar en wil terug naar vijf dagen.", "Hij werkt liever op woensdag dan op vrijdag."] },
        { niveau: "B1", question: "Waarom koos Linda voor vijf werkdagen?",
          options: ["Lange dagen maken haar moe en ze woont dicht bij het werk.", "Ze verdient meer met vijf dagen en ze houdt van vergaderingen.", "Ze mocht niet kiezen, omdat ze op de boekhouding werkt.", "Ze moet elke dag lang pendelen en wil dat over vijf dagen spreiden."] },
        { niveau: "A2", question: "Welk nadeel ziet Linda voor het team?",
          options: ["Op vrijdag zijn er weinig collega's aanwezig.", "Op woensdag is niemand van de boekhouding aanwezig.", "Nieuwe collega's maken meer fouten.", "Vergaderingen duren langer dan vroeger."] },
        { niveau: "B1", question: "Welke voordelen ziet de directie?",
          options: ["Minder ziektedagen en het is gemakkelijker om nieuwe werknemers te vinden.", "Het uurrooster is sneller klaar en er zijn minder vergaderingen.", "De lonen zijn lager en er zijn meer klanten.", "Er wordt meer geproduceerd op vrijdag en er zijn minder fouten."] },
        { niveau: "B1", question: "„Toch moest de planning volledig veranderen.” Wat drukt het woord „toch” hier uit?",
          options: ["Een tegenstelling: naast de voordelen is er ook een nadeel.", "Een gevolg: daarom zijn er minder ziektedagen.", "Een voorbeeld van een voordeel voor de directie.", "Een tijdsaanduiding: de planning veranderde later."] },
        { niveau: "B1", question: "Wat zal er volgens Ann Wouters waarschijnlijk gebeuren?",
          options: ["Het systeem blijft, maar op vrijdag moet minstens de helft van elk team aanwezig zijn.", "Het systeem stopt, omdat te veel werknemers ontevreden zijn.", "Alle werknemers moeten voortaan vier dagen per week werken.", "Het systeem blijft, maar niemand mag nog op vrijdag vrij nemen."] },
      ],
    },

    /* ---------------- Luistoets ---------------- */
    ecoute: {
      titre: "Werk in uitvoering — een radio-interview",
      situation: "Een radioprogramma over werk en opleiding. De presentator praat met Karen De Smet.",
      consigne: "Luister naar het interview. Beantwoord dan de vragen. Je mag de vragen al lezen voor je luistert.",
      consigneFr: "Écoutez l'interview, puis répondez aux questions. Vous pouvez lire les questions avant d'écouter.",
      audio: "audio/b1-luistoets.mp3",
      personnages: {
        P: { nom: "Presentator", voix: "M" },
        K: { nom: "Karen De Smet", voix: "F" },
      },
      transcription: [
        ["P", "Goedemiddag en welkom bij Werk in uitvoering, het programma over werk en opleiding. Vandaag zit Karen De Smet bij ons in de studio. Karen, vijf jaar geleden werkte je nog in een bank. Nu heb je je eigen cateringzaak. Hoe is dat zo gekomen?"],
        ["K", "Wel, ik heb vijftien jaar bij een bank gewerkt, eerst aan het loket en later op kantoor. Maar toen mijn kantoor sloot, verloor ik mijn job. Dat was eerst echt een schok. Maar achteraf gezien was het eigenlijk een kans."],
        ["P", "Een kans? Waarom?"],
        ["K", "Omdat ik altijd al graag kookte. Voor vrienden, voor verjaardagen, voor feestjes op school. Iedereen zei: Karen, daar moet je iets mee doen! Dus ben ik een opleiding traiteur gaan volgen in het volwassenenonderwijs. Twee avonden per week."],
        ["P", "Was dat niet zwaar, met een gezin?"],
        ["K", "Heel zwaar. Mijn zoon was toen tien. Gelukkig hielp mijn man veel in het huishouden. En de groep was fantastisch: allemaal volwassenen die opnieuw begonnen. We hielpen elkaar. Na twee jaar had ik mijn diploma."],
        ["P", "En toen heb je meteen je eigen zaak geopend?"],
        ["K", "Nee, niet meteen. Eerst heb ik een jaar bij een andere traiteur gewerkt, om het vak in de praktijk te leren. Daar heb ik veel geleerd, vooral over prijzen berekenen en over klanten. Pas daarna ben ik voor mezelf begonnen."],
        ["P", "Wie zijn je klanten nu?"],
        ["K", "Vooral bedrijven in Brussel. Ik maak broodjes en salades voor vergaderingen en recepties. En daar zijn talen heel belangrijk: de helft van mijn klanten spreekt Frans, de andere helft Nederlands, en soms zelfs Engels. Mijn Nederlands was vroeger niet zo goed, dus ik heb ook nog een taalcursus gevolgd."],
        ["P", "Heb je nooit spijt van je keuze?"],
        ["K", "Helemaal niet. Ik werk meer dan vroeger, ook in het weekend, en eerlijk gezegd verdien ik iets minder. Maar ik ben veel gelukkiger, want ik doe elke dag iets wat ik graag doe."],
        ["P", "Wat zou je aanraden aan luisteraars die ook iets anders willen doen?"],
        ["K", "Durf te beginnen, maar doe het stap voor stap. Volg eerst een opleiding en praat met mensen die al in de sector werken. En wacht niet tot alles perfect is, want dan begin je nooit!"],
        ["P", "Karen De Smet, hartelijk bedankt en veel succes!"],
        ["K", "Graag gedaan!"],
      ],
      questions: [
        { niveau: "B1", question: "Waarover gaat dit interview vooral?",
          options: ["Over hoe Karen van beroep veranderde en haar eigen zaak begon.", "Over de sluiting van bankkantoren in Brussel.", "Over de problemen van Karens cateringzaak.", "Over een kookboek dat Karen geschreven heeft."] },
        { niveau: "A2", question: "Waarom verloor Karen haar job?",
          options: ["Haar bankkantoor sloot.", "Ze wilde meer tijd voor haar zoon.", "Ze maakte te veel fouten aan het loket.", "Ze verhuisde naar Brussel."] },
        { niveau: "B1", question: "Hoe kijkt Karen nu terug op het verlies van haar job?",
          options: ["Eerst was het een schok, maar nu ziet ze het als een kans.", "Ze was er meteen blij mee.", "Ze is er nog altijd boos over.", "Ze vindt het jammer dat ze niet bij de bank kon blijven."] },
        { niveau: "B1", question: "Waarom koos Karen voor een opleiding traiteur?",
          options: ["Ze kookte altijd al graag en haar omgeving moedigde haar aan.", "De bank betaalde de opleiding.", "Het was de enige opleiding in haar buurt.", "Haar man had al een cateringzaak."] },
        { niveau: "A2", question: "Hoe volgde Karen de opleiding?",
          options: ["Twee avonden per week, twee jaar lang.", "Elke dag, een jaar lang.", "In het weekend, vijf jaar lang.", "Twee avonden per week, tien jaar lang."] },
        { niveau: "A2", question: "Wat hielp Karen om de opleiding vol te houden?",
          options: ["De hulp van haar man en de steun van de groep.", "Haar zoon, die al volwassen was.", "Een premie van haar vroegere werkgever.", "Haar vroegere collega's van de bank."] },
        { niveau: "A2", question: "Wat deed Karen na haar diploma?",
          options: ["Ze werkte eerst een jaar bij een andere traiteur.", "Ze opende meteen haar eigen zaak.", "Ze ging terug naar de bank.", "Ze gaf zelf les in het volwassenenonderwijs."] },
        { niveau: "B1", question: "Waarom volgde Karen ook een taalcursus?",
          options: ["Veel klanten spreken Nederlands en haar Nederlands was niet zo goed.", "Ze wil later in het buitenland werken.", "Ze geeft kooklessen aan toeristen.", "Haar personeel spreekt geen Frans."] },
        { niveau: "B1", question: "Hoe is Karens situatie nu, in vergelijking met vroeger?",
          options: ["Ze werkt meer en verdient iets minder, maar ze is gelukkiger.", "Ze werkt minder en verdient meer.", "Ze werkt evenveel, maar ze heeft spijt van haar keuze.", "Ze werkt niet meer in het weekend en is gelukkiger."] },
        { niveau: "B1", question: "Wat raadt Karen de luisteraars aan?",
          options: ["Stap voor stap beginnen: eerst een opleiding volgen en met mensen uit de sector praten.", "Wachten tot alles perfect is voor ze beginnen.", "Meteen hun job opzeggen en een zaak openen.", "Eerst een lening aanvragen bij de bank."] },
      ],
    },

    /* ---------------- Schrijfopdracht ---------------- */
    ecriture: {
      titre: "Een klacht van een klant",
      situation: "Je werkt bij de klantendienst van Kantoor & Co, een webwinkel voor kantoormeubels. Een klant, mevrouw Hendrickx, stuurt een klacht. Je collega heeft al informatie voor je verzameld.",
      situationFr: "Vous travaillez au service clientèle de Kantoor & Co, une boutique en ligne de mobilier de bureau. Une cliente, Mme Hendrickx, envoie une réclamation. Votre collègue a déjà rassemblé des informations pour vous.",
      documents: [
        {
          type: "email",
          entete: { Van: "Nathalie Hendrickx", Aan: "klantendienst@kantoorenco.be", Onderwerp: "Klacht – bestelling 45872" },
          paragraphes: [
            "Geachte heer, mevrouw,",
            "Op 2 maart heb ik op uw website een bureaustoel besteld (bestelling 45872). U beloofde een levering binnen drie werkdagen, maar het pakket kwam pas na twaalf dagen aan. Bovendien is de stoel beschadigd: één wiel is gebroken en de rugleuning staat scheef.",
            "Ik werk thuis en heb de stoel elke dag nodig. Ik heb twee keer naar uw klantendienst gebeld, maar niemand heeft me teruggebeld.",
            "Ik ben erg ontevreden en verwacht snel een oplossing.",
            "Met vriendelijke groeten,\nNathalie Hendrickx",
          ],
        },
        {
          type: "note",
          titre: "Notitie van je collega",
          lignes: [
            "Vertraging: nieuwe transportfirma → fout adres op het etiket",
            "Stoel beschadigd tijdens het transport",
            "Keuze voor de klant: nieuwe stoel binnen 2 werkdagen (gratis) óf volledige terugbetaling",
            "Beschadigde stoel wordt gratis opgehaald",
            "Directie akkoord: kortingsbon van 15 % voor een volgende bestelling",
            "Klantendienst: 03 456 78 90 (ma–vr, 9–17 uur)",
          ],
        },
      ],
      consigne: "Schrijf een formeel antwoord aan mevrouw Hendrickx (120 tot 160 woorden). Volg de stappen.",
      consigneFr: "Rédigez une réponse formelle à Mme Hendrickx (120 à 160 mots). Suivez les étapes.",
      etapes: [
        { nl: "Begin met een formele aanspreking.", fr: "Commencez par une formule d'appel formelle." },
        { nl: "Bedank de klant voor haar bericht en bied je excuses aan.", fr: "Remerciez la cliente pour son message et présentez vos excuses." },
        { nl: "Leg uit wat er gebeurd is (gebruik de verleden tijd en de notitie).", fr: "Expliquez ce qui s'est passé (utilisez le passé et la note)." },
        { nl: "Stel de twee oplossingen voor en vraag welke ze verkiest.", fr: "Proposez les deux solutions et demandez laquelle elle préfère." },
        { nl: "Bied de kortingsbon aan als compensatie.", fr: "Offrez le bon de réduction en compensation." },
        { nl: "Zeg hoe ze je kan bereiken.", fr: "Indiquez comment elle peut vous joindre." },
        { nl: "Sluit formeel af (groet, naam en functie).", fr: "Terminez de manière formelle (salutation, nom et fonction)." },
      ],
      motsMin: 120,
      motsMax: 160,
    },
  },
};
