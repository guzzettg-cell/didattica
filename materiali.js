/* =============================================================
   CATALOGO DEI MATERIALI
   Per aggiungere un materiale:
   1. carica il file .html nella cartella giusta (es. geografia/terza/)
   2. copia un blocco { ... } qui sotto, incollalo e cambia i dati
   3. ricorda la virgola tra un blocco e l'altro

   materia:  geografia | storia | italiano | educazione-civica
   classe:   prima | seconda | terza
   tipo:     Lezione | Attività | Ripasso | Esercizi | Presentazione | Verifica
   unita:    il modulo o l'unità (serve a raggruppare i materiali)
   link:     percorso del file, partendo dalla cartella principale
   data:     anno-mese-giorno (serve a mostrare i più recenti in home)
   ============================================================= */

const MATERIALI = [
  {
    materia: "geografia",
    classe: "terza",
    unita: "Modulo I · La Terra",
    tipo: "Ripasso",
    titolo: "Ripasso guidato prima dell'interrogazione",
    descrizione: "Sette attività in ordine: parole, concetti, carta e calcoli. Vivi la Geografia 3, pp. 4–9, 14, 16–17.",
    link: "geografia/terza/ripasso-modulo-1.html",
    data: "2026-10-14"
  }
];


/* =============================================================
   UDA INTERDISCIPLINARI
   Compaiono nella home e nella pagina di ogni materia coinvolta.
   Carica il file nella cartella uda/ e aggiungi un blocco qui sotto.

   materie:  elenco tra parentesi quadre, es. ["geografia", "storia"]
   classe:   prima | seconda | terza
   periodo:  facoltativo, es. "Novembre–dicembre"

   Esempio (togli // all'inizio di ogni riga per usarlo):
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
