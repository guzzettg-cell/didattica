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

  /* ---------------- GEOGRAFIA · TERZA ---------------- */
  {
    materia: "geografia",
    classe: "terza",
    numero: "I",
    titolo: "La Terra",
    link: "geografia/terza/la-terra/index.html",
    descrizione: "Il pianeta Terra: lezioni interattive e simulazioni.",
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
      }
    ],
    attivita: [
      {
        tipo: "Ripasso",
        titolo: "Ripasso guidato prima dell'interrogazione",
        descrizione: "Sette attività in ordine: parole, concetti, carta e calcoli.",
        link: "geografia/terza/la-terra/ripasso/ripasso-modulo-1.html",
        data: "2026-10-14"
      }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "II",
    titolo: "Il clima",
    lezioni: []
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "III",
    titolo: "La popolazione",
    lezioni: []
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "IV",
    titolo: "L'economia",
    lezioni: []
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "V",
    titolo: "Gli Stati del mondo",
    lezioni: []
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
