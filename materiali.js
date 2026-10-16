/* =============================================================
   CATALOGO DEI MATERIALI
   Ogni materia è divisa in MODULI (argomenti generali),
   ogni modulo in LEZIONI, ogni lezione contiene le ATTIVITÀ.

   MODULO
     materia:      geografia | storia | italiano | educazione-civica
     classe:       prima | seconda | terza
     numero:       "I", "II", "III"... (o "1", "2"...)
     titolo:       l'argomento generale
     link:         facoltativo: la pagina iniziale del modulo (cliccando sul titolo)
     descrizione:  facoltativa
     lezioni:      elenco delle lezioni, tra [ ]
     attivita:     facoltativo: attività che riguardano tutto il modulo
                   (ripassi, verifiche finali), tra [ ]

   LEZIONE
     titolo, descrizione (facoltativa)
     link:         facoltativo: la pagina della lezione, se esiste
     data:         facoltativo: anno-mese-giorno, per "Aggiunti di recente"
     attivita:     elenco delle attività, tra [ ]

   ATTIVITÀ
     tipo:         Scheda | Esercizi | Ripasso | Presentazione | Video | Verifica | Lettura ...
     titolo, descrizione (facoltativa)
     link:         percorso del file, partendo dalla cartella principale
     data:         anno-mese-giorno: serve per "Aggiunti di recente" in home

   Ricorda le virgole: dopo ogni riga, tra un blocco { } e l'altro.
   ============================================================= */

const MODULI = [

  /* ---------------- GEOGRAFIA · PRIMA ---------------- */
  {
    materia: "geografia",
    classe: "prima",
    numero: "I",
    titolo: "Cos'è la geografia: metodo e strumenti",
    descrizione: "Primo quadrimestre, in collegamento con Scienze.",
    lezioni: [
      {
        titolo: "Perché la geografia",
        descrizione: "La Terra vista dalla Luna: astronauti, foto famose e una salita da Roma fino allo spazio.",
        link: "geografia/prima/perche-la-geografia/index.html",
        data: "2026-10-15",
        attivita: [
          { tipo: "Questionario", titolo: "Il tuo rapporto con la geografia", link: "geografia/prima/perche-la-geografia/attivita/il-tuo-rapporto-con-la-geografia.html", data: "2026-10-16" },
          { tipo: "Scheda", titolo: "Che cosa studia la geografia", link: "geografia/prima/perche-la-geografia/attivita/che-cosa-studia-la-geografia.html", data: "2026-10-16" },
          { tipo: "Metodo di studio", titolo: "Come si studia la geografia", link: "geografia/prima/perche-la-geografia/attivita/come-si-studia-la-geografia.html", data: "2026-10-16" },
          { tipo: "Tappa 1", titolo: "Chi ha visto la Terra", link: "geografia/prima/perche-la-geografia/attivita/fase-1-chi-ha-visto-la-terra.html", data: "2026-10-15" },
          { tipo: "Tappa 2", titolo: "Tre modi di disegnare il mondo", link: "geografia/prima/perche-la-geografia/attivita/fase-2-tre-modi-di-disegnare-il-mondo.html", data: "2026-10-15" },
          { tipo: "Tappa 3", titolo: "Carte sovrapposte ed emisferi", link: "geografia/prima/perche-la-geografia/attivita/fase-3-carte-sovrapposte-ed-emisferi.html", data: "2026-10-15" },
          { tipo: "Tappa 4", titolo: "Guardiamo il planisfero", link: "geografia/prima/perche-la-geografia/attivita/fase-4-guardiamo-il-planisfero.html", data: "2026-10-15" },
          { tipo: "Cruciverba", titolo: "Le parole della Terra vista dalla Luna", link: "geografia/prima/perche-la-geografia/attivita/fase-5-cruciverba.html", data: "2026-10-15" },
          { tipo: "Se c'è tempo", titolo: "Carte che cambiano forma", link: "geografia/prima/perche-la-geografia/attivita/fase-6-carte-che-cambiano-forma.html", data: "2026-10-15" },
          { tipo: "Linea del tempo", titolo: "Una piccola storia dei viaggi nello spazio", link: "geografia/prima/perche-la-geografia/attivita/viaggi-nello-spazio.html", data: "2026-10-15" },
          { tipo: "Approfondimento", titolo: "La storia della cartografia", link: "geografia/prima/perche-la-geografia/attivita/storia-della-cartografia.html", data: "2026-10-15" }
        ]
      },
      { titolo: "L'orientamento e i suoi strumenti", attivita: [] },
      { titolo: "Il reticolato geografico", attivita: [] },
      { titolo: "Le carte geografiche", attivita: [] },
      { titolo: "I fusi orari", attivita: [] },
      { titolo: "La riduzione in scala", attivita: [] },
      { titolo: "I dati: raccoglierli, ordinarli, rappresentarli", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "prima",
    numero: "II",
    titolo: "Le basi della geografia fisica",
    descrizione: "L'uomo e l'ambiente; il territorio europeo. Primo quadrimestre, in collegamento con Scienze.",
    lezioni: [
      { titolo: "Il clima", attivita: [] },
      { titolo: "Le risorse idriche", attivita: [] },
      { titolo: "Le risorse terrestri", attivita: [] },
      { titolo: "L'inquinamento", attivita: [] },
      { titolo: "Il territorio europeo: monti, mari, pianure, laghi", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "prima",
    numero: "III",
    titolo: "Le basi della geografia antropica",
    descrizione: "Popolazione, città ed economia d'Europa. Tra primo e secondo quadrimestre, in collegamento con Storia.",
    lezioni: [
      { titolo: "La popolazione europea", attivita: [] },
      { titolo: "L'urbanizzazione del continente europeo", attivita: [] },
      { titolo: "L'economia europea: il settore primario", attivita: [] },
      { titolo: "L'economia europea: il settore secondario", attivita: [] },
      { titolo: "L'economia europea: il settore terziario", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "prima",
    numero: "IV",
    titolo: "Geografia regionale italiana",
    descrizione: "Secondo quadrimestre, in collegamento con Storia.",
    lezioni: [
      { titolo: "Il quadro fisico dell'Italia", attivita: [] },
      { titolo: "Il quadro politico dell'Italia", attivita: [] },
      { titolo: "La popolazione italiana", attivita: [] },
      { titolo: "L'economia italiana", attivita: [] },
      { titolo: "L'Italia nel contesto europeo", attivita: [] },
      { titolo: "Le regioni italiane", attivita: [] }
    ]
  },

  /* ---------------- GEOGRAFIA · SECONDA ---------------- */
  {
    materia: "geografia",
    classe: "seconda",
    numero: "I",
    titolo: "La formazione dell'Europa",
    descrizione: "L'identità europea e le tappe dell'integrazione. Primo e secondo quadrimestre, in collegamento con Storia e Italiano.",
    lezioni: [
      { titolo: "L'Europa antica", descrizione: "L'identità europea", attivita: [] },
      { titolo: "L'Europa medievale", descrizione: "L'identità europea", attivita: [] },
      { titolo: "L'Europa moderna", descrizione: "L'identità europea", attivita: [] },
      { titolo: "L'Europa contemporanea", descrizione: "L'identità europea", attivita: [] },
      { titolo: "Le tappe dell'integrazione europea", attivita: [] },
      { titolo: "Il funzionamento dell'UE", attivita: [] },
      { titolo: "Le politiche comuni e l'euro", attivita: [] },
      { titolo: "I diritti dei cittadini UE", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "seconda",
    numero: "II",
    titolo: "Economia e ambiente dell'Europa",
    descrizione: "I settori dell'economia e la tutela dell'ambiente. Primo quadrimestre, in collegamento con Storia e Italiano.",
    lezioni: [
      { titolo: "Il ruolo dell'Europa nell'economia mondiale", descrizione: "I settori dell'economia", attivita: [] },
      { titolo: "Gli squilibri nell'economia europea", descrizione: "I settori dell'economia", attivita: [] },
      { titolo: "L'Italia nell'economia europea", descrizione: "I settori dell'economia", attivita: [] },
      { titolo: "Gli squilibri nell'economia italiana", descrizione: "I settori dell'economia", attivita: [] },
      { titolo: "Le regioni agrarie europee", attivita: [] },
      { titolo: "L'industria e il terziario in Europa", attivita: [] },
      { titolo: "Il riscaldamento globale in Europa", descrizione: "L'inquinamento e il degrado ambientale", attivita: [] },
      { titolo: "La protezione dell'ambiente in Europa", descrizione: "L'inquinamento e il degrado ambientale", attivita: [] },
      { titolo: "Le città sostenibili", descrizione: "L'inquinamento e il degrado ambientale", attivita: [] },
      { titolo: "Lo smaltimento dei rifiuti", descrizione: "L'inquinamento e il degrado ambientale", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "seconda",
    numero: "III",
    titolo: "La geografia politica dell'Europa e i grandi Stati europei",
    descrizione: "Gli Stati europei e gli altri Stati. Primo e secondo quadrimestre, in collegamento con Storia e Italiano.",
    lezioni: [
      { titolo: "Conflitti e tensioni in Europa", attivita: [] },
      { titolo: "Monarchie e repubbliche, Stati federali e Stati unitari", attivita: [] },
      { titolo: "Il sistema democratico e la Costituzione", attivita: [] },
      { titolo: "Studio di alcuni Stati europei", attivita: [] },
      { titolo: "Cenni su altri Stati europei", attivita: [] }
    ]
  },

  /* ---------------- GEOGRAFIA · TERZA ---------------- */
  {
    materia: "geografia",
    classe: "terza",
    numero: "I",
    titolo: "Il pianeta Terra: gli equilibri a rischio",
    link: "geografia/terza/la-terra/index.html",
    descrizione: "Origini del pianeta, un pianeta irrequieto, idrografia, continenti, clima e biomi. Primo quadrimestre, in collegamento con Scienze.",
    lezioni: [
      {
        titolo: "Il Sistema solare",
        descrizione: "Sole, pianeti, asteroidi, meteoroidi e comete: schede cliccabili e zoom.",
        link: "geografia/terza/la-terra/lezioni/sistema-solare.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il reticolato geografico",
        descrizione: "A tappe: poli, Equatore, paralleli, meridiani, Greenwich, coordinate.",
        link: "geografia/terza/la-terra/lezioni/reticolato.html",
        data: "2026-10-15",
        attivita: [
          {
            tipo: "Scheda",
            titolo: "Scheda 1.2 – Meridiani e paralleli",
            link: "geografia/terza/la-terra/ripasso/scheda-1-2-reticolato.html",
            data: "2026-10-14"
          }
        ]
      },
      {
        titolo: "Le proiezioni",
        descrizione: "Mercatore, Mollweide e carta equidistante a confronto con il globo.",
        link: "geografia/terza/la-terra/lezioni/proiezioni.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il moto di rotazione",
        descrizione: "La Terra gira da ovest a est: modello 3D con la cupola del cielo di Roma.",
        link: "geografia/terza/la-terra/lezioni/rotazione-terra.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il crepuscolo",
        descrizione: "I raggi del Sole deviati dall'atmosfera all'alba e al tramonto.",
        link: "geografia/terza/la-terra/lezioni/crepuscolo.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il moto di rivoluzione",
        descrizione: "Orbita, equinozi e solstizi, circolo di illuminazione e durata del dì.",
        link: "geografia/terza/la-terra/lezioni/rivoluzione.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "I fusi orari",
        descrizione: "Vista dal Polo nord, carta dei fusi, ora civile e ora locale delle città.",
        link: "geografia/terza/la-terra/lezioni/fusi-orari.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "La struttura della Terra",
        descrizione: "Viaggio verso il centro, placche, vulcani e terremoti, formazione della Terra.",
        link: "geografia/terza/la-terra/lezioni/struttura-terra.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "I continenti",
        descrizione: "Dati dei sei continenti, confronti e deriva dalla Pangea a oggi.",
        link: "geografia/terza/la-terra/lezioni/continenti.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Rilievi, oceani, fiumi e laghi",
        descrizione: "Catene montuose e scudi, fondali oceanici, correnti, acqua dolce.",
        link: "geografia/terza/la-terra/lezioni/acque.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "L'atmosfera",
        descrizione: "Composizione, strati e temperatura, venti costanti e brezze.",
        link: "geografia/terza/la-terra/lezioni/atmosfera.html",
        data: "2026-10-15",
        attivita: []
      },
      { titolo: "Il clima e i suoi cambiamenti", attivita: [] },
      { titolo: "Fasce climatiche e biomi", attivita: [] }
    ],
    attivita: [
      {
        tipo: "Ripasso",
        titolo: "Ripasso guidato prima dell'interrogazione",
        descrizione: "Sette attività in ordine: parole, concetti, carta e calcoli.",
        link: "geografia/terza/la-terra/ripasso/Terra_Ripasso_guidato.html",
        data: "2026-10-14"
      }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "II",
    titolo: "Popolazione mondiale: crescita e inurbamento",
    descrizione: "Popolazione, economia mondiale e risorse. Primo quadrimestre, in collegamento con Scienze e Tecnologia.",
    lezioni: [
      { titolo: "La crescita della popolazione mondiale", attivita: [] },
      { titolo: "L'inurbamento", attivita: [] },
      { titolo: "L'economia mondiale", attivita: [] },
      { titolo: "La globalizzazione", attivita: [] },
      { titolo: "Risorse e materie prime", attivita: [] },
      { titolo: "Le energie", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "III",
    titolo: "La geopolitica: verso un nuovo ordine mondiale",
    descrizione: "Primo e secondo quadrimestre, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "La crisi degli Stati nazionali", attivita: [] },
      { titolo: "Il sistema politico mondiale", attivita: [] },
      { titolo: "L'Organizzazione delle Nazioni Unite", attivita: [] },
      { titolo: "I diritti umani", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "IV",
    titolo: "Africa",
    descrizione: "Profilo fisico, politico e antropico. Secondo quadrimestre, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "L'Africa: profilo fisico", attivita: [] },
      { titolo: "L'Africa: profilo politico", attivita: [] },
      { titolo: "L'Africa: profilo antropico", attivita: [] },
      { titolo: "L'Africa mediterranea", attivita: [] },
      { titolo: "L'Africa subsahariana", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "V",
    titolo: "Asia",
    descrizione: "Profilo fisico, politico e antropico. Secondo quadrimestre, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "L'Asia: profilo fisico", attivita: [] },
      { titolo: "L'Asia: profilo politico", attivita: [] },
      { titolo: "L'Asia: profilo antropico", attivita: [] },
      { titolo: "L'Asia occidentale", attivita: [] },
      { titolo: "L'Asia centrale", attivita: [] },
      { titolo: "L'Asia sud-orientale", attivita: [] },
      { titolo: "L'Asia orientale", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "VI",
    titolo: "America anglosassone e America Latina",
    descrizione: "Profilo fisico, politico e antropico. Secondo quadrimestre, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "L'America: profilo fisico", attivita: [] },
      { titolo: "L'America: profilo politico", attivita: [] },
      { titolo: "L'America: profilo antropico", attivita: [] },
      { titolo: "L'America settentrionale", attivita: [] },
      { titolo: "L'America centrale", attivita: [] },
      { titolo: "L'America meridionale", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "VII",
    titolo: "Oceania",
    descrizione: "Profilo fisico, politico e antropico. Secondo quadrimestre, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "L'Oceania: profilo fisico", attivita: [] },
      { titolo: "L'Oceania: profilo politico", attivita: [] },
      { titolo: "L'Oceania: profilo antropico", attivita: [] }
    ]
  },

  /* ---------------- ITALIANO · PRIMA ---------------- */
  {
    materia: "italiano",
    classe: "prima",
    numero: "I",
    titolo: "Educazione linguistica",
    descrizione: "Fonologia, ortografia e punteggiatura, le parti del discorso. Primo e secondo quadrimestre, in collegamento con Inglese, Francese, Spagnolo e Tedesco.",
    lezioni: [
      { titolo: "Suoni e lettere: fonologia e alfabeto", attivita: [] },
      { titolo: "Ortografia e punteggiatura", attivita: [] },
      { titolo: "Le parti variabili: articolo, nome e verbo", attivita: [] },
      { titolo: "Le parti variabili: aggettivo, pronome e verbo", attivita: [] },
      { titolo: "Le parti invariabili: preposizione, congiunzione, avverbio, interiezione", attivita: [] }
    ]
  },
  {
    materia: "italiano",
    classe: "prima",
    numero: "II",
    titolo: "Generi letterari",
    descrizione: "La narrazione in prosa e in versi: il genere epico. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica e Geografia.",
    lezioni: [
      { titolo: "La narrazione in prosa", attivita: [] },
      { titolo: "L'epica: l'Iliade", attivita: [] },
      { titolo: "L'epica: l'Odissea", attivita: [] },
      { titolo: "L'epica: l'Eneide", attivita: [] },
      { titolo: "L'epica medievale e cavalleresca", attivita: [] }
    ]
  },
  {
    materia: "italiano",
    classe: "prima",
    numero: "III",
    titolo: "Laboratorio di scrittura",
    descrizione: "Produzione di varie tipologie testuali. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica e Geografia.",
    lezioni: [
      { titolo: "Il riassunto", attivita: [] },
      { titolo: "Il testo descrittivo", attivita: [] },
      { titolo: "Il testo narrativo", attivita: [] },
      { titolo: "Il testo argomentativo", attivita: [] },
      { titolo: "L'analisi del testo narrativo", attivita: [] }
    ]
  }
,

  /* ---------------- ITALIANO · SECONDA ---------------- */
  {
    materia: "italiano",
    classe: "seconda",
    numero: "I",
    titolo: "Educazione linguistica",
    descrizione: "Analisi morfologica e analisi logica della frase semplice. Primo e secondo quadrimestre, in collegamento con Inglese, Francese, Spagnolo e Tedesco.",
    lezioni: [
      { titolo: "Le preposizioni", attivita: [] },
      { titolo: "La frase semplice: soggetto e predicato verbale e nominale", attivita: [] },
      { titolo: "L'attributo e l'apposizione", attivita: [] },
      { titolo: "Il complemento oggetto e i complementi predicativi", attivita: [] },
      { titolo: "Gli altri complementi", attivita: [] }
    ]
  },
  {
    materia: "italiano",
    classe: "seconda",
    numero: "II",
    titolo: "Generi letterari",
    descrizione: "La narrazione in prosa e in versi, da Boccaccio ad Ariosto. Primo e secondo quadrimestre, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "La narrazione in prosa: Boccaccio", attivita: [] },
      { titolo: "La narrazione in versi: Dante", attivita: [] },
      { titolo: "La narrazione in versi: Petrarca", attivita: [] },
      { titolo: "La narrazione in versi: Ariosto", attivita: [] },
      { titolo: "Altri generi letterari (a scelta del docente)", attivita: [] }
    ]
  },
  {
    materia: "italiano",
    classe: "seconda",
    numero: "III",
    titolo: "Laboratorio di scrittura",
    descrizione: "Produzione di varie tipologie testuali e analisi del testo. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica e Geografia.",
    lezioni: [
      { titolo: "Il riassunto", attivita: [] },
      { titolo: "Il testo descrittivo", attivita: [] },
      { titolo: "Il testo narrativo", attivita: [] },
      { titolo: "Il testo espressivo", attivita: [] },
      { titolo: "Il testo regolativo", attivita: [] },
      { titolo: "Il testo poetico", attivita: [] },
      { titolo: "L'analisi del testo narrativo", attivita: [] }
    ]
  },
  {
    materia: "italiano",
    classe: "seconda",
    numero: "IV",
    titolo: "Latino per l'educazione linguistica (LEL)",
    descrizione: "Opzionale ma curricolare (Nuove Indicazioni Nazionali): il docente decide se inserirlo nella propria programmazione. Primo e secondo quadrimestre.",
    lezioni: [
      { titolo: "Dalle parole alle radici: il lessico quotidiano e l'origine latina", attivita: [] },
      { titolo: "Leggere il latino: alfabeto, pronuncia, accento, quantità", attivita: [] },
      { titolo: "Scrivere in latino: flessione, tema e desinenza, numero e genere, coniugazione e paradigma", attivita: [] },
      { titolo: "La prima declinazione e il verbo sum", attivita: [] },
      { titolo: "La seconda declinazione e l'indicativo presente", attivita: [] },
      { titolo: "Gli aggettivi possessivi", attivita: [] }
    ]
  }
,

  /* ---------------- ITALIANO · TERZA ---------------- */
  {
    materia: "italiano",
    classe: "terza",
    numero: "I",
    titolo: "Educazione linguistica",
    descrizione: "Lessico, linguaggio figurato e analisi del periodo. Primo e secondo quadrimestre, in collegamento con Inglese, Francese, Spagnolo e Tedesco.",
    lezioni: [
      { titolo: "Ripasso: analisi grammaticale e logica", attivita: [] },
      { titolo: "L'uso corretto del lessico", attivita: [] },
      { titolo: "Il linguaggio figurato", attivita: [] },
      { titolo: "I connettivi testuali e le congiunzioni", attivita: [] },
      { titolo: "La frase complessa e la proposizione principale", attivita: [] },
      { titolo: "La coordinazione e le proposizioni coordinate", attivita: [] },
      { titolo: "La subordinazione e le proposizioni subordinate", attivita: [] },
      { titolo: "I gradi di subordinazione", attivita: [] },
      { titolo: "La riflessione metalinguistica", attivita: [] }
    ]
  },
  {
    materia: "italiano",
    classe: "terza",
    numero: "II",
    titolo: "Generi letterari",
    descrizione: "Dall'Ottocento ai giorni nostri. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica, Arte e Immagine, Musica, Geografia, Religione e Tecnologia.",
    lezioni: [
      { titolo: "La poesia lirica: Leopardi", attivita: [] },
      { titolo: "La poesia patriottica", attivita: [] },
      { titolo: "Il racconto autobiografico", attivita: [] },
      { titolo: "Il romanzo storico: Manzoni", attivita: [] },
      { titolo: "Il romanzo di formazione", attivita: [] },
      { titolo: "Il romanzo psicologico-sociale", attivita: [] },
      { titolo: "Il romanzo di fantascienza", attivita: [] },
      { titolo: "Il teatro", attivita: [] },
      { titolo: "La letteratura contemporanea", attivita: [] }
    ]
  },
  {
    materia: "italiano",
    classe: "terza",
    numero: "III",
    titolo: "Laboratorio di scrittura",
    descrizione: "Produzione di varie tipologie testuali, parafrasi e analisi del testo. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica, Geografia, Arte e Immagine e Tecnologia.",
    lezioni: [
      { titolo: "La sintesi", attivita: [] },
      { titolo: "Il testo narrativo", attivita: [] },
      { titolo: "Il testo argomentativo", attivita: [] },
      { titolo: "Il testo informativo-espositivo", attivita: [] },
      { titolo: "Il testo poetico", attivita: [] },
      { titolo: "La parafrasi", attivita: [] },
      { titolo: "L'analisi del testo", attivita: [] }
    ]
  },
  {
    materia: "italiano",
    classe: "terza",
    numero: "IV",
    titolo: "Latino per l'educazione linguistica (LEL)",
    descrizione: "Opzionale ma curricolare (Nuove Indicazioni Nazionali): il docente decide se inserirlo nella propria programmazione. Primo e secondo quadrimestre.",
    lezioni: [
      { titolo: "La terza declinazione", attivita: [] },
      { titolo: "Gli aggettivi della seconda classe", attivita: [] },
      { titolo: "L'indicativo imperfetto e il futuro semplice", attivita: [] },
      { titolo: "L'imperativo presente e futuro", attivita: [] },
      { titolo: "Il perfetto", attivita: [] },
      { titolo: "La quarta e la quinta declinazione", attivita: [] },
      { titolo: "I pronomi personali", attivita: [] },
      { titolo: "I numeri romani", attivita: [] }
    ]
  },

  /* ---------------- STORIA · PRIMA ---------------- */
  {
    materia: "storia",
    classe: "prima",
    numero: "I",
    titolo: "L'Italia dai Bizantini ai Longobardi",
    descrizione: "Primo quadrimestre, in collegamento con Geografia.",
    lezioni: [
      { titolo: "Un nuovo scenario europeo", attivita: [] },
      { titolo: "I Longobardi", attivita: [] },
      { titolo: "L'inizio del potere temporale della Chiesa", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "II",
    titolo: "Carlo Magno e la nascita dell'Europa",
    descrizione: "Primo quadrimestre, in collegamento con Geografia e Religione.",
    lezioni: [
      { titolo: "L'espansione dei Franchi", attivita: [] },
      { titolo: "Carlo Magno e il Sacro Romano Impero", attivita: [] },
      { titolo: "L'organizzazione dell'Impero", attivita: [] },
      { titolo: "La rinascita dell'economia e della cultura", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "III",
    titolo: "Nuove invasioni e nuovi regni: l'Europa dopo l'impero carolingio",
    descrizione: "Primo quadrimestre, in collegamento con Geografia e Italiano (epica cavalleresca).",
    lezioni: [
      { titolo: "La divisione dell'impero dopo Carlo Magno", attivita: [] },
      { titolo: "Le nuove invasioni", attivita: [] },
      { titolo: "L'epoca d'oro dell'impero romano d'Oriente", attivita: [] },
      { titolo: "Signori e castelli: l'economia curtense", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "IV",
    titolo: "La rinascita dell'anno Mille. Papi e imperatori",
    descrizione: "Primo quadrimestre, in collegamento con Geografia, Scienze e Tecnologia.",
    lezioni: [
      { titolo: "Il rinnovamento dell'agricoltura e la crescita demografica", attivita: [] },
      { titolo: "Lo sviluppo delle città e del commercio", attivita: [] },
      { titolo: "Nascono le università", attivita: [] },
      { titolo: "La crisi della Chiesa di Roma e i tentativi di riforma", attivita: [] },
      { titolo: "La lotta per le investiture", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "V",
    titolo: "Le crociate e la lotta alle eresie",
    descrizione: "Primo quadrimestre, in collegamento con Geografia e Scienze.",
    lezioni: [
      { titolo: "La crisi dell'impero arabo e la minaccia dei Turchi", attivita: [] },
      { titolo: "Lo scisma d'Oriente", attivita: [] },
      { titolo: "Le crociate per la Terra Santa", attivita: [] },
      { titolo: "Innocenzo III e la lotta alle eresie", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "VI",
    titolo: "Dai Comuni a Federico II",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Tecnologia e Arte.",
    lezioni: [
      { titolo: "La nascita dei Comuni", attivita: [] },
      { titolo: "Le lotte tra Comuni e imperatore", attivita: [] },
      { titolo: "L'ascesa della borghesia", attivita: [] },
      { titolo: "Il progetto imperiale di Federico II", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "VII",
    titolo: "Le monarchie nazionali in Europa. La crisi del Trecento",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Scienze, Inglese e Francese.",
    lezioni: [
      { titolo: "La nascita delle monarchie nazionali: l'Inghilterra", attivita: [] },
      { titolo: "La monarchia nazionale francese", attivita: [] },
      { titolo: "La guerra dei Cent'anni", attivita: [] },
      { titolo: "La peste e la crisi agricola", attivita: [] },
      { titolo: "Enrico VII e il declino della Chiesa", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "VIII",
    titolo: "L'Italia delle Signorie. Umanesimo e Rinascimento",
    descrizione: "Secondo quadrimestre, in collegamento con Letteratura, Arte e Scienze.",
    lezioni: [
      { titolo: "Dai Comuni agli Stati regionali", attivita: [] },
      { titolo: "L'Umanesimo: l'uomo al centro del mondo", attivita: [] },
      { titolo: "Il Rinascimento: principi e artisti, letterati e scienziati", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "IX",
    titolo: "Le esplorazioni e la scoperta dell'America. Riforma e Controriforma",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Religione, Arte, Tecnologia e Scienze.",
    lezioni: [
      { titolo: "Le rotte per le Indie", attivita: [] },
      { titolo: "La scoperta del nuovo mondo", attivita: [] },
      { titolo: "Le civiltà precolombiane e le esplorazioni", attivita: [] },
      { titolo: "La corruzione della Chiesa e la Riforma di Lutero", attivita: [] },
      { titolo: "La Controriforma e il Concilio di Trento", attivita: [] },
      { titolo: "I nuovi ordini religiosi", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "X",
    titolo: "Guerre in Italia e in Europa. La rivoluzione scientifica",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Scienze, Letteratura, Spagnolo, Francese e Inglese.",
    lezioni: [
      { titolo: "L'Italia contesa tra Francia e Spagna", attivita: [] },
      { titolo: "Carlo V e Francesco I", attivita: [] },
      { titolo: "Filippo II e l'età elisabettiana", attivita: [] },
      { titolo: "Le guerre di religione in Francia", attivita: [] },
      { titolo: "La guerra dei Trent'anni", attivita: [] },
      { titolo: "La rivoluzione scientifica e i suoi protagonisti", attivita: [] }
    ]
  },

  /* ---------------- STORIA · SECONDA ---------------- */
  {
    materia: "storia",
    classe: "seconda",
    numero: "I",
    titolo: "Flussi migratori",
    descrizione: "Primo quadrimestre, in collegamento con Geografia, Italiano ed Educazione civica.",
    lezioni: [
      { titolo: "La scoperta dei nuovi mondi", attivita: [] },
      { titolo: "L'età dei conquistadores", attivita: [] },
      { titolo: "Le civiltà precolombiane", attivita: [] },
      { titolo: "La tratta degli schiavi", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "seconda",
    numero: "II",
    titolo: "Sistemi di produzione, organizzazione sociale e vita quotidiana",
    descrizione: "Primo e secondo quadrimestre.",
    lezioni: [
      { titolo: "La rivoluzione agricola: nuove risorse, ripresa dei commerci, la società comunale", attivita: [] },
      { titolo: "La civiltà rinascimentale", attivita: [] },
      { titolo: "Gli imperi coloniali", attivita: [] },
      { titolo: "Il sistema mondiale nei secoli XVII e XVIII", attivita: [] },
      { titolo: "La rivoluzione industriale: nuove risorse e sistemi di produzione", attivita: [] },
      { titolo: "Città, proletariato e capitalismo", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "seconda",
    numero: "III",
    titolo: "Lo Stato e le forme di governo",
    descrizione: "Primo e secondo quadrimestre, in collegamento con Italiano ed Educazione civica.",
    lezioni: [
      { titolo: "I Comuni", attivita: [] },
      { titolo: "Le monarchie nazionali", attivita: [] },
      { titolo: "Le Signorie e gli altri Stati regionali", attivita: [] },
      { titolo: "Riforma e Controriforma", attivita: [] },
      { titolo: "L'Assolutismo", attivita: [] },
      { titolo: "La monarchia parlamentare inglese", attivita: [] },
      { titolo: "L'Illuminismo", attivita: [] },
      { titolo: "La Rivoluzione americana", attivita: [] },
      { titolo: "La Rivoluzione francese", attivita: [] },
      { titolo: "L'impero napoleonico", attivita: [] },
      { titolo: "Il Risorgimento", attivita: [] }
    ]
  },

  /* ---------------- STORIA · TERZA ---------------- */
  {
    materia: "storia",
    classe: "terza",
    numero: "I",
    titolo: "L'Europa e il mondo tra Ottocento e Novecento",
    descrizione: "Primo quadrimestre, in collegamento con Geografia e Tecnologia.",
    lezioni: [
      { titolo: "La Belle Époque", attivita: [] },
      { titolo: "I miracoli del progresso e delle scienze", attivita: [] },
      { titolo: "La società di massa", attivita: [] },
      { titolo: "Gli imperi coloniali", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "terza",
    numero: "II",
    titolo: "Guerra, rivoluzioni, totalitarismi",
    descrizione: "Primo quadrimestre, in collegamento con Geografia e Religione.",
    lezioni: [
      { titolo: "La prima guerra mondiale", attivita: [] },
      { titolo: "La Rivoluzione russa e lo stalinismo", attivita: [] },
      { titolo: "Il primo dopoguerra", attivita: [] },
      { titolo: "Il fascismo in Italia", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "terza",
    numero: "III",
    titolo: "Dal nazismo alla guerra fredda",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Italiano e Religione.",
    lezioni: [
      { titolo: "Il nazismo", attivita: [] },
      { titolo: "La seconda guerra mondiale", attivita: [] },
      { titolo: "L'Europa divisa", attivita: [] },
      { titolo: "Il crollo degli imperi coloniali", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "terza",
    numero: "IV",
    titolo: "Capire il mondo attuale",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Scienze e Tecnologia.",
    lezioni: [
      { titolo: "La nascita della Repubblica italiana", attivita: [] },
      { titolo: "I problemi del Medio Oriente", attivita: [] },
      { titolo: "Cambia la carta geografica dell'Europa", attivita: [] },
      { titolo: "Il mondo contemporaneo", attivita: [] }
    ]
  }

];


/* =============================================================
   UDA INTERDISCIPLINARI
   Compaiono nella home e nella pagina di ogni materia coinvolta.
   Istruzioni complete nel file uda/ISTRUZIONI.md. Esempio:
   {
     titolo: "Titolo dell'UDA",
     descrizione: "Breve descrizione del compito di realtà.",
     classe: "terza",
     periodo: "Novembre–dicembre",
     materie: ["geografia", "storia", "educazione-civica"],
     link: "uda/titolo-uda.html"
   }
   ============================================================= */

const UDA = [

];
