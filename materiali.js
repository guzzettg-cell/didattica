/* =============================================================
   CATALOGO DEI MATERIALI
   Ogni materia è divisa in MODULI (argomenti generali),
   ogni modulo in LEZIONI, ogni lezione contiene le ATTIVITÀ.

   MODULO
     materia:      geografia | storia | italiano | educazione-civica
     classe:       prima | seconda | terza
     numero:       "I", "II", "III"... (o "1", "2"...)
     titolo:       l'argomento generale
     descrizione:  facoltativa
     lezioni:      elenco delle lezioni, tra [ ]
     attivita:     facoltativo: attività che riguardano tutto il modulo
                   (ripassi, verifiche finali), tra [ ]

   LEZIONE
     titolo, descrizione (facoltativa)
     link:         facoltativo: la pagina della lezione, se esiste
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
    descrizione: "Il pianeta, il reticolato geografico, i moti, le sfere della Terra.",
    lezioni: [
      {
        titolo: "Meridiani e paralleli",
        descrizione: "Il reticolato geografico e le coordinate.",
        attivita: [
          {
            tipo: "Scheda",
            titolo: "Scheda 1.2 – Il reticolato geografico",
            link: "geografia/terza/la-terra/ripasso/scheda-1-2-reticolato.html",
            data: "2026-10-14"
          }
        ]
      }
    ],
    attivita: [
      {
        tipo: "Ripasso",
        titolo: "Ripasso guidato prima dell'interrogazione",
        descrizione: "Sette attività in ordine: parole, concetti, carta e calcoli. Vivi la Geografia 3, pp. 4–9, 14, 16–17.",
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
