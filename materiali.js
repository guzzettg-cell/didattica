/* =============================================================
   CATALOGO DEI MATERIALI
   Ogni materia è divisa in MODULI (argomenti generali),
   ogni modulo in LEZIONI, ogni lezione contiene le ATTIVITÀ.

   MODULO
     materia:      geografia | storia | italiano | educazione-civica
     classe:       prima | seconda | terza
     numero:       "I", "II", "III"... (o "1", "2"...)
     percorso:     per geografia: come | cosa | roma
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
     dipartimento: facoltativo: true se l'argomento è nella programmazione di dipartimento
                   della stessa classe; "prima" (o "seconda"...) se è nella programmazione
                   di un'altra classe; compare il segno «◆ Programma di dipartimento»
     libri:        facoltativo: da quale libro parte la lezione, una o più
                   etichette tra quelle di LIBRI qui sotto, es. libri: ["vivi", "geoagenda"],
     attivita:     elenco delle attività, tra [ ]

   ATTIVITÀ
     tipo:         Scheda | Esercizi | Ripasso | Presentazione | Video | Verifica | Lettura ...
     titolo, descrizione (facoltativa)
     link:         percorso del file, partendo dalla cartella principale
     data:         anno-mese-giorno: serve per "Aggiunti di recente" in home

   Ricorda le virgole: dopo ogni riga, tra un blocco { } e l'altro.
   ============================================================= */

/* LIBRI: le etichette che indicano da quale libro parte una lezione.
   Per aggiungere un libro, copia una riga e cambia sigla, nome e colore.
   Nella pagina della materia compaiono i pulsanti per vedere solo le lezioni di un libro.
   Libro di riferimento: Paesaggi vicini e lontani (prima e seconda solo Paesaggi;
   in terza si parte da Paesaggi e si indicano anche GeoAgenda e Vivi la Geografia,
   adottati nelle classi terze attuali). */
var LIBRI = {
  "paesaggi":  { nome: "Paesaggi vicini e lontani", colore: "#2e7d4f" },
  "geoagenda": { nome: "GeoAgenda",                 colore: "#7a3fa0" },
  "vivi":      { nome: "Vivi la Geografia",         colore: "#1d6fa5" }
};

var MODULI = [

  /* ---------------- GEOGRAFIA · PRIMA ---------------- */
  /* Organizzata secondo Paesaggi vicini e lontani 1 (pagine A e B).
     Le lezioni senza etichetta e con «Lezione extra» non sono nel libro. */
  {
    materia: "geografia",
    classe: "prima",
    numero: "I",
    percorso: "come",
    titolo: "Gli strumenti della geografia",
    descrizione: "Orientarsi, leggere le carte, usare dati e grafici. Primo quadrimestre, in collegamento con Scienze. Si comincia dalla pagina del modulo: le mappe del video, che portano a tutte le lezioni.",
    link: "geografia/prima/strumenti/index.html",
    lezioni: [
      {
        titolo: "Vicino, lontano",
        libri: ["paesaggi"],
        pagine: "A1",
        descrizione: "Che cosa vuol dire «scala»: il volo dalla nostra scuola, in via Col di Lana, fino alla Terra intera. Scala locale, regionale, nazionale, planetaria.",
        link: "geografia/prima/strumenti/vicino-lontano.html",
        data: "2026-11-06",
        attivita: []
      },
      {
        titolo: "Perché la geografia",
        standby: true,
        libri: ["paesaggi"],
        pagine: "XI, A2–A3",
        descrizione: "La Terra vista da fuori: le foto più famose, astronauti, cosmonauti e taikonauti, e che cosa studieremo in geografia.",
        link: "geografia/prima/perche-la-geografia/index.html",
        data: "2026-10-15",
        attivita: [
          { tipo: "Questionario", titolo: "Il tuo rapporto con la geografia", link: "geografia/prima/perche-la-geografia/attivita/il-tuo-rapporto-con-la-geografia.html", data: "2026-10-16" },
          { tipo: "Scheda", titolo: "Che cosa studia la geografia", link: "geografia/prima/perche-la-geografia/attivita/che-cosa-studia-la-geografia.html", data: "2026-10-16" },
          { tipo: "Metodo di studio", titolo: "Come si studia la geografia", link: "geografia/prima/perche-la-geografia/attivita/come-si-studia-la-geografia.html", data: "2026-10-16" },
          { tipo: "Lezione", titolo: "Il cielo sopra di noi", descrizione: "Le foto della Terra dal 1960 a oggi, le voci degli astronauti, la salita da Roma. Fasi 1–5 in geografia; giornali, parole e mito in italiano.", link: "italiano/prima/mito-ed-epica/il-cielo-sopra-di-noi.html", data: "2026-10-21" }
        ]
      },
      {
        titolo: "L'orientamento e i suoi strumenti",
        dipartimento: true,
        libri: ["paesaggi"],
        pagine: "A4–A5",
        link: "geografia/prima/orientamento/index.html",
        descrizione: "Punti di riferimento personali e universali, il Sole e i punti cardinali, la Stella polare e la Croce del Sud, la rotazione della Terra.",
        data: "2026-10-23",
        attivita: [
          { tipo: "Attività 1", titolo: "Il paese delle indicazioni", descrizione: "Missioni su una piantina: punti di riferimento personali, punti cardinali e percorsi inventati dai gruppi.", link: "geografia/prima/orientamento/attivita/il-paese-delle-indicazioni.html", data: "2026-10-23" },
          { tipo: "Attività 2", titolo: "Il cammino del Sole", descrizione: "Dove si trova il Sole durante il giorno e il confronto tra città.", link: "geografia/prima/orientamento/attivita/il-cammino-del-sole.html", data: "2026-10-23" },
          { tipo: "Attività 3", titolo: "Orientarsi con le stelle", descrizione: "Trovare la Stella polare con il Grande Carro e il Sud con la Croce del Sud.", link: "geografia/prima/orientamento/attivita/orientarsi-con-le-stelle.html", data: "2026-10-23" },
          { tipo: "Attività 4", titolo: "La Terra che gira", descrizione: "La rotazione terrestre vista dallo spazio e il moto apparente del Sole visto da Roma.", link: "geografia/prima/orientamento/attivita/la-terra-che-gira.html", data: "2026-10-23" }
        ]
      },
      {
        titolo: "Il reticolato geografico",
        dipartimento: true,
        libri: ["paesaggi"],
        pagine: "A6–A7",
        descrizione: "A tappe: poli, Equatore, paralleli, meridiani, Greenwich, coordinate.",
        link: "geografia/prima/metodo-e-strumenti/lezioni/reticolato.html",
        data: "2026-10-21",
        attivita: [
          { tipo: "Scheda", titolo: "Scheda 1.2 – Meridiani e paralleli", link: "geografia/prima/metodo-e-strumenti/attivita/scheda-1-2-reticolato.html", data: "2026-10-21" },
          { tipo: "Attività", titolo: "Guardiamo il planisfero", descrizione: "Emisferi, terre e acque, coordinate sul mappamondo.", link: "geografia/prima/carte-geografiche/attivita/guardiamo-il-planisfero.html", data: "2026-10-21" }
        ]
      },
      {
        titolo: "Le carte geografiche",
        dipartimento: true,
        libri: ["paesaggi"],
        pagine: "A8–A9",
        descrizione: "Ridotte, approssimate e simboliche: leggere una carta con la legenda.",
        data: "2026-10-23",
        attivita: [
          { tipo: "Attività 1", titolo: "Tre modi di disegnare il mondo", link: "geografia/prima/carte-geografiche/attivita/tre-modi-di-disegnare-il-mondo.html", data: "2026-10-21" },
          { tipo: "Attività 2", titolo: "Leggere una carta", descrizione: "La legenda, i simboli e le tre proprietà di una carta, su una regione inventata.", link: "geografia/prima/carte-geografiche/attivita/leggere-una-carta.html", data: "2026-10-23" },
          { tipo: "Approfondimento", titolo: "La storia della cartografia", link: "geografia/prima/carte-geografiche/attivita/storia-della-cartografia.html", data: "2026-10-21" }
        ]
      },
      {
        titolo: "La riduzione in scala",
        dipartimento: true,
        libri: ["paesaggi"],
        pagine: "A10–A11",
        descrizione: "Scala numerica e grafica, calcolo delle distanze, grande e piccola scala.",
        link: "geografia/prima/metodo-e-strumenti/lezioni/la-riduzione-in-scala.html",
        data: "2026-10-23",
        attivita: []
      },
      {
        titolo: "Tanti tipi di carte",
        dipartimento: true,
        libri: ["paesaggi"],
        pagine: "A12–A13",
        descrizione: "Carte fisiche, politiche e tematiche; curve di livello e tinte altimetriche.",
        data: "2026-10-23",
        attivita: [
          { tipo: "Attività 1", titolo: "Fisica, politica o tematica?", descrizione: "La stessa regione disegnata in cinque modi, la carta misteriosa e lo smistamento.", link: "geografia/prima/carte-geografiche/attivita/fisica-politica-o-tematica.html", data: "2026-10-23" },
          { tipo: "Attività 2", titolo: "Le curve di livello", descrizione: "Una montagna tagliata a fette, il profilo e la carta da colorare con le tinte altimetriche.", link: "geografia/prima/carte-geografiche/attivita/le-curve-di-livello.html", data: "2026-10-23" }
        ]
      },
      { titolo: "Tanti tipi di fotografie", libri: ["paesaggi"], pagine: "A16–A17", attivita: [
        { tipo: "Gioco", titolo: "Dove siamo? La Terra vista dallo spazio", descrizione: "Osserva le immagini satellitari, cerca gli indizi e prova a riconoscere il luogo.", link: "geografia/prima/paesaggio/attivita/dove-siamo.html", data: "2026-11-06" }
      ] },
      {
        titolo: "I dati: raccoglierli, ordinarli, rappresentarli",
        dipartimento: true,
        libri: ["paesaggi"],
        pagine: "A18–A21",
        descrizione: "I dati e i grafici.",
        attivita: [
          { tipo: "Laboratorio", titolo: "Dalle risposte ai grafici", descrizione: "Il tempo libero e gli spazi del quartiere: tabelle modificabili, cinque tipi di grafico ed esportazione dei risultati.", link: "geografia/prima/strumenti/attivita/dalle-risposte-ai-grafici.html", data: "2026-11-07" }
        ]
      },
      { titolo: "Il GIS: che cos'è un Sistema Informativo Geografico?", libri: ["paesaggi"], pagine: "A141", descrizione: "Esplorare, mappare, condividere.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "prima",
    numero: "II",
    percorso: "come",
    titolo: "Il paesaggio: clima, rilievi e acque",
    descrizione: "Che cos'è il paesaggio, i fenomeni che lo modificano, il clima, i rilievi e le acque. Percorso progressivo in sei lezioni: otto «lenti» per leggere un paesaggio. Primo quadrimestre, in collegamento con Scienze.",
    link: "geografia/prima/paesaggio/index.html",
    lezioni: [
      { titolo: "Il paesaggio e la sua evoluzione", libri: ["paesaggi"], pagine: "A33–A37", descrizione: "Lezione 1 del percorso a lenti: elementi naturali e antropici, le quattro sfere, l'ecosistema, i fattori che cambiano il paesaggio, l'impronta ecologica.", link: "geografia/prima/paesaggio/attivita/paesaggio.html", data: "2026-11-04", attivita: [
        { tipo: "Attività", titolo: "Naturale o antropico? Come cambia il paesaggio", descrizione: "Due ore: lenti «Naturale o antropico» e «Come cambia il paesaggio».", link: "geografia/prima/paesaggio/attivita/paesaggio.html", data: "2026-11-04" },
        { tipo: "Scheda", titolo: "Scheda: il paesaggio e la sua evoluzione", descrizione: "Da stampare: la mappa da completare.", link: "geografia/prima/paesaggio/schede/scheda-paesaggio.html", data: "2026-11-04" }
      ] },
      { titolo: "Le forze che modificano il paesaggio", libri: ["paesaggi"], pagine: "A38–A41", descrizione: "Fenomeni che hanno origine all'interno e all'esterno della Terra.", link: "geografia/prima/paesaggio/attivita/forze.html", data: "2026-11-04", attivita: [
        { tipo: "Attività", titolo: "Le forze da dentro e da fuori", descrizione: "Due ore: vulcani, terremoti, orogenesi; erosione, trasporto, deposito.", link: "geografia/prima/paesaggio/attivita/forze.html", data: "2026-11-04" },
        { tipo: "Scheda", titolo: "Scheda: le forze della Terra", descrizione: "Da stampare: la mappa da completare.", link: "geografia/prima/paesaggio/schede/scheda-forze.html", data: "2026-11-04" }
      ] },
      { titolo: "Il clima", dipartimento: true, libri: ["paesaggi"], pagine: "A44–A47", descrizione: "Il clima e gli ambienti naturali.", link: "geografia/prima/paesaggio/attivita/clima-e-ambienti.html", data: "2026-11-04", attivita: [
        { tipo: "Attività", titolo: "Il clima e gli ambienti naturali", descrizione: "Due ore: elementi e fattori del clima, escursione termica; habitat, biodiversità, vegetazione e altitudine.", link: "geografia/prima/paesaggio/attivita/clima-e-ambienti.html", data: "2026-11-04" },
        { tipo: "Scheda", titolo: "Scheda: clima e ambienti", descrizione: "Da stampare: la mappa da completare.", link: "geografia/prima/paesaggio/schede/scheda-clima-e-ambienti.html", data: "2026-11-04" }
      ] },
      { titolo: "L'inquinamento", dipartimento: true, libri: ["paesaggi"], pagine: "A48–A49", descrizione: "I problemi dell'ambiente.", link: "geografia/prima/paesaggio/attivita/problemi-ambiente.html", data: "2026-11-04", attivita: [
        { tipo: "Attività", titolo: "I problemi dell'ambiente", descrizione: "Un'ora: inquinamento, riscaldamento globale, cementificazione, disboscamento; sviluppo sostenibile.", link: "geografia/prima/paesaggio/attivita/problemi-ambiente.html", data: "2026-11-04" },
        { tipo: "Scheda", titolo: "Scheda: catene di cause e conseguenze", descrizione: "Da stampare: la mappa da completare.", link: "geografia/prima/paesaggio/schede/scheda-problemi-ambiente.html", data: "2026-11-04" }
      ] },
      { titolo: "I rilievi", libri: ["paesaggi"], pagine: "A61–A71", descrizione: "Montagne, colline, pianure; gli esseri umani modificano i rilievi.", link: "geografia/prima/paesaggio/attivita/rilievi.html", data: "2026-11-04", attivita: [
        { tipo: "Attività", titolo: "I rilievi", descrizione: "Quattro ore: altitudine; montagne; origine di colline e pianure; le persone e i rilievi.", link: "geografia/prima/paesaggio/attivita/rilievi.html", data: "2026-11-04" },
        { tipo: "Scheda", titolo: "Scheda: i rilievi", descrizione: "Da stampare: la mappa da completare.", link: "geografia/prima/paesaggio/schede/scheda-rilievi.html", data: "2026-11-04" }
      ] },
      { titolo: "Le acque", libri: ["paesaggi"], pagine: "A81–A95", descrizione: "Ghiacciai, fiumi, laghi, mari e coste; gli esseri umani modificano i corsi d'acqua e le coste.", link: "geografia/prima/paesaggio/attivita/acque.html", data: "2026-11-04", attivita: [
        { tipo: "Attività", titolo: "Le acque", descrizione: "Quattro ore: ciclo dell'acqua e ghiacciai; fiumi; laghi, mari e coste; le persone e le acque.", link: "geografia/prima/paesaggio/attivita/acque.html", data: "2026-11-04" },
        { tipo: "Missione finale", titolo: "Leggi un paesaggio con otto lenti", descrizione: "Sintesi del modulo.", link: "geografia/prima/paesaggio/attivita/acque.html#missione", data: "2026-11-04" },
        { tipo: "Scheda", titolo: "Scheda: le acque", descrizione: "Da stampare: la mappa da completare.", link: "geografia/prima/paesaggio/schede/scheda-acque.html", data: "2026-11-04" },
        { tipo: "Scheda", titolo: "Leggo un paesaggio", descrizione: "Da stampare: le otto lenti su un paesaggio scelto dagli alunni.", link: "geografia/prima/paesaggio/schede/scheda-leggo-un-paesaggio.html", data: "2026-11-04" }
      ] },
      { titolo: "Le risorse idriche", dipartimento: true, libri: ["paesaggi"], pagine: "A105–A110", descrizione: "Dossier: l'acqua.", attivita: [] }
    ],
    attivita: [
      { tipo: "Gioco", titolo: "Dove siamo? La Terra vista dallo spazio", descrizione: "Otto paesaggi fotografati dallo spazio (immagini NASA): leggi gli indizi e indovina dove siamo. Laghi, lagune, vulcani, montagne, fiumi e deserti.", link: "geografia/prima/paesaggio/attivita/dove-siamo.html", data: "2026-11-06" }
    ]
  },
  {
    materia: "geografia",
    classe: "prima",
    numero: "III",
    percorso: "come",
    titolo: "Il paesaggio italiano",
    descrizione: "Il quadro fisico dell'Italia. Secondo quadrimestre, in collegamento con Scienze e Storia.",
    lezioni: [
      { titolo: "Il quadro fisico dell'Italia", dipartimento: true, libri: ["paesaggi"], pagine: "A112–A113", descrizione: "Com'è fatta l'Italia.", attivita: [] },
      { titolo: "I climi italiani", dipartimento: true, libri: ["paesaggi"], pagine: "A114–A115", attivita: [] },
      { titolo: "Montagne, colline e pianure italiane", dipartimento: true, libri: ["paesaggi"], pagine: "A116–A119", attivita: [] },
      { titolo: "Fiumi, laghi e fenomeni carsici", dipartimento: true, libri: ["paesaggi"], pagine: "A122–A125", attivita: [] },
      { titolo: "I mari e le coste italiane", dipartimento: true, libri: ["paesaggi"], pagine: "A126–A127", attivita: [] },
      { titolo: "I rischi ambientali in Italia", libri: ["paesaggi"], pagine: "A128–A129", descrizione: "In terza si riprende con la lezione sul rischio vulcanico e sismico.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "prima",
    numero: "IV",
    percorso: "come",
    titolo: "Le attività umane in Italia",
    descrizione: "Popolazione, organizzazione politica ed economia dell'Italia. Secondo quadrimestre, in collegamento con Storia.",
    lezioni: [
      { titolo: "La popolazione, le città e la società", libri: ["paesaggi"], pagine: "B2–B7", attivita: [] },
      { titolo: "Le risorse terrestri", dipartimento: true, libri: ["paesaggi"], pagine: "B10–B13", descrizione: "L'economia e le risorse.", attivita: [] },
      { titolo: "Il quadro politico dell'Italia", dipartimento: true, libri: ["paesaggi"], pagine: "B26–B31", descrizione: "Che cos'è uno Stato, la Repubblica Italiana, un paese di venti regioni.", attivita: [] },
      { titolo: "L'Italia nel contesto europeo", dipartimento: true, libri: ["paesaggi"], pagine: "B32–B35", descrizione: "L'Italia in Europa e nel Mediterraneo.", attivita: [] },
      { titolo: "La popolazione italiana", dipartimento: true, libri: ["paesaggi"], pagine: "B45–B61", descrizione: "Quanti sono gli italiani, dove vivono, come cambia la popolazione; più culture, lingue e religioni.", attivita: [] },
      { titolo: "Cultura e paesaggio", libri: ["paesaggi"], pagine: "B71–B76", descrizione: "Dossier.", attivita: [] },
      { titolo: "L'economia italiana", dipartimento: true, libri: ["paesaggi"], pagine: "B77–B87", descrizione: "Regioni a confronto: economia e lavoro, sviluppo, ambiente e salute; il Terzo settore e il volontariato.", attivita: [] },
      { titolo: "I settori dell'economia italiana", dipartimento: true, libri: ["paesaggi"], pagine: "B90–B97", descrizione: "Primario, secondario, terziario e infrastrutture.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "prima",
    numero: "V",
    percorso: "cosa",
    titolo: "Le regioni italiane",
    descrizione: "Secondo quadrimestre, in collegamento con Storia.",
    lezioni: [
      { titolo: "Come si studia una regione italiana", dipartimento: true, libri: ["paesaggi"], pagine: "B114–B115", attivita: [] },
      {
        titolo: "L'Italia settentrionale", dipartimento: true, libri: ["paesaggi"], pagine: "B116–B145",
        descrizione: "Dieci elementi per studiare una regione, spiegati sul Piemonte (due lezioni: elementi fisici e umani). Poi ogni regione grande in due lezioni, abbinata a una regione piccola confinante da fare da soli con il libro.",
        link: "geografia/prima/regioni-italiane/italia-settentrionale/index.html",
        data: "2026-11-03",
        attivita: [
          { tipo: "Dopo il modulo I", titolo: "La carta d'identità della regione", descrizione: "Foto da satellite da mettere al loro posto; poi ognuno usa sulla sua regione orientamento, coordinate, carte, scala, fotografie e dati.", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/carta-d-identita.html", data: "2026-11-09" },
          { tipo: "Tappa 1", titolo: "L'Italia settentrionale: dove si trova e i paesaggi", descrizione: "Il puzzle delle regioni; elementi Dove si trova e Il paesaggio (B116–B121).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/territorio-e-paesaggi.html", data: "2026-11-03" },
          { tipo: "Tappa 2 · Lezione 1", titolo: "Il Piemonte: com'è fatto", descrizione: "Elementi fisici: dove si trova, paesaggio, territorio, acque, clima e ambiente (B122–B123).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/piemonte.html", data: "2026-11-04" },
          { tipo: "Tappa 2 · Lezione 2", titolo: "Il Piemonte: chi ci vive, che cosa fa", descrizione: "Elementi umani: economia, popolazione, vie di comunicazione, nome e storia, beni culturali (B122, B124–B125).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/piemonte-2.html", data: "2026-11-04" },
          { tipo: "Tappa 2 · Da soli", titolo: "La Valle d'Aosta", descrizione: "I dieci elementi con il libro, lavoro autonomo (B126–B127).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/valle-d-aosta.html", data: "2026-11-04" },
          { tipo: "Tappa 3 · Lezione 1", titolo: "La Lombardia: com'è fatta", descrizione: "Elementi fisici (B128–B129).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/lombardia.html", data: "2026-11-04" },
          { tipo: "Tappa 3 · Lezione 2", titolo: "La Lombardia: chi ci vive, che cosa fa", descrizione: "Elementi umani (B128, B130–B131).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/lombardia-2.html", data: "2026-11-04" },
          { tipo: "Tappa 3 · Da soli", titolo: "Il Trentino-Alto Adige", descrizione: "I dieci elementi con il libro (B134–B135).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/trentino-alto-adige.html", data: "2026-11-04" },
          { tipo: "Tappa 4 · Lezione 1", titolo: "Il Veneto: com'è fatto", descrizione: "Elementi fisici (B136–B137).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/veneto.html", data: "2026-11-04" },
          { tipo: "Tappa 4 · Lezione 2", titolo: "Il Veneto: chi ci vive, che cosa fa", descrizione: "Elementi umani (B136, B138–B139).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/veneto-2.html", data: "2026-11-04" },
          { tipo: "Tappa 4 · Da soli", titolo: "Il Friuli-Venezia Giulia", descrizione: "I dieci elementi con il libro (B140–B141).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/friuli-venezia-giulia.html", data: "2026-11-04" },
          { tipo: "Tappa 5 · Lezione 1", titolo: "L'Emilia-Romagna: com'è fatta", descrizione: "Elementi fisici (B142–B143).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/emilia-romagna.html", data: "2026-11-04" },
          { tipo: "Tappa 5 · Lezione 2", titolo: "L'Emilia-Romagna: chi ci vive, che cosa fa", descrizione: "Elementi umani e confronto finale tra le regioni del Nord (B142, B144–B145).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/emilia-romagna-2.html", data: "2026-11-04" },
          { tipo: "Tappa 5 · Da soli", titolo: "La Liguria", descrizione: "I dieci elementi con il libro (B132–B133).", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/liguria.html", data: "2026-11-04" },
          { tipo: "Gioco", titolo: "Quale regione? Il Nord visto dallo spazio", descrizione: "Ripasso: Lombardia, Trentino-Alto Adige, Veneto ed Emilia-Romagna nelle foto del satellite Envisat (ESA). Con i link alle pagine dell'ESA.", link: "geografia/prima/regioni-italiane/italia-settentrionale/attivita/regioni-dallo-spazio.html", data: "2026-11-09" },
          { tipo: "Schede", titolo: "Schede delle regioni per il cartellone", descrizione: "Una scheda per regione, dieci sezioni.", link: "geografia/prima/regioni-italiane/italia-settentrionale/index.html#schede", data: "2026-11-03" }
        ]
      },
      { titolo: "L'Italia centrale", dipartimento: true, libri: ["paesaggi"], pagine: "B146–B161", attivita: [] },
      { titolo: "L'Italia meridionale e insulare", dipartimento: true, libri: ["paesaggi"], pagine: "B162–B189", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "prima",
    numero: "VI",
    percorso: "roma",
    standby: true, // Percorso visibile, ma temporaneamente non disponibile.
    titolo: "Alla scoperta di Roma",
    descrizione: "Lezioni extra, non presenti nel libro: storia e geografia camminando per Roma. Si parte dalle pareti della stazione San Giovanni della metro C, poi cinque passeggiate (missioni), una per epoca, e un atlante da costruire insieme. Le missioni si possono fare anche cercando le informazioni sul web.",
    link: "geografia/prima/alla-scoperta-di-roma/index.html",
    lezioni: [
      { titolo: "Punti di vista: la Terra dall'alto", descrizione: "Lezione extra. Dal tuffo di Google Earth fino a San Giovanni, alle prime testimonianze degli astronauti (Gagarin, Apollo 8, Collins, Mitchell).", link: "geografia/prima/alla-scoperta-di-roma/punti-di-vista.html", data: "2026-11-06", attivita: [
        { tipo: "Lettura", titolo: "Punti di vista", descrizione: "L'arancia blu, la simulazione dello zoom e le parole degli astronauti.", link: "geografia/prima/alla-scoperta-di-roma/punti-di-vista.html", data: "2026-11-06" }
      ] },
      { titolo: "Un pozzo nel tempo: la stazione San Giovanni", descrizione: "Lezione extra. Nove epoche lungo le pareti della metro C, dal Paleolitico a oggi, con le note di geografia e migrazioni.", link: "geografia/prima/alla-scoperta-di-roma/alla-scoperta-di-roma.html", data: "2026-11-06", attivita: [
        { tipo: "Lezione", titolo: "Un pozzo nel tempo", descrizione: "I nove livelli della stazione e il quiz di 14 domande.", link: "geografia/prima/alla-scoperta-di-roma/alla-scoperta-di-roma.html", data: "2026-11-06" },
        { tipo: "Missione · mobile", titolo: "Missione San Giovanni", descrizione: "Da seguire con il telefono dentro la stazione.", link: "geografia/prima/alla-scoperta-di-roma/missione-san-giovanni-mobile.html", data: "2026-11-06" },
        { tipo: "Missione · da stampare", titolo: "Missione San Giovanni", link: "geografia/prima/alla-scoperta-di-roma/missione-san-giovanni.docx", data: "2026-11-06" }
      ] },
      { titolo: "Le missioni sul campo", descrizione: "Lezione extra. Cinque passeggiate per famiglie o gruppi: Monte Mario (preistoria), Via Appia Antica (Roma antica), Caffarella (Medioevo), Gianicolo (età moderna), EUR (età contemporanea).", link: "geografia/prima/alla-scoperta-di-roma/index.html", data: "2026-11-06", attivita: [
        { tipo: "Missione · mobile", titolo: "Monte Mario: dove Roma era sotto il mare", link: "geografia/prima/alla-scoperta-di-roma/missione-monte-mario-mobile.html", data: "2026-11-06" },
        { tipo: "Missione · da stampare", titolo: "Monte Mario", link: "geografia/prima/alla-scoperta-di-roma/missione-monte-mario.docx", data: "2026-11-06" },
        { tipo: "Missione · mobile", titolo: "Via Appia Antica: la Regina delle strade", link: "geografia/prima/alla-scoperta-di-roma/missione-via-appia-mobile.html", data: "2026-11-06" },
        { tipo: "Missione · da stampare", titolo: "Via Appia Antica", link: "geografia/prima/alla-scoperta-di-roma/missione-via-appia.docx", data: "2026-11-06" },
        { tipo: "Missione · mobile", titolo: "Caffarella: l'acqua che ha modellato la valle", link: "geografia/prima/alla-scoperta-di-roma/missione-caffarella-mobile.html", data: "2026-11-06" },
        { tipo: "Missione · da stampare", titolo: "Caffarella", link: "geografia/prima/alla-scoperta-di-roma/missione-caffarella.docx", data: "2026-11-06" },
        { tipo: "Missione · mobile", titolo: "Gianicolo: il colle delle fontane", link: "geografia/prima/alla-scoperta-di-roma/missione-gianicolo-mobile.html", data: "2026-11-06" },
        { tipo: "Missione · da stampare", titolo: "Gianicolo", link: "geografia/prima/alla-scoperta-di-roma/missione-gianicolo.docx", data: "2026-11-06" },
        { tipo: "Missione · mobile", titolo: "EUR: una città progettata a tavolino", link: "geografia/prima/alla-scoperta-di-roma/missione-eur-mobile.html", data: "2026-11-06" },
        { tipo: "Missione · da stampare", titolo: "EUR", link: "geografia/prima/alla-scoperta-di-roma/missione-eur.docx", data: "2026-11-06" }
      ] },
      { titolo: "L'atlante dei quartieri di Roma", descrizione: "Lezione extra. Dopo le passeggiate i ragazzi diventano cartografi: aggiungono nuovi luoghi sulla mappa, filtrabili per epoca.", link: "geografia/prima/alla-scoperta-di-roma/atlante-roma-quartieri.html", data: "2026-11-06", attivita: [
        { tipo: "Attività", titolo: "Atlante dei quartieri di Roma", descrizione: "Mappa interattiva con le cinque missioni; si esporta e si riprende alla lezione successiva.", link: "geografia/prima/alla-scoperta-di-roma/atlante-roma-quartieri.html", data: "2026-11-06" }
      ] }
    ]
  },

  /* ---------------- GEOGRAFIA · SECONDA ---------------- */
  /* Organizzata secondo Paesaggi vicini e lontani 2 (pagine C e D).
     Le lezioni senza etichetta e con «Lezione extra» non sono nel libro. */
  {
    materia: "geografia",
    classe: "seconda",
    numero: "I",
    percorso: "cosa",
    titolo: "Il continente europeo",
    descrizione: "Territorio, clima e paesaggi dell'Europa. Primo quadrimestre, in collegamento con Scienze.",
    lezioni: [
      { titolo: "Il territorio europeo: monti, mari, pianure, laghi", dipartimento: "prima", libri: ["paesaggi"], pagine: "C2–C11", descrizione: "Com'è fatta l'Europa, i rilievi, la formazione del continente, fiumi, laghi, mari e coste.", attivita: [] },
      { titolo: "Il clima e le regioni climatiche", libri: ["paesaggi"], pagine: "C14–C17", descrizione: "Il clima in Europa, le regioni climatiche e i biomi.", attivita: [] },
      { titolo: "Gli esseri umani modificano il paesaggio europeo", libri: ["paesaggi"], pagine: "C18–C19", attivita: [] },
      { titolo: "Il riscaldamento globale in Europa", dipartimento: true, libri: ["paesaggi"], pagine: "C31–C36", descrizione: "Dossier: l'aria.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "seconda",
    numero: "II",
    percorso: "come",
    titolo: "L'organizzazione politica in Europa",
    descrizione: "Gli Stati europei e l'Unione Europea. Primo e secondo quadrimestre, in collegamento con Storia e Italiano.",
    lezioni: [
      { titolo: "Monarchie e repubbliche, Stati federali e Stati unitari", dipartimento: true, libri: ["paesaggi"], pagine: "C38–C39", descrizione: "Quali sono gli Stati europei.", attivita: [] },
      { titolo: "Le tappe dell'integrazione europea", dipartimento: true, libri: ["paesaggi"], pagine: "C40–C41", descrizione: "L'Unione Europea.", attivita: [] },
      { titolo: "Il funzionamento dell'UE", dipartimento: true, libri: ["paesaggi"], pagine: "C42–C43", descrizione: "Come funziona l'Unione Europea.", attivita: [] },
      { titolo: "Le politiche comuni e l'euro", dipartimento: true, libri: ["paesaggi"], pagine: "C40–C43", attivita: [] },
      { titolo: "I diritti dei cittadini UE", dipartimento: true, libri: ["paesaggi"], pagine: "C40–C43", attivita: [] },
      { titolo: "Conflitti e tensioni in Europa", dipartimento: true, libri: ["paesaggi"], pagine: "C44–C45", descrizione: "Pace, sicurezza, conflitti.", attivita: [] },
      { titolo: "Il sistema democratico e la Costituzione", dipartimento: true, descrizione: "Lezione extra: non è nel libro di seconda (la Repubblica Italiana è in Paesaggi 1, B28).", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "seconda",
    numero: "III",
    percorso: "come",
    titolo: "La popolazione europea",
    descrizione: "Chi sono e come vivono gli europei. Tra primo e secondo quadrimestre, in collegamento con Storia.",
    lezioni: [
      { titolo: "La popolazione europea", dipartimento: "prima", libri: ["paesaggi"], pagine: "C56–C59", descrizione: "Chi sono gli europei; Stati a confronto: superficie e popolazione.", attivita: [] },
      { titolo: "I movimenti migratori in Europa", libri: ["paesaggi"], pagine: "C60–C61", attivita: [] },
      { titolo: "L'urbanizzazione del continente europeo", dipartimento: "prima", libri: ["paesaggi"], pagine: "C64–C67", descrizione: "Dove vivono gli europei; Stati a confronto: densità e urbanesimo.", attivita: [] },
      { titolo: "Come vivono gli europei", libri: ["paesaggi"], pagine: "C68–C71", descrizione: "Stati a confronto: istruzione, salute e parità.", attivita: [] },
      { titolo: "Le culture degli europei", libri: ["paesaggi"], pagine: "C83–C88", descrizione: "Dossier.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "seconda",
    numero: "IV",
    percorso: "come",
    titolo: "L'economia europea",
    descrizione: "Risorse, lavoro, settori dell'economia e sviluppo sostenibile. In collegamento con Storia e Italiano.",
    lezioni: [
      { titolo: "Il ruolo dell'Europa nell'economia mondiale", dipartimento: true, libri: ["paesaggi"], pagine: "C90–C93", descrizione: "Su quali risorse si basa l'economia europea; economia e lavoro.", attivita: [] },
      { titolo: "Gli squilibri nell'economia europea", dipartimento: true, libri: ["paesaggi"], pagine: "C94–C95", descrizione: "Stati a confronto: PIL e occupazione.", attivita: [] },
      { titolo: "La protezione dell'ambiente in Europa", dipartimento: true, libri: ["paesaggi"], pagine: "C96–C97", descrizione: "Lo sviluppo sostenibile.", attivita: [] },
      { titolo: "L'economia europea: il settore primario", dipartimento: true, libri: ["paesaggi"], pagine: "C100–C101", descrizione: "Anche le regioni agrarie europee.", attivita: [] },
      { titolo: "L'economia europea: il settore secondario", dipartimento: true, libri: ["paesaggi"], pagine: "C102–C103", attivita: [] },
      { titolo: "L'economia europea: il settore terziario", dipartimento: true, libri: ["paesaggi"], pagine: "C104–C107", descrizione: "Terziario tradizionale (commercio, trasporti, turismo) e avanzato (telecomunicazioni e finanza).", attivita: [] },
      { titolo: "Ricerca e innovazione", libri: ["paesaggi"], pagine: "C108–C109", attivita: [] },
      { titolo: "Che cos'è OpenStreetMap", libri: ["paesaggi"], pagine: "C121", descrizione: "Esplorare, mappare, condividere.", attivita: [] },
      { titolo: "L'Italia nell'economia europea", dipartimento: true, descrizione: "Lezione extra: non è nel libro di seconda (l'economia italiana è in Paesaggi 1, B77).", attivita: [] },
      { titolo: "Gli squilibri nell'economia italiana", dipartimento: true, descrizione: "Lezione extra: non è nel libro di seconda (Regioni a confronto in Paesaggi 1, B80).", attivita: [] },
      { titolo: "Le città sostenibili", dipartimento: true, descrizione: "Lezione extra: non è nel libro.", attivita: [] },
      { titolo: "Lo smaltimento dei rifiuti", dipartimento: true, descrizione: "Lezione extra: non è nel libro.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "seconda",
    numero: "V",
    percorso: "cosa",
    titolo: "Gli Stati europei",
    descrizione: "Gli Stati per grandi regioni, con i cinque grandi Stati: Regno Unito, Francia, Spagna, Germania, Russia. Primo e secondo quadrimestre, in collegamento con Storia e Italiano.",
    lezioni: [
      { titolo: "Come si studia uno Stato europeo", dipartimento: true, libri: ["paesaggi"], pagine: "D1–D2", descrizione: "Quando sono nati gli Stati europei.", attivita: [] },
      { titolo: "L'Europa settentrionale", dipartimento: true, libri: ["paesaggi"], pagine: "D3–D28", descrizione: "Islanda, Norvegia, Svezia, Danimarca, Finlandia, Repubbliche baltiche.", attivita: [] },
      { titolo: "L'Europa occidentale", dipartimento: true, libri: ["paesaggi"], pagine: "D29–D77", descrizione: "Irlanda, Regno Unito, Francia, Benelux, Spagna, Portogallo.", attivita: [] },
      { titolo: "L'Europa centrale", dipartimento: true, libri: ["paesaggi"], pagine: "D79–D113", descrizione: "Germania, Svizzera, Austria, Polonia, Repubblica Ceca, Slovacchia, Ungheria.", attivita: [] },
      { titolo: "L'Europa orientale", dipartimento: true, libri: ["paesaggi"], pagine: "D115–D147", descrizione: "Russia, Bielorussia, Ucraina, Moldavia, Romania, Bulgaria, Georgia, Armenia, Azerbaigian.", attivita: [] },
      { titolo: "L'Europa sud-orientale", dipartimento: true, libri: ["paesaggi"], pagine: "D149–D181", descrizione: "I paesi della ex Iugoslavia, Albania, Grecia, Malta, Cipro, Turchia.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "seconda",
    numero: "VI",
    percorso: "cosa",
    titolo: "Geostoria dell'Europa",
    descrizione: "Lezioni extra, non presenti nel libro: l'identità europea attraverso la storia. Durante l'anno, in collegamento con Storia e Italiano.",
    lezioni: [
      { titolo: "L'Europa antica", dipartimento: true, descrizione: "Lezione extra. L'identità europea.", attivita: [] },
      { titolo: "L'Europa medievale", dipartimento: true, descrizione: "Lezione extra. L'identità europea.", attivita: [] },
      { titolo: "L'Europa moderna", dipartimento: true, descrizione: "Lezione extra. L'identità europea.", attivita: [] },
      { titolo: "L'Europa contemporanea", dipartimento: true, descrizione: "Lezione extra. L'identità europea (nel libro solo «Quando sono nati gli Stati europei?», D1).", attivita: [] }
    ]
  },

  /* ---------------- GEOGRAFIA · TERZA ---------------- */
  {
    materia: "geografia",
    classe: "terza",
    numero: "I",
    percorso: "come",
    titolo: "Il pianeta Terra",
    link: "geografia/terza/la-terra/index.html",
    descrizione: "Origini del pianeta, un pianeta irrequieto, idrografia, continenti, atmosfera. Primo quadrimestre, in collegamento con Scienze.",
    lezioni: [
      {
        titolo: "Il Sistema solare",
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E6–E7",
        descrizione: "Sole, pianeti, asteroidi, meteoroidi e comete: schede cliccabili e zoom. GeoAgenda 3: E4–E5 · Vivi la Geografia 3: Unità 2, lezione 1, pp. 14–15 (Sistema solare, la Terra in cifre).",
        link: "geografia/terza/la-terra/lezioni/sistema-solare.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il moto di rotazione",
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E8–E9",
        descrizione: "La Terra gira da ovest a est: modello 3D con la cupola del cielo di Roma. GeoAgenda 3: E10–E11 · Vivi la Geografia 3: Unità 2, lezione 2, p. 16 (moto di rotazione).",
        link: "geografia/terza/la-terra/lezioni/rotazione-terra.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il crepuscolo",
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E8–E9",
        descrizione: "I raggi del Sole deviati dall'atmosfera all'alba e al tramonto. Approfondimento sul moto di rotazione. GeoAgenda 3: E10–E11 · Vivi la Geografia 3: p. 16 e curiosità «Il Sole all'Equatore», p. 17.",
        link: "geografia/terza/la-terra/lezioni/crepuscolo.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il moto di rivoluzione",
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E8–E9",
        descrizione: "Orbita, equinozi e solstizi, circolo di illuminazione e durata del dì. GeoAgenda 3: E10–E11 · Vivi la Geografia 3: Unità 2, lezione 2, pp. 16–17 (rivoluzione, stagioni, equinozi e solstizi).",
        link: "geografia/terza/la-terra/lezioni/rivoluzione.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "I fusi orari",
        dipartimento: "prima",
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E10–E11",
        descrizione: "24 fusi da 15°, ora UTC e ora legale, ora civile e ora locale, linea del cambiamento di data, i fusi dell'Europa e le lancette da spostare. GeoAgenda 3: E12–E13 · Vivi la Geografia 3: Unità 2, lezione 2, pp. 16–17 (carta dei fusi e «Che cosa sono i fusi orari?»).",
        link: "geografia/terza/la-terra/lezioni/fusi-orari.html",
        data: "2026-10-24",
        attivita: []
      },
      {
        titolo: "La struttura della Terra",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E14–E15",
        descrizione: "Viaggio verso il centro, placche, vulcani e terremoti, formazione della Terra. GeoAgenda 3: E14–E15 · Vivi la Geografia 3: p. 15 (la struttura della Terra) e Unità 2, lezione 3, pp. 18–19 (placche, deriva dei continenti).",
        link: "geografia/terza/la-terra/lezioni/struttura-terra.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il rischio vulcanico e il rischio sismico",
        dipartimento: true,
        libri: ["geoagenda", "vivi"],
        descrizione: "Educazione civica: pericoli di vulcani e terremoti, tsunami, difese di Vesuvio ed Etna, previsione e prevenzione, edifici antisismici. GeoAgenda 3: E16–E17 · Vivi la Geografia 3: Unità 2, lezione 3, pp. 18–19 (terremoti, vulcani, tsunami) · Paesaggi 3: nessuna lezione.",
        link: "geografia/terza/la-terra/lezioni/rischio-vulcanico-sismico.html",
        data: "2026-10-27",
        attivita: []
      },
      {
        titolo: "I continenti",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E16–E17",
        descrizione: "Dati dei sei continenti, confronti e deriva dalla Pangea a oggi. GeoAgenda 3: E18–E19 · Vivi la Geografia 3: Unità 1, lezione 1, p. 4 (superficie e popolazione dei continenti); Pangea a p. 14, deriva dei continenti a p. 18.",
        link: "geografia/terza/la-terra/lezioni/continenti.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Le proiezioni: disegnare il mondo su un foglio",
        dipartimento: "prima",
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E4–E5",
        descrizione: "Carte conformi ed equivalenti, Mercatore, Peters ed Equal Earth a confronto con il globo. Spostata dalla prima, da verificare. GeoAgenda 3: E8–E9 · Vivi la Geografia 3: Unità 1, lezione 2, pp. 6–7 (Mercatore, Peters, anamorfosi, cartografia digitale); approfondimento: lezione 3, pp. 8–9 (le carte e le culture).",
        link: "geografia/prima/metodo-e-strumenti/lezioni/proiezioni.html",
        data: "2026-10-23",
        attivita: [
          { tipo: "Attività", titolo: "Carte sovrapposte ed emisferi", link: "geografia/prima/carte-geografiche/attivita/carte-sovrapposte-ed-emisferi.html", data: "2026-10-21" }
        ]
      },
      {
        titolo: "Rilievi, oceani, fiumi e laghi",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E18–E23",
        descrizione: "Catene montuose e scudi, fondali oceanici, correnti, acqua dolce. GeoAgenda 3: E20–E25 · Vivi la Geografia 3: Unità 1, lezione 1, p. 5 (oceani, i maggiori fiumi e laghi, idrosfera). Sui rilievi nessuna pagina.",
        link: "geografia/terza/la-terra/lezioni/acque.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "L'atmosfera",
        libri: ["paesaggi", "geoagenda"],
        pagine: "E34–E35",
        descrizione: "Composizione, strati e temperatura, venti costanti e brezze. GeoAgenda 3: E26–E27 · Paesaggi 3: nel capitolo sul clima · Vivi la Geografia 3: solo la definizione di atmosfera a p. 16.",
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
        link: "geografia/terza/la-terra/ripasso/Terra_Ripasso_guidato.html",
        data: "2026-10-14"
      },
      {
        tipo: "Cruciverba",
        titolo: "Le parole del pianeta Terra",
        link: "geografia/terza/la-terra/ripasso/cruciverba-la-terra.html",
        data: "2026-10-21"
      },
      {
        tipo: "Español",
        titolo: "El planeta Tierra · versión en español",
        descrizione: "Resumen fácil (nivel B1) con glosario y las 11 herramientas interactivas traducidas.",
        link: "geografia/es/la-tierra/index.html",
        data: "2026-10-26"
      }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "II",
    percorso: "come",
    titolo: "Clima e ambienti",
    link: "geografia/terza/clima-e-ambienti/index.html",
    descrizione: "Fasce climatiche e biomi, il clima e i suoi cambiamenti. Primo quadrimestre (novembre–dicembre), in collegamento con Scienze ed Educazione civica.",
    lezioni: [
      {
        titolo: "Perché sulla Terra esistono climi diversi?",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E34–E35",
        descrizione: "Le zone astronomiche e le stagioni, i fattori del clima. GeoAgenda 3: E42–E43 · Vivi la Geografia 3: Unità 2, lezione 2 e Unità 3, lezione 1, pp. 16–17, 20–21.",
        link: "geografia/terza/clima-e-ambienti/lezioni/climi-diversi.html",
        data: "2026-11-01",
        attivita: []
      },
      {
        titolo: "Dal clima ai biomi",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E36–E37",
        descrizione: "Le zone climatiche e i grandi ambienti naturali. GeoAgenda 3: E44–E45 · Vivi la Geografia 3: Unità 3, lezione 1, pp. 20–21.",
        link: "geografia/terza/clima-e-ambienti/lezioni/biomi.html",
        data: "2026-11-01",
        attivita: []
      },
      {
        titolo: "Gli ambienti caldi: troppa acqua o troppo poca?",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E44–E47",
        descrizione: "Foresta pluviale, savana, deserti e oasi. GeoAgenda 3: E46–E49 · Vivi la Geografia 3: Unità 3, lezioni 2–5, pp. 22–29.",
        link: "geografia/terza/clima-e-ambienti/lezioni/ambienti-caldi.html",
        data: "2026-11-01",
        attivita: []
      },
      {
        titolo: "Dalle zone temperate ai poli",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E48–E51",
        descrizione: "Macchia mediterranea, latifoglie, praterie, taiga, tundra e ghiacci. GeoAgenda 3: E50–E53 · Vivi la Geografia 3: Unità 3, lezioni 6–7, pp. 30–35.",
        link: "geografia/terza/clima-e-ambienti/lezioni/temperati-e-freddi.html",
        data: "2026-11-01",
        attivita: []
      },
      {
        titolo: "Come trasformiamo gli ambienti?",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E40–E41",
        descrizione: "Deforestazione, desertificazione, cementificazione, inquinamento, rifiuti. GeoAgenda 3: E45 · Vivi la Geografia 3: Unità 4, lezioni 1, 2 e 4, pp. 38–41, 44–45.",
        link: "geografia/terza/clima-e-ambienti/lezioni/trasformazioni.html",
        data: "2026-11-01",
        attivita: []
      },
      {
        titolo: "Il clima è sempre cambiato. Che cosa cambia oggi?",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E38–E39",
        descrizione: "I cambiamenti climatici del passato e il riscaldamento globale. GeoAgenda 3: E54–E57 · Vivi la Geografia 3: Unità 4, lezioni 3 e 6, pp. 42–43, 48–49.",
        link: "geografia/terza/clima-e-ambienti/lezioni/cambiamento-climatico.html",
        data: "2026-11-01",
        attivita: []
      }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "III",
    percorso: "come",
    titolo: "Popolazione mondiale: crescita e inurbamento",
    link: "geografia/terza/popolazione/index.html",
    descrizione: "Dove siamo, quanti siamo, come ci muoviamo. Dicembre–gennaio, in collegamento con Scienze e Storia.",
    lezioni: [
      {
        titolo: "La popolazione mondiale",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        pagine: "E86–E87",
        descrizione: "Quanti siamo, come è cresciuta la popolazione, dove viviamo, gli squilibri demografici. GeoAgenda 3: E72–E73 · Vivi la Geografia 3: Unità 5, lezioni 1–4, pp. 54–61.",
        link: "geografia/terza/popolazione/index.html",
        data: "2026-11-01",
        attivita: [
          { tipo: "Parte 1", titolo: "Quanti siamo?", descrizione: "Le tappe della popolazione mondiale, in scala reale; quanto tempo per ogni miliardo.", link: "geografia/terza/popolazione/lezioni/andamento.html", data: "2026-11-01" },
          { tipo: "Parte 2", titolo: "La crescita della popolazione", descrizione: "Le tre fasi animate, nati e morti, quante volte siamo aumentati.", link: "geografia/terza/popolazione/lezioni/crescita.html", data: "2026-11-01" },
          { tipo: "Parte 3", titolo: "Terre affollate, terre spopolate", descrizione: "La densità di popolazione, 100 abitanti della Terra, i fattori del popolamento, sempre più in città.", link: "geografia/terza/popolazione/lezioni/distribuzione.html", data: "2026-11-01" },
          { tipo: "Parte 4", titolo: "I grandi squilibri demografici", descrizione: "Il ricambio generazionale, la piramide delle età, perché si fanno pochi o tanti figli.", link: "geografia/terza/popolazione/lezioni/squilibri.html", data: "2026-11-01" },
          { tipo: "Se c'è tempo", titolo: "Carte che cambiano forma", descrizione: "Anamorfosi: il mondo disegnato in base alla popolazione, ai giovani, ai cellulari.", link: "geografia/prima/carte-geografiche/attivita/carte-che-cambiano-forma.html", data: "2026-10-23" }
        ]
      },
      { titolo: "L'inurbamento", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E88–E89", descrizione: "La crescita delle città. GeoAgenda 3: E72–E73 (urbanesimo e megalopoli, dentro «La popolazione mondiale»; poi il modulo integrativo Città che cambiano) · Vivi la Geografia 3: Unità 6, pp. 68–85.", attivita: [
          { tipo: "Mappa", titolo: "Città che cambiano — Atlante d'Europa", descrizione: "Mappa interattiva delle soluzioni urbane sostenibili in Europa (acqua, calore, energia, mobilità, rifiuti, verde). Collegata al modulo integrativo Città che cambiano di GeoAgenda.", link: "educazione-civica/terza/clima-energia-e-informazione/citta-che-cambiano.html", data: "2026-11-04" }
        ] },
      { titolo: "I movimenti migratori", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E94–E95", descrizione: "Perché si emigra; migrazioni internazionali e forzate, profughi. GeoAgenda 3: E82–E83 · Vivi la Geografia 3: Unità 5, lezioni 5–6, pp. 62–66.", attivita: [] },
      { titolo: "Lo sviluppo", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E90–E93, E98–E101", descrizione: "Disuguaglianze e sottosviluppo, salute e istruzione. GeoAgenda 3: E78–E81, E84–E87 · Vivi la Geografia 3: Unità 9, pp. 116–128.", attivita: [] },
      { titolo: "Culture, lingue e religioni", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E102–E103, E115–E120", descrizione: "La geografia delle culture; dossier «La diversità delle culture». GeoAgenda 3: E88–E91 · Vivi la Geografia 3: Unità 12, pp. 164–176.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "IV",
    percorso: "come",
    titolo: "L'economia mondiale",
    link: "geografia/terza/economia/index.html",
    descrizione: "Le attività e le reti con cui trasformiamo il pianeta. Gennaio–febbraio, in collegamento con Scienze e Tecnologia.",
    lezioni: [
      { titolo: "L'economia globale e la globalizzazione", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E122–E123", descrizione: "Lo spazio economico mondiale, le città globali, i fattori della globalizzazione, WTO, FMI e Banca Mondiale, le crisi del 2008 e del Covid-19. GeoAgenda 3: §1 Un'economia globale, E108–E109 · Vivi la Geografia 3: Unità 7, lezioni 1–3, pp. 90–95.", link: "geografia/terza/economia/lezioni/globalizzazione.html", data: "2026-11-02", attivita: [] },
      { titolo: "Una nuova geografia dell'economia: Nord e Sud del mondo", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E122–E123", descrizione: "Nord e Sud del mondo, G20 e BRICS, le multinazionali e la delocalizzazione, la Cina «fabbrica del mondo» e le nuove Vie della seta. GeoAgenda 3: §1, E108–E109; G20 e BRICS a p. E114; Agenda 2030 «A che punto siamo con la lotta alla povertà?», E120–E121 · Vivi la Geografia 3: Unità 7, lezioni 4–6, pp. 96–101; aiuti allo sviluppo: Unità 9, lezione 6, p. 126.", link: "geografia/terza/economia/lezioni/nord-sud.html", data: "2026-11-02", attivita: [] },
      { titolo: "Risorse, energia e conflitti", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E124–E125", descrizione: "Materie prime e fonti di energia, il petrolio, le rinnovabili; i conflitti per il petrolio, l'acqua, il suolo e il cibo. GeoAgenda 3: §2 Le risorse e l'ambiente, E110–E111 · Vivi la Geografia 3: Unità 8, lezioni 1–2, pp. 104–107; l'acqua: Unità 4, lezione 5, pp. 46–47.", link: "geografia/terza/economia/lezioni/risorse-energia.html", data: "2026-11-02", attivita: [] },
      { titolo: "Il settore primario", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E128–E129", descrizione: "Agricoltura di autoconsumo e agricoltura avanzata, piantagioni monocolturali, land grabbing, effetti del cambiamento climatico. GeoAgenda 3: §3 L'agricoltura, E112–E113 · Vivi la Geografia 3: Unità 8, lezione 3, pp. 108–109.", link: "geografia/terza/economia/lezioni/primario.html", data: "2026-11-02", attivita: [] },
      { titolo: "Il settore secondario", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E130–E131", descrizione: "Le trasformazioni dell'industria, la delocalizzazione, ricerca e alta tecnologia, automazione e lavoro, il divario digitale. GeoAgenda 3: §4 L'industria, E114–E115 · Vivi la Geografia 3: Unità 8, lezione 4, pp. 110–111.", link: "geografia/terza/economia/lezioni/secondario.html", data: "2026-11-02", attivita: [] },
      { titolo: "Il settore terziario", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E132–E135", descrizione: "Commercio, trasporti e turismo internazionale; il terziario di comando, banche e borse valori, le telecomunicazioni. GeoAgenda 3: §5 Commercio, trasporti e turismo, E116–E117; §6 Finanza e telecomunicazioni, E118–E119 · Vivi la Geografia 3: Unità 8, lezione 5, pp. 112–113.", link: "geografia/terza/economia/lezioni/terziario.html", data: "2026-11-02", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "V",
    percorso: "come",
    titolo: "Gli Stati del mondo: la geopolitica",
    descrizione: "Introduzione agli Stati: febbraio–marzo, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "La crisi degli Stati nazionali", dipartimento: true, libri: ["paesaggi", "geoagenda"], pagine: "E68–E71", descrizione: "Che cos'è uno Stato (territorio, popolazione, sovranità), confini e tensioni, forme di governo, Stati democratici e autoritari. GeoAgenda 3: E74–E75.", attivita: [] },
      { titolo: "Il sistema politico mondiale", dipartimento: true, attivita: [] },
      { titolo: "L'Organizzazione delle Nazioni Unite", dipartimento: true, libri: ["paesaggi", "geoagenda"], pagine: "E72–E73", descrizione: "Organi e agenzie dell'ONU, le altre organizzazioni internazionali (WTO, Banca Mondiale, FMI), l'Agenda 2030. GeoAgenda 3: E76–E77.", attivita: [] },
      { titolo: "I diritti umani", dipartimento: true, libri: ["geoagenda"], descrizione: "La Dichiarazione universale dei diritti dell'uomo: diritti civili e politici, economici, sociali e culturali. GeoAgenda 3: E77.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "VI",
    percorso: "cosa",
    titolo: "Gli Stati del mondo: Africa",
    descrizione: "Presentazioni degli Stati per continente, marzo–maggio. Profilo fisico, politico e antropico, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "L'Africa: profilo fisico", dipartimento: true, attivita: [] },
      { titolo: "L'Africa: profilo politico", dipartimento: true, attivita: [] },
      { titolo: "L'Africa: profilo antropico", dipartimento: true, attivita: [] },
      { titolo: "L'Africa mediterranea", dipartimento: true, attivita: [] },
      { titolo: "L'Africa subsahariana", dipartimento: true, attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "VII",
    percorso: "cosa",
    titolo: "Gli Stati del mondo: Asia",
    descrizione: "Presentazioni degli Stati per continente, marzo–maggio. Profilo fisico, politico e antropico, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "L'Asia: profilo fisico", dipartimento: true, attivita: [] },
      { titolo: "L'Asia: profilo politico", dipartimento: true, attivita: [] },
      { titolo: "L'Asia: profilo antropico", dipartimento: true, attivita: [] },
      { titolo: "L'Asia occidentale", dipartimento: true, attivita: [] },
      { titolo: "L'Asia centrale", dipartimento: true, attivita: [] },
      { titolo: "L'Asia meridionale", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "F94–F101", descrizione: "La regione indiana: India, Pakistan, Bangladesh. GeoAgenda 3: F46–F51 · Vivi la Geografia 3: p. 202 e l'unità sull'India, pp. 206–219.", attivita: [] },
      { titolo: "L'Asia sud-orientale", dipartimento: true, attivita: [] },
      { titolo: "L'Asia orientale", dipartimento: true, attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "VIII",
    percorso: "cosa",
    titolo: "Gli Stati del mondo: America anglosassone e America Latina",
    descrizione: "Presentazioni degli Stati per continente, marzo–maggio. Profilo fisico, politico e antropico, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "L'America: profilo fisico", dipartimento: true, attivita: [] },
      { titolo: "L'America: profilo politico", dipartimento: true, attivita: [] },
      { titolo: "L'America: profilo antropico", dipartimento: true, attivita: [] },
      { titolo: "L'America settentrionale", dipartimento: true, attivita: [] },
      { titolo: "L'America centrale", dipartimento: true, attivita: [] },
      { titolo: "L'America meridionale", dipartimento: true, attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "IX",
    percorso: "cosa",
    titolo: "Gli Stati del mondo: Oceania",
    descrizione: "Presentazioni degli Stati per continente, marzo–maggio. Profilo fisico, politico e antropico, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "L'Oceania: profilo fisico", dipartimento: true, attivita: [] },
      { titolo: "L'Oceania: profilo politico", dipartimento: true, attivita: [] },
      { titolo: "L'Oceania: profilo antropico", dipartimento: true, attivita: [] },
      { titolo: "L'Antartide", libri: ["paesaggi", "geoagenda", "vivi"], pagine: "F196–F197", descrizione: "GeoAgenda 3: F218–F219 · Vivi la Geografia 3: pp. 316–317.", attivita: [] }
    ]
  },

  /* ---------------- ITALIANO · PRIMA ---------------- */
  {
    materia: "italiano",
    classe: "prima",
    numero: "I",
    titolo: "Educazione linguistica",
    link: "italiano/prima/educazione-linguistica/parole-in-fabula/00_APRI_PAROLE_IN_FABULA.html",
    descrizione: "Fonologia, ortografia e punteggiatura, le parti del discorso. Si parte dai laboratori di Parole in fabula (storie e favole), poi schede ed esercizi. Primo e secondo quadrimestre, in collegamento con Inglese, Francese, Spagnolo e Tedesco.",
    lezioni: [
      { titolo: "Suoni e lettere: fonologia e alfabeto", descrizione: "Alfabeto, vocali e consonanti, digrammi, sillaba, dittongo e iato, accento.", attivita: [
          { tipo: "Laboratorio 1", titolo: "Il topo e l'alfabeto", descrizione: "Parole in fabula · Il topo dei fumetti di Rodari: lettere, ordine alfabetico e lettere viaggiatrici.", link: "italiano/prima/educazione-linguistica/parole-in-fabula/01_ALFABETO.html", data: "2026-10-31" },
          { tipo: "Laboratorio 2", titolo: "Il coro dei musicanti", descrizione: "Parole in fabula · I musicanti di Brema: fonemi e grafemi, dittongo e iato, digrammi e trigrammi, sillabe.", link: "italiano/prima/educazione-linguistica/parole-in-fabula/02_SUONI_E_LETTERE.html", data: "2026-10-31" },
          { tipo: "Esercizi", titolo: "Suoni e lettere", descrizione: "Scheda riassuntiva e cinque esercizi con correzione automatica: sillabe, accento, dittongo e iato, digrammi.", link: "italiano/prima/educazione-linguistica/fonologia-alfabeto.html", data: "2026-10-30" }
        ] },
      { titolo: "Ortografia e punteggiatura", descrizione: "I casi difficili, accento sui monosillabi, h, apostrofo, maiuscole e segni di punteggiatura.", attivita: [
          { tipo: "Laboratorio 3", titolo: "Il sentiero delle parole", descrizione: "Parole in fabula · Hansel e Gretel: C e G, H, CU/QU/CQU, doppie, accenti e apostrofi.", link: "italiano/prima/educazione-linguistica/parole-in-fabula/03_ORTOGRAFIA.html", data: "2026-10-31" },
          { tipo: "Laboratorio 4", titolo: "Il respiro del racconto", descrizione: "Parole in fabula · I tre porcellini: scriptio continua, pause, intonazione e discorso diretto.", link: "italiano/prima/educazione-linguistica/parole-in-fabula/04_PUNTEGGIATURA.html", data: "2026-10-31" },
          { tipo: "Esercizi", titolo: "Ortografia e punteggiatura", descrizione: "Scheda riassuntiva e sei esercizi con correzione automatica.", link: "italiano/prima/educazione-linguistica/ortografia-punteggiatura.html", data: "2026-10-30" }
        ] },
      { titolo: "Le parti del discorso: il gruppo del nome e il gruppo del verbo", descrizione: "Le nove parti del discorso; il gruppo del nome e il gruppo del verbo; il verbo e le sue valenze.", attivita: [
          { tipo: "Laboratorio 5", titolo: "Il testo misterioso", descrizione: "Parole in fabula · Il leone e il topo e La volpe e l'uva: una favola rotta in gruppi di parole, gioco alla LIM e prima mappa delle parti del discorso.", link: "italiano/prima/educazione-linguistica/parole-in-fabula/05_TESTO_MISTERIOSO.html", data: "2026-10-31" },
          { tipo: "Esercizi", titolo: "Le parti del discorso e la frase", descrizione: "Scheda riassuntiva e sei esercizi con correzione automatica, con un primo approccio alla grammatica valenziale.", link: "italiano/prima/educazione-linguistica/parti-del-discorso.html", data: "2026-10-30" },
          { tipo: "Laboratorio", titolo: "Laboratorio valenziale", descrizione: "Le sette fasi della lezione-laboratorio: il teatro della frase, la sfilata dei verbi, il gioco delle valenze alla LIM, il grafico radiale interattivo e un compito con le lingue di famiglia.", link: "italiano/prima/educazione-linguistica/laboratorio-valenziale.html", data: "2026-10-31" }
        ] },
      { titolo: "Le parti variabili: articolo, nome e aggettivo", descrizione: "Le parole del gruppo del nome: articoli, tipi di nome e plurale, aggettivi qualificativi e determinativi, gradi.", attivita: [
          { tipo: "Esercizi", titolo: "Articolo, nome e aggettivo", descrizione: "Scheda riassuntiva e otto esercizi con correzione automatica.", link: "italiano/prima/educazione-linguistica/articolo-nome-aggettivo.html", data: "2026-10-30" }
        ] },
      { titolo: "Le parti variabili: pronome e verbo", descrizione: "Pronomi personali e relativi; coniugazioni, modi e tempi, forma del verbo; le valenze e il nucleo della frase.", attivita: [
          { tipo: "Esercizi", titolo: "Pronome e verbo", descrizione: "Scheda riassuntiva e nove esercizi con correzione automatica.", link: "italiano/prima/educazione-linguistica/pronome-verbo.html", data: "2026-10-30" }
        ] },
      { titolo: "Le parti invariabili: preposizione, congiunzione, avverbio, interiezione", descrizione: "Le parti del discorso che non cambiano mai forma.", attivita: [
          { tipo: "Esercizi", titolo: "Ripasso degli avverbi", descrizione: "Scheda riassuntiva e nove esercizi con correzione automatica.", link: "italiano/prima/educazione-linguistica/ripasso-avverbi.html", data: "2026-10-23" },
          { tipo: "Esercizi", titolo: "Ripasso delle preposizioni", descrizione: "Semplici, articolate e improprie: scheda riassuntiva e sei esercizi con correzione automatica.", link: "italiano/prima/educazione-linguistica/ripasso-preposizioni.html", data: "2026-10-23" },
          { tipo: "Esercizi", titolo: "Ripasso delle congiunzioni", descrizione: "Coordinanti e subordinanti: scheda riassuntiva e sei esercizi con correzione automatica.", link: "italiano/prima/educazione-linguistica/ripasso-congiunzioni.html", data: "2026-10-23" },
          { tipo: "Esercizi", titolo: "Ripasso delle interiezioni", descrizione: "Proprie, improprie, locuzioni e onomatopee: scheda riassuntiva e sei esercizi con correzione automatica.", link: "italiano/prima/educazione-linguistica/ripasso-interiezioni.html", data: "2026-10-23" }
        ] }
    ]
  },
  {
    materia: "italiano",
    classe: "prima",
    numero: "II",
    titolo: "Mito ed epica",
    descrizione: "La narrazione in versi: il genere epico. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica e Geografia.",
    lezioni: [
      {
        titolo: "Il mito",
        descrizione: "Che cos'è un mito; le cosmogonie, i racconti sull'origine del mondo.",
        attivita: [
          { tipo: "Lezione", titolo: "Il cielo sopra di noi", descrizione: "La Terra vista dalla Luna, astronauti, cosmonauti e taikonauti, fino ai racconti più antichi sull'origine del mondo. Fasi 6–9 in italiano.", link: "italiano/prima/mito-ed-epica/il-cielo-sopra-di-noi.html", data: "2026-10-21" }
        ]
      },
      { titolo: "L'epica: l'Iliade", descrizione: "Omero, l'antefatto, l'ira di Achille, i personaggi, epiteti e similitudini.", attivita: [
          { tipo: "Lezione", titolo: "L'Iliade", descrizione: "Scheda sul poema e cinque esercizi con correzione automatica.", link: "italiano/prima/mito-ed-epica/iliade.html", data: "2026-10-30" }
        ] },
      { titolo: "L'epica: l'Odissea", descrizione: "Il ritorno di Ulisse a Itaca: struttura, avventure, Penelope e i Proci.", attivita: [
          { tipo: "Lezione", titolo: "L'Odissea", descrizione: "Scheda sul poema e cinque esercizi con correzione automatica.", link: "italiano/prima/mito-ed-epica/odissea.html", data: "2026-10-30" }
        ] },
      { titolo: "L'epica: l'Eneide", descrizione: "Virgilio e Augusto, il viaggio e la guerra di Enea, il pio eroe.", attivita: [
          { tipo: "Lezione", titolo: "L'Eneide", descrizione: "Scheda sul poema e cinque esercizi con correzione automatica.", link: "italiano/prima/mito-ed-epica/eneide.html", data: "2026-10-30" }
        ] },
      { titolo: "L'epica medievale e cavalleresca", descrizione: "Ciclo carolingio e bretone, la Chanson de Roland, Boiardo, Ariosto e Tasso.", attivita: [
          { tipo: "Lezione", titolo: "Cavalieri, paladini e re Artù", descrizione: "Scheda sull'epica medievale e cinque esercizi con correzione automatica.", link: "italiano/prima/mito-ed-epica/epica-medievale-cavalleresca.html", data: "2026-10-30" }
        ] }
    ]
  },
  {
    materia: "italiano",
    classe: "prima",
    numero: "III",
    titolo: "Antologia",
    descrizione: "Lettura e comprensione: la narrazione in prosa. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica e Geografia.",
    lezioni: [
      { titolo: "La narrazione in prosa", descrizione: "Fabula e intreccio, schema narrativo, sequenze, personaggi e narratore.", attivita: [
          { tipo: "Lezione", titolo: "Come è fatto un racconto", descrizione: "Scheda sul testo narrativo e cinque esercizi con correzione automatica.", link: "italiano/prima/antologia/narrazione-in-prosa.html", data: "2026-10-30" }
        ] }
    ]
  },
  {
    materia: "italiano",
    classe: "prima",
    numero: "IV",
    titolo: "Laboratorio di scrittura",
    descrizione: "Produzione di varie tipologie testuali. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica e Geografia.",
    lezioni: [
      { titolo: "Il riassunto", attivita: [] },
      { titolo: "Il testo descrittivo", attivita: [] },
      { titolo: "Il testo narrativo", attivita: [] },
      { titolo: "Il testo argomentativo", attivita: [] },
      { titolo: "L'analisi del testo narrativo", attivita: [] }
    ]
  },

  /* ---------------- ITALIANO · SECONDA ---------------- */
  {
    materia: "italiano",
    classe: "seconda",
    numero: "I",
    titolo: "Educazione linguistica",
    descrizione: "Analisi morfologica e analisi logica della frase semplice. Primo e secondo quadrimestre, in collegamento con Inglese, Francese, Spagnolo e Tedesco.",
    lezioni: [
      { titolo: "Le preposizioni", descrizione: "Semplici, articolate, improprie e locuzioni; la preposizione come chiave dei complementi.", attivita: [
          { tipo: "Esercizi", titolo: "Le preposizioni, ponte verso i complementi", descrizione: "Scheda riassuntiva e cinque esercizi con correzione automatica.", link: "italiano/seconda/educazione-linguistica/preposizioni-e-complementi.html", data: "2026-10-30" }
        ] },
      { titolo: "La frase semplice: soggetto e predicato verbale e nominale", descrizione: "Il soggetto, anche sottinteso; predicato verbale e nominale; la frase minima.", attivita: [
          { tipo: "Esercizi", titolo: "Soggetto e predicato", descrizione: "Scheda riassuntiva e cinque esercizi con correzione automatica.", link: "italiano/seconda/educazione-linguistica/soggetto-e-predicato.html", data: "2026-10-30" }
        ] },
      { titolo: "L'attributo e l'apposizione", descrizione: "Gli aggettivi e i nomi che accompagnano un altro nome; attributo o parte nominale.", attivita: [
          { tipo: "Esercizi", titolo: "Attributo e apposizione", descrizione: "Scheda riassuntiva e cinque esercizi con correzione automatica.", link: "italiano/seconda/educazione-linguistica/attributo-e-apposizione.html", data: "2026-10-30" }
        ] },
      { titolo: "Il complemento oggetto e i complementi predicativi", descrizione: "Il complemento diretto, dalla frase attiva alla passiva; predicativi del soggetto e dell'oggetto.", attivita: [
          { tipo: "Esercizi", titolo: "Complemento oggetto e predicativi", descrizione: "Scheda riassuntiva e cinque esercizi con correzione automatica.", link: "italiano/seconda/educazione-linguistica/complemento-oggetto-e-predicativi.html", data: "2026-10-30" }
        ] },
      { titolo: "Gli altri complementi", descrizione: "Specificazione, termine, agente, causa, fine, mezzo, modo, compagnia, materia, argomento, luogo e tempo.", attivita: [
          { tipo: "Esercizi", titolo: "Gli altri complementi", descrizione: "Scheda riassuntiva e quattro esercizi con correzione automatica, con un'analisi logica completa.", link: "italiano/seconda/educazione-linguistica/altri-complementi.html", data: "2026-10-30" }
        ] }
    ]
  },
  {
    materia: "italiano",
    classe: "seconda",
    numero: "II",
    titolo: "Storia della letteratura",
    descrizione: "Dalle origini al Cinquecento: prosa e versi. Primo e secondo quadrimestre, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      {
        titolo: "Le origini delle lingue neolatine",
        descrizione: "Dal latino ai volgari: le lingue romanze, i primi documenti e le prime opere, fino alla Scuola siciliana e al Dolce Stil Novo.",
        attivita: [
          { tipo: "Tappa 1", titolo: "Dall'Impero romano alle lingue neolatine", link: "italiano/seconda/origini-lingue-neolatine/attivita/tappa-1-dall-impero-romano-alle-lingue-neolatine.html", data: "2026-10-16" },
          { tipo: "Tappa 2", titolo: "Domande guida", link: "italiano/seconda/origini-lingue-neolatine/attivita/tappa-2-domande-guida.html", data: "2026-10-16" },
          { tipo: "Tappa 3", titolo: "Mettiti alla prova", link: "italiano/seconda/origini-lingue-neolatine/attivita/tappa-3-mettiti-alla-prova.html", data: "2026-10-16" }
        ]
      },
      {
        titolo: "Dante",
        descrizione: "Ripasso: Dante, Cavalcanti e lo Stilnovo, con il sonetto «Tanto gentile e tanto onesta pare».",
        link: "italiano/seconda/dante/stilnovo-ripasso/index.html",
        data: "2026-10-16",
        attivita: [
          { tipo: "Guida alla lezione", titolo: "Dante, Cavalcanti e lo Stilnovo: come usare le fasi (circa 60 minuti)", link: "italiano/seconda/dante/stilnovo-ripasso/index.html", data: "2026-10-16" },
          { tipo: "Fase 1", titolo: "Lo Stilnovo in dodici parole", link: "italiano/seconda/dante/stilnovo-ripasso/attivita/fase-1-lo-stilnovo-in-dodici-parole.html", data: "2026-10-16" },
          { tipo: "Fase 2", titolo: "La vita di Dante in ordine", link: "italiano/seconda/dante/stilnovo-ripasso/attivita/fase-2-la-vita-di-dante-in-ordine.html", data: "2026-10-16" },
          { tipo: "Fase 3", titolo: "Poeti, opere e idee", link: "italiano/seconda/dante/stilnovo-ripasso/attivita/fase-3-poeti-opere-e-idee.html", data: "2026-10-16" },
          { tipo: "Fase 4", titolo: "Le parole di «Tanto gentile»", link: "italiano/seconda/dante/stilnovo-ripasso/attivita/fase-4-le-parole-del-sonetto.html", data: "2026-10-16" },
          { tipo: "Fase 5", titolo: "Dentro il sonetto", link: "italiano/seconda/dante/stilnovo-ripasso/attivita/fase-5-dentro-il-sonetto.html", data: "2026-10-16" },
          { tipo: "Fase 6", titolo: "Il cruciverba dello Stilnovo", link: "italiano/seconda/dante/stilnovo-ripasso/attivita/fase-6-cruciverba.html", data: "2026-10-16" },
          { tipo: "Fase 7", titolo: "Vero o falso?", link: "italiano/seconda/dante/stilnovo-ripasso/attivita/fase-7-vero-o-falso.html", data: "2026-10-16" },
          { tipo: "Fase 8", titolo: "Rischiatutto stilnovista", link: "italiano/seconda/dante/stilnovo-ripasso/attivita/fase-8-rischiatutto-stilnovista.html", data: "2026-10-16" }
        ]
      },
      { titolo: "Petrarca", descrizione: "La vita tra Avignone e Arquà, Laura, il Canzoniere e il sonetto «Solo et pensoso».", attivita: [
          { tipo: "Lezione", titolo: "Francesco Petrarca", descrizione: "Scheda sull'autore e cinque esercizi con correzione automatica.", link: "italiano/seconda/petrarca/petrarca.html", data: "2026-10-30" }
        ] },
      { titolo: "Boccaccio", descrizione: "Il Decameron: la cornice della peste, i temi e tre novelle famose.", attivita: [
          { tipo: "Lezione", titolo: "Giovanni Boccaccio e il Decameron", descrizione: "Scheda sull'autore e cinque esercizi con correzione automatica.", link: "italiano/seconda/boccaccio/boccaccio.html", data: "2026-10-30" }
        ] },
      { titolo: "Ariosto", descrizione: "La corte di Ferrara e l'Orlando furioso: la follia di Orlando, Astolfo sulla Luna, ottave e intreccio.", attivita: [
          { tipo: "Lezione", titolo: "Ludovico Ariosto e l'Orlando furioso", descrizione: "Scheda sull'autore e cinque esercizi con correzione automatica.", link: "italiano/seconda/ariosto/ariosto.html", data: "2026-10-30" }
        ] },
      {
        titolo: "Approfondimento: Copernico e Colombo nelle Operette morali",
        descrizione: "Leopardi racconta il Cinquecento: il viaggio di Colombo verso l'ignoto e la Terra di Copernico che lascia il centro dell'universo, con la Storia del genere umano come cornice.",
        link: "italiano/seconda/leopardi-operette-morali/leggere-le-operette-morali.html",
        data: "2026-10-21",
        attivita: [
          { tipo: "Lettura", titolo: "Leggere le Operette morali: Storia del genere umano, Colombo, Copernico", descrizione: "Testo con parole spiegate, parafrasi in parole semplici, glossario e domande.", link: "italiano/seconda/leopardi-operette-morali/leggere-le-operette-morali.html", data: "2026-10-21" }
        ]
      }
    ]
  },
  {
    materia: "italiano",
    classe: "seconda",
    numero: "III",
    titolo: "Antologia",
    descrizione: "Lettura e comprensione: le caratteristiche di alcuni generi letterari, a scelta del docente. Primo e secondo quadrimestre, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "I generi letterari (a scelta del docente)", attivita: [] },
      {
        titolo: "Dal testo al film: L'inventore di sogni",
        descrizione: "Episodi del libro di Ian McEwan trasformati in sceneggiatura: piani, angolazioni, movimenti di macchina e montaggio.",
        data: "2026-10-20",
        attivita: [
          { tipo: "Lezione", titolo: "Inquadrature: campi e piani", descrizione: "Video su campi e piani, la scala delle inquadrature con esempi, quiz su spezzoni del cinema in bianco e nero e collegamento con il fumetto.", link: "italiano/seconda/dal-testo-al-film/inquadrature/index.html", data: "2026-10-27" },
          { tipo: "Sceneggiatura", titolo: "Peter e le decorazioni di Natale: dal racconto al découpage", link: "italiano/seconda/dal-testo-al-film/peter-decorazioni-di-natale.html", data: "2026-10-20" },
          { tipo: "Guida alla lezione", titolo: "«Le bambole»: i verbi del racconto – tutte le attività (circa 90 minuti)", descrizione: "Ripasso dei verbi, poi il racconto frase per frase: l'imperfetto, il passaggio al passato remoto e la suspense di «Accadde».", link: "italiano/seconda/dal-testo-al-film/le-bambole/index.html", data: "2026-11-10" },
          { tipo: "Fase 1", titolo: "Ripasso: i verbi", link: "italiano/seconda/dal-testo-al-film/le-bambole/attivita/fase-01-ripasso-verbi.html", data: "2026-11-10" },
          { tipo: "Fase 2", titolo: "I verbi nel racconto", link: "italiano/seconda/dal-testo-al-film/le-bambole/attivita/fase-02-verbi-nel-racconto.html", data: "2026-11-10" },
          { tipo: "Fase 3", titolo: "Tappa 1: l'inizio del racconto (pp. 23-24)", link: "italiano/seconda/dal-testo-al-film/le-bambole/attivita/fase-03-tappa-1-inizio.html", data: "2026-11-10" },
          { tipo: "Fase 4", titolo: "Tappa 2: le bambole e la Cattiva (p. 26)", link: "italiano/seconda/dal-testo-al-film/le-bambole/attivita/fase-04-tappa-2-bambole.html", data: "2026-11-10" },
          { tipo: "Fase 5", titolo: "L'imperfetto: a che cosa serve?", link: "italiano/seconda/dal-testo-al-film/le-bambole/attivita/fase-05-imperfetto.html", data: "2026-11-10" },
          { tipo: "Fase 6", titolo: "Tappa 3: la lite (p. 27)", link: "italiano/seconda/dal-testo-al-film/le-bambole/attivita/fase-06-tappa-3-lite.html", data: "2026-11-10" },
          { tipo: "Fase 7", titolo: "Dove si abbandona l'imperfetto?", link: "italiano/seconda/dal-testo-al-film/le-bambole/attivita/fase-07-cambio.html", data: "2026-11-10" },
          { tipo: "Fase 8", titolo: "Tappa 4: «Accadde» (p. 30)", link: "italiano/seconda/dal-testo-al-film/le-bambole/attivita/fase-08-tappa-4-accadde.html", data: "2026-11-10" },
          { tipo: "Fase 9", titolo: "Accadde… che cosa?", link: "italiano/seconda/dal-testo-al-film/le-bambole/attivita/fase-09-suspense.html", data: "2026-11-10" },
          { tipo: "Fase 10", titolo: "Per ricordare: i tempi del racconto", link: "italiano/seconda/dal-testo-al-film/le-bambole/attivita/fase-10-per-ricordare.html", data: "2026-11-10" }
        ]
      }
    ]
  },
  {
    materia: "italiano",
    classe: "seconda",
    numero: "IV",
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
    numero: "V",
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
  },

  /* ---------------- ITALIANO · TERZA ---------------- */
  {
    materia: "italiano",
    classe: "terza",
    numero: "I",
    titolo: "Educazione linguistica",
    descrizione: "Lessico, linguaggio figurato e analisi del periodo. Primo e secondo quadrimestre, in collegamento con Inglese, Francese, Spagnolo e Tedesco.",
    lezioni: [
      { titolo: "Ripasso: analisi grammaticale e logica", descrizione: "Le parti del discorso e gli elementi della frase semplice, prima dell'analisi del periodo.", attivita: [
          { tipo: "Esercizi", titolo: "Ripasso di analisi grammaticale e logica", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/educazione-linguistica/ripasso-analisi.html", data: "2026-10-30" }
        ] },
      { titolo: "L'uso corretto del lessico", descrizione: "Sinonimi, contrari, iperonimi, polisemia; il registro; gli errori più frequenti.", attivita: [
          { tipo: "Esercizi", titolo: "Le parole giuste", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/educazione-linguistica/uso-del-lessico.html", data: "2026-10-30" }
        ] },
      { titolo: "Il linguaggio figurato", descrizione: "Similitudine, metafora, personificazione e le altre figure retoriche; i modi di dire.", attivita: [
          { tipo: "Esercizi", titolo: "Il linguaggio figurato", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/educazione-linguistica/linguaggio-figurato.html", data: "2026-10-30" }
        ] },
      { titolo: "I connettivi testuali e le congiunzioni", descrizione: "Le parole che collegano le idee: aggiuntivi, avversativi, causali, conclusivi, temporali e altri.", attivita: [
          { tipo: "Esercizi", titolo: "I connettivi testuali", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/educazione-linguistica/connettivi.html", data: "2026-10-30" }
        ] },
      { titolo: "La frase complessa e la proposizione principale", descrizione: "Il periodo, come contare le proposizioni, i tipi di principale.", attivita: [
          { tipo: "Esercizi", titolo: "Il periodo e la proposizione principale", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/educazione-linguistica/frase-complessa.html", data: "2026-10-30" }
        ] },
      { titolo: "La coordinazione e le proposizioni coordinate", descrizione: "Asindeto e polisindeto; coordinate copulative, disgiuntive, avversative, dichiarative, conclusive, correlative.", attivita: [
          { tipo: "Esercizi", titolo: "La coordinazione", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/educazione-linguistica/coordinate.html", data: "2026-10-30" }
        ] },
      { titolo: "La subordinazione e le proposizioni subordinate", descrizione: "Esplicite e implicite; completive, relative e circostanziali.", attivita: [
          { tipo: "Esercizi", titolo: "La subordinazione", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/educazione-linguistica/subordinate.html", data: "2026-10-30" }
        ] },
      { titolo: "I gradi di subordinazione", descrizione: "Subordinate di 1°, 2° e 3° grado e lo schema ad albero.", attivita: [
          { tipo: "Esercizi", titolo: "I gradi di subordinazione", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/educazione-linguistica/gradi-subordinazione.html", data: "2026-10-30" }
        ] },
      { titolo: "La riflessione metalinguistica", descrizione: "Le varietà dell'italiano; prestiti, calchi e neologismi; lingua e dialetto.", attivita: [
          { tipo: "Esercizi", titolo: "La lingua che parla di sé", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/educazione-linguistica/riflessione-metalinguistica.html", data: "2026-10-30" }
        ] }
    ]
  },
  {
    materia: "italiano",
    classe: "terza",
    numero: "II",
    titolo: "Storia della letteratura",
    descrizione: "Dall'Ottocento ai giorni nostri. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica, Arte e Immagine, Musica, Geografia, Religione e Tecnologia.",
    lezioni: [
      {
        titolo: "Ugo Foscolo",
        descrizione: "Ripasso: vita, opere e idee, con i sonetti «A Zacinto» e «Alla sera».",
        link: "italiano/terza/foscolo/foscolo-ripasso/index.html",
        data: "2026-10-16",
        attivita: [
          { tipo: "Guida alla lezione", titolo: "Ugo Foscolo: come usare le fasi (circa 60 minuti)", link: "italiano/terza/foscolo/foscolo-ripasso/index.html", data: "2026-10-16" },
          { tipo: "Fase 1", titolo: "Foscolo in dodici parole", link: "italiano/terza/foscolo/foscolo-ripasso/attivita/fase-1-foscolo-in-dodici-parole.html", data: "2026-10-16" },
          { tipo: "Fase 2", titolo: "La vita di Foscolo in ordine", link: "italiano/terza/foscolo/foscolo-ripasso/attivita/fase-2-la-vita-di-foscolo-in-ordine.html", data: "2026-10-16" },
          { tipo: "Fase 3", titolo: "Opere, persone e luoghi", link: "italiano/terza/foscolo/foscolo-ripasso/attivita/fase-3-opere-persone-e-luoghi.html", data: "2026-10-16" },
          { tipo: "Fase 4", titolo: "Dentro i sonetti: «A Zacinto» e «Alla sera»", link: "italiano/terza/foscolo/foscolo-ripasso/attivita/fase-4-dentro-i-sonetti.html", data: "2026-10-16" },
          { tipo: "Fase 5", titolo: "Il cruciverba di Foscolo", link: "italiano/terza/foscolo/foscolo-ripasso/attivita/fase-5-cruciverba.html", data: "2026-10-16" },
          { tipo: "Fase 6", titolo: "Vero o falso?", link: "italiano/terza/foscolo/foscolo-ripasso/attivita/fase-6-vero-o-falso.html", data: "2026-10-16" },
          { tipo: "Fase 7", titolo: "Rischiatutto foscoliano", link: "italiano/terza/foscolo/foscolo-ripasso/attivita/fase-7-rischiatutto-foscoliano.html", data: "2026-10-16" }
        ]
      },
      { titolo: "La poesia lirica: Leopardi", descrizione: "Recanati, il pessimismo, L'infinito e A Silvia; ripasso a fasi.", link: "italiano/terza/leopardi/leopardi-ripasso/index.html", data: "2026-11-04", attivita: [
          { tipo: "Lezione", titolo: "Giacomo Leopardi", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/leopardi/leopardi.html", data: "2026-10-30" },
          { tipo: "Guida alla lezione", titolo: "Giacomo Leopardi: tutte le attività (circa 70 minuti)", link: "italiano/terza/leopardi/leopardi-ripasso/index.html", data: "2026-11-04" },
          { tipo: "Fase 1", titolo: "Leopardi in dodici parole", link: "italiano/terza/leopardi/leopardi-ripasso/attivita/fase-1-leopardi-in-dodici-parole.html", data: "2026-11-04" },
          { tipo: "Fase 2", titolo: "La vita di Leopardi in ordine", link: "italiano/terza/leopardi/leopardi-ripasso/attivita/fase-2-la-vita-di-leopardi-in-ordine.html", data: "2026-11-04" },
          { tipo: "Fase 3", titolo: "Opere, persone e luoghi", link: "italiano/terza/leopardi/leopardi-ripasso/attivita/fase-3-opere-persone-e-luoghi.html", data: "2026-11-04" },
          { tipo: "Fase 4", titolo: "Dentro «A Silvia»", link: "italiano/terza/leopardi/leopardi-ripasso/attivita/fase-4-dentro-a-silvia.html", data: "2026-11-04" },
          { tipo: "Fase 5", titolo: "«L'infinito» da completare", link: "italiano/terza/leopardi/leopardi-ripasso/attivita/fase-5-l-infinito.html", data: "2026-11-04" },
          { tipo: "Fase 6", titolo: "Il cruciverba di Leopardi", link: "italiano/terza/leopardi/leopardi-ripasso/attivita/fase-6-cruciverba.html", data: "2026-11-04" },
          { tipo: "Fase 7", titolo: "Vero o falso?", link: "italiano/terza/leopardi/leopardi-ripasso/attivita/fase-7-vero-o-falso.html", data: "2026-11-04" },
          { tipo: "Fase 8", titolo: "Rischiatutto leopardiano", link: "italiano/terza/leopardi/leopardi-ripasso/attivita/fase-8-rischiatutto-leopardiano.html", data: "2026-11-04" }
        ] },
      { titolo: "La poesia patriottica", descrizione: "Il Risorgimento in versi: Mameli, Manzoni, Mercantini e il coro di Verdi.", attivita: [
          { tipo: "Lezione", titolo: "La poesia patriottica", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/poesia-patriottica/poesia-patriottica.html", data: "2026-10-30" }
        ] },
      { titolo: "Il romanzo storico: Manzoni", descrizione: "La vita, le tre versioni, la trama, i personaggi e i temi dei Promessi sposi.", attivita: [
          { tipo: "Lezione", titolo: "Alessandro Manzoni e i Promessi sposi", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/manzoni/manzoni.html", data: "2026-10-30" }
        ] },
      { titolo: "La letteratura contemporanea", descrizione: "Da Pascoli e D'Annunzio a Ungaretti, Montale, Pirandello, Primo Levi e Calvino.", attivita: [
          { tipo: "Lezione", titolo: "Il Novecento e oltre", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/letteratura-contemporanea/letteratura-contemporanea.html", data: "2026-10-30" }
        ] }
    ]
  },
  {
    materia: "italiano",
    classe: "terza",
    numero: "III",
    titolo: "Antologia",
    descrizione: "Lettura e comprensione: i generi della narrativa e il teatro. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica, Arte e Immagine, Musica, Geografia, Religione e Tecnologia.",
    lezioni: [
      { titolo: "Il racconto autobiografico", descrizione: "Il patto autobiografico, le forme della scrittura di sé, opere da conoscere.", attivita: [
          { tipo: "Lezione", titolo: "Il racconto autobiografico", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/antologia/racconto-autobiografico.html", data: "2026-10-30" }
        ] },
      { titolo: "Il romanzo di formazione", descrizione: "Gli ingredienti del Bildungsroman, da Pinocchio al Giovane Holden.", attivita: [
          { tipo: "Lezione", titolo: "Il romanzo di formazione", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/antologia/romanzo-di-formazione.html", data: "2026-10-30" }
        ] },
      { titolo: "Il romanzo psicologico-sociale", descrizione: "Il romanzo sociale (Dickens, Verga) e quello psicologico (Svevo, Pirandello, Woolf).", attivita: [
          { tipo: "Lezione", titolo: "Il romanzo psicologico e sociale", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/antologia/romanzo-psicologico-sociale.html", data: "2026-10-30" }
        ] },
      { titolo: "Il romanzo di fantascienza", descrizione: "Elementi tipici, utopia e distopia, da Verne ad Asimov e Orwell.", attivita: [
          { tipo: "Lezione", titolo: "Il romanzo di fantascienza", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/antologia/romanzo-di-fantascienza.html", data: "2026-10-30" }
        ] },
      { titolo: "Il teatro", descrizione: "Battute e didascalie, tragedia e commedia, da Shakespeare a Eduardo.", attivita: [
          { tipo: "Lezione", titolo: "Il teatro", descrizione: "Scheda riassuntiva ed esercizi con correzione automatica.", link: "italiano/terza/antologia/teatro.html", data: "2026-10-30" }
        ] }
    ]
  },
  {
    materia: "italiano",
    classe: "terza",
    numero: "IV",
    titolo: "Laboratorio di scrittura",
    descrizione: "Produzione di varie tipologie testuali, parafrasi e analisi del testo. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica, Geografia, Arte e Immagine e Tecnologia.",
    lezioni: [
      { titolo: "La sintesi", attivita: [] },
      { titolo: "Il testo narrativo", attivita: [] },
      { titolo: "Il testo argomentativo", attivita: [] },
      { titolo: "Il testo informativo-espositivo", attivita: [] },
      { titolo: "Il testo poetico", attivita: [] },
      { titolo: "La parafrasi", attivita: [] },
      { titolo: "L'analisi del testo", attivita: [] },
      {
        titolo: "Approfondimento lessico",
        descrizione: "Il mazzo delle parole: le 366 parole del Piccolo Dizionario (immaginario) delle ragazze e dei ragazzi e le ruote del Thesaurus.",
        link: "italiano/terza/laboratorio-di-scrittura/approfondimento-lessico/index.html",
        data: "2026-10-21",
        attivita: [
          { tipo: "Approfondimento", titolo: "Il mazzo delle parole: card, nuvola, campi semantici e Thesaurus", link: "italiano/terza/laboratorio-di-scrittura/approfondimento-lessico/index.html", data: "2026-10-21" }
        ]
      }
    ]
  },
  {
    materia: "italiano",
    classe: "terza",
    numero: "V",
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

  /* STORIA: la scansione per anni e per moduli è quella della programmazione di dipartimento.
     Il campo «indice» (solo per l'insegnante, non compare nel sito) dice dove si trova lo stesso
     argomento nell'organizzazione di Storia facile 1-3 (Erickson: modulo e capitolo) e del
     Tablet degli argomenti di Storia (pagina): serve a costruire la lezione su quel modello.
     Le corrispondenze sono per titolo di capitolo. Le lezioni senza «dipartimento» sono extra. */

  /* ---------------- STORIA · PRIMA ---------------- */
  {
    materia: "storia",
    classe: "prima",
    titolo: "I laboratori dello storico",
    link: "storia/prima/officine/index.html",
    descrizione: "Prima di cominciare: brevi laboratori di metodo. Ogni laboratorio prepara una parte delle lezioni e ne ha l'icona e il colore.",
    lezioni: [
      { titolo: "Laboratorio 0 · Chi siamo", officina: 0, parte: "officina", descrizione: "Ci presentiamo con oggetti e ricordi: ognuno ha una storia.", link: "storia/prima/officine/officina-00-chi-siamo.html", data: "2026-10-30", attivita: [] },
      { titolo: "Laboratorio 1 · Che cos'è la storia", officina: 1, parte: "attivita", descrizione: "La storia ricostruisce il passato degli uomini con domande e prove.", attivita: [] },
      { titolo: "Laboratorio 2 · Storia e preistoria", officina: 2, parte: "att-tempo", descrizione: "La storia comincia con la scrittura; prima c'è la preistoria.", attivita: [] },
      { titolo: "Laboratorio 3 · Oralità e scrittura", officina: 3, parte: "att-fonti", descrizione: "Racconti tramandati a voce e testi scritti: che cosa si conserva, che cosa cambia.", attivita: [] },
      { titolo: "Laboratorio 4 · Le tracce del passato", officina: 4, parte: "att-fonti", descrizione: "Fonti scritte, materiali, iconografiche e orali: il museo di classe delle fonti.", attivita: [] },
      { titolo: "Laboratorio 5 · Il tempo della storia", officina: 5, parte: "cosa-quando", descrizione: "Anni, secoli, a.C. e d.C., periodi; la linea del tempo.", attivita: [] },
      { titolo: "Laboratorio 6 · Lo spazio della storia", officina: 6, parte: "cosa-dove", descrizione: "Carta geografica e carta storica: i confini cambiano.", attivita: [] },
      { titolo: "Laboratorio 7 · Le parole della storia", officina: 7, parte: "quali-parole", descrizione: "Parole nuove, parole che cambiano significato; il glossario di classe.", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "I",
    titolo: "L'Italia dai Bizantini ai Longobardi",
    descrizione: "Primo quadrimestre, in collegamento con Geografia.",
    lezioni: [
      { titolo: "Laboratorio 8 · Come si legge una lezione", officina: 8, parte: "leggiamo", descrizione: "Le prime parti della lezione: Cosa imparerai, Leggiamo, Quali parole?, Ripassiamo.", attivita: [] },
      {
        titolo: "Come si studia la storia",
        descrizione: "Lezione di metodo, prima di cominciare: le cinque attività del mestiere dello storico e le parti di ogni lezione (Prima/Dopo, Idea principale, Testo, Perché?, Concetti fondamentali, Come?, Parole chiave, Studiamo le fonti, Ripassiamo).",
        link: "storia/prima/metodo/come-si-studia-la-storia.html",
        data: "2026-10-28",
        attivita: []
      },
      { titolo: "La fine dell'Impero romano d'Occidente", descrizione: "Lezione extra: il punto di partenza del Medioevo, ripreso da Storia facile e dal Tablet; non è nella programmazione di dipartimento.", indice: "Storia facile 1, M1 capp. 1–2 · Tablet pp. 11, 14, 20", attivita: [] },
      { titolo: "Un nuovo scenario europeo", dipartimento: true, indice: "Storia facile 1, M1 cap. 3 (I regni romano-barbarici) · Tablet p. 25", attivita: [] },
      { titolo: "Il monachesimo", descrizione: "Lezione extra: capitolo di Storia facile e del Tablet che non è nella programmazione di dipartimento.", indice: "Storia facile 1, M1 cap. 4 · Tablet p. 36", attivita: [] },
      { titolo: "I Longobardi", dipartimento: true, indice: "Storia facile 1, M1 cap. 5 · Tablet p. 25", attivita: [] },
      { titolo: "L'inizio del potere temporale della Chiesa", dipartimento: true, indice: "Storia facile 1, M1 cap. 5 · Tablet p. 25", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "II",
    titolo: "Carlo Magno e la nascita dell'Europa",
    descrizione: "Primo quadrimestre, in collegamento con Geografia e Religione.",
    lezioni: [
      { titolo: "La civiltà araba e l'Islam", descrizione: "Lezione extra: capitolo di Storia facile e del Tablet che non è nella programmazione di dipartimento.", indice: "Storia facile 1, M2 cap. 6 · Tablet p. 31", attivita: [] },
      { titolo: "L'espansione dei Franchi", dipartimento: true, indice: "Storia facile 1, M2 cap. 7 · Tablet p. 41", attivita: [] },
      { titolo: "Carlo Magno e il Sacro Romano Impero", dipartimento: true, indice: "Storia facile 1, M2 cap. 7 · Tablet p. 41", attivita: [] },
      { titolo: "L'organizzazione dell'Impero", dipartimento: true, indice: "Storia facile 1, M2 cap. 7 · Tablet p. 41", attivita: [] },
      { titolo: "La rinascita dell'economia e della cultura", dipartimento: true, indice: "Storia facile 1, M2 cap. 7 · Tablet p. 41", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "III",
    titolo: "Nuove invasioni e nuovi regni: l'Europa dopo l'impero carolingio",
    descrizione: "Primo quadrimestre, in collegamento con Geografia e Italiano (epica cavalleresca).",
    lezioni: [
      { titolo: "Laboratorio 9 · Le persone della storia", officina: 9, parte: "chi-incontrerai", descrizione: "Chi sono i protagonisti e come si presentano.", attivita: [] },
      { titolo: "Laboratorio 10 · Causa, evento, effetto", officina: 10, parte: "perche", descrizione: "Perché le cose succedono e che cosa provocano.", attivita: [] },
      { titolo: "La divisione dell'impero dopo Carlo Magno", dipartimento: true, indice: "Storia facile 1, M2 cap. 8 · Tablet p. 47", attivita: [] },
      { titolo: "Le nuove invasioni", dipartimento: true, indice: "Storia facile 1, M2 cap. 8 · Tablet p. 47", attivita: [] },
      { titolo: "L'epoca d'oro dell'impero romano d'Oriente", dipartimento: true, indice: "Storia facile 1, M1 cap. 5 · Tablet p. 25", attivita: [] },
      { titolo: "Signori e castelli: l'economia curtense", dipartimento: true, indice: "Storia facile 1, M3 cap. 9 (La società feudale) · Tablet p. 47", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "IV",
    titolo: "La rinascita dell'anno Mille. Papi e imperatori",
    descrizione: "Primo quadrimestre, in collegamento con Geografia, Scienze e Tecnologia.",
    lezioni: [
      { titolo: "Il rinnovamento dell'agricoltura e la crescita demografica", dipartimento: true, indice: "Storia facile 1, M3 cap. 10 · Tablet p. 53", attivita: [] },
      { titolo: "Lo sviluppo delle città e del commercio", dipartimento: true, indice: "Storia facile 1, M3 cap. 10 · Tablet p. 53", attivita: [] },
      { titolo: "Nascono le università", dipartimento: true, indice: "Storia facile 1, M3 cap. 10 · Tablet p. 53", attivita: [] },
      { titolo: "La crisi della Chiesa di Roma e i tentativi di riforma", dipartimento: true, indice: "Storia facile 1, M3 cap. 11 · Tablet p. 60", attivita: [] },
      { titolo: "La lotta per le investiture", dipartimento: true, indice: "Storia facile 1, M3 cap. 11 · Tablet p. 60", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "V",
    titolo: "Le crociate e la lotta alle eresie",
    descrizione: "Primo quadrimestre, in collegamento con Geografia e Scienze.",
    lezioni: [
      { titolo: "Laboratorio 11 · Collegare ciò che so", officina: 11, parte: "ti-ricordi", descrizione: "Partire da quello che si è già studiato.", attivita: [] },
      { titolo: "Laboratorio 12 · Guardare una fonte", officina: 12, parte: "fonti", descrizione: "Osservare un'immagine come uno storico.", attivita: [] },
      { titolo: "La crisi dell'impero arabo e la minaccia dei Turchi", dipartimento: true, indice: "Storia facile 1, M3 cap. 13 · Tablet p. 70", attivita: [] },
      { titolo: "Lo scisma d'Oriente", dipartimento: true, indice: "Storia facile 1, M3 cap. 11 · Tablet p. 60", attivita: [] },
      { titolo: "Le crociate per la Terra Santa", dipartimento: true, indice: "Storia facile 1, M3 cap. 13 · Tablet p. 70", attivita: [] },
      { titolo: "Innocenzo III e la lotta alle eresie", dipartimento: true, indice: "Tablet p. 76 (Storia facile non ha un capitolo proprio)", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "VI",
    titolo: "Dai Comuni a Federico II",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Tecnologia e Arte.",
    lezioni: [
      { titolo: "La nascita dei Comuni", dipartimento: true, indice: "Storia facile 1, M3 cap. 12 · Tablet p. 65", attivita: [] },
      { titolo: "Le lotte tra Comuni e imperatore", dipartimento: true, indice: "Storia facile 1, M3 cap. 12 · Tablet p. 65", attivita: [] },
      { titolo: "L'ascesa della borghesia", dipartimento: true, indice: "Storia facile 1, M3 cap. 12 · Tablet p. 65", attivita: [] },
      { titolo: "Il progetto imperiale di Federico II", dipartimento: true, indice: "Storia facile 1, M3 cap. 14 · Tablet p. 81", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "VII",
    titolo: "Le monarchie nazionali in Europa. La crisi del Trecento",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Scienze, Inglese e Francese.",
    lezioni: [
      { titolo: "Laboratorio 13 · Le idee chiave", officina: 13, parte: "quali-idee", descrizione: "Riconoscere le idee più importanti di una lezione.", attivita: [] },
      { titolo: "Laboratorio 14 · Fare uno schema", officina: 14, parte: "come", descrizione: "Mettere in ordine le informazioni in colonne o in una mappa.", attivita: [] },
      { titolo: "Laboratorio 15 · Fatto o interpretazione?", officina: 15, parte: "fonti", descrizione: "Distinguere ciò che si può verificare dai giudizi.", attivita: [] },
      { titolo: "La nascita delle monarchie nazionali: l'Inghilterra", dipartimento: true, indice: "Storia facile 1, M4 cap. 15 · Tablet p. 96", attivita: [] },
      { titolo: "La monarchia nazionale francese", dipartimento: true, indice: "Storia facile 1, M4 cap. 15 · Tablet p. 96", attivita: [] },
      { titolo: "La guerra dei Cent'anni", dipartimento: true, indice: "Storia facile 1, M4 cap. 15 · Tablet p. 96", attivita: [] },
      { titolo: "La peste e la crisi agricola", dipartimento: true, indice: "Storia facile 1, M4 cap. 16 · Tablet p. 86", attivita: [] },
      { titolo: "Enrico VII e il declino della Chiesa", dipartimento: true, indice: "Storia facile 1, M4 cap. 16 · Tablet p. 86", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "VIII",
    titolo: "L'Italia delle Signorie. Umanesimo e Rinascimento",
    descrizione: "Secondo quadrimestre, in collegamento con Letteratura, Arte e Scienze.",
    lezioni: [
      { titolo: "Dai Comuni agli Stati regionali", dipartimento: true, indice: "Storia facile 1, M4 cap. 17 · Tablet p. 91", attivita: [] },
      { titolo: "L'Umanesimo: l'uomo al centro del mondo", dipartimento: true, indice: "Storia facile 1, M4 cap. 18 · Tablet p. 102", attivita: [] },
      { titolo: "Il Rinascimento: principi e artisti, letterati e scienziati", dipartimento: true, indice: "Storia facile 2, M1 cap. 1 · Tablet p. 102", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "IX",
    titolo: "Le esplorazioni e la scoperta dell'America. Riforma e Controriforma",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Religione, Arte, Tecnologia e Scienze.",
    lezioni: [
      { titolo: "Laboratorio 16 · Prevedere e collegare", officina: 16, parte: "e-dopo", descrizione: "Che cosa verrà dopo? Collegare una lezione alla successiva.", attivita: [] },
      { titolo: "Laboratorio 17 · Discutere da storici", officina: 17, parte: "ripassiamo", descrizione: "Sostenere un'idea con le prove: il mini-dibattito.", attivita: [] },
      { titolo: "Le rotte per le Indie", dipartimento: true, indice: "Storia facile 2, M1 cap. 2 · Tablet p. 112", attivita: [] },
      { titolo: "La scoperta del nuovo mondo", dipartimento: true, indice: "Storia facile 2, M1 cap. 2 · Tablet p. 112", attivita: [] },
      { titolo: "Le civiltà precolombiane e le esplorazioni", dipartimento: true, indice: "Storia facile 2, M1 cap. 2 · Tablet p. 112", attivita: [] },
      { titolo: "La corruzione della Chiesa e la Riforma di Lutero", dipartimento: true, indice: "Storia facile 2, M1 cap. 4 · Tablet p. 123", attivita: [] },
      { titolo: "La Controriforma e il Concilio di Trento", dipartimento: true, indice: "Storia facile 2, M1 cap. 4 · Tablet p. 123", attivita: [] },
      { titolo: "I nuovi ordini religiosi", dipartimento: true, indice: "Storia facile 2, M1 cap. 4 · Tablet p. 123", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "X",
    titolo: "Guerre in Italia e in Europa. La rivoluzione scientifica",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Scienze, Letteratura, Spagnolo, Francese e Inglese.",
    lezioni: [
      { titolo: "L'Italia contesa tra Francia e Spagna", dipartimento: true, indice: "Storia facile 2, M1 cap. 3 · Tablet p. 118", attivita: [] },
      { titolo: "Carlo V e Francesco I", dipartimento: true, indice: "Storia facile 2, M1 capp. 3 e 5 · Tablet p. 118", attivita: [] },
      { titolo: "Filippo II e l'età elisabettiana", dipartimento: true, indice: "Storia facile 2, M1 cap. 5 · Tablet p. 129", attivita: [] },
      { titolo: "Le guerre di religione in Francia", dipartimento: true, indice: "Storia facile 2, M1 cap. 5 · Tablet p. 134", attivita: [] },
      { titolo: "La guerra dei Trent'anni", dipartimento: true, indice: "Storia facile 2, M2 cap. 7 · Tablet p. 139", attivita: [] },
      { titolo: "La rivoluzione scientifica e i suoi protagonisti", dipartimento: true, indice: "Storia facile 2, M2 cap. 6 · Tablet p. 154", attivita: [] }
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
      {
        titolo: "La scoperta dei nuovi mondi",
        dipartimento: true,
        descrizione: "Portoghesi e spagnoli negli oceani: Colombo, Vasco da Gama, Magellano, lo scambio colombiano. Dentro la fonte: il diario di bordo di Colombo e le tre «sirene» (9 gennaio 1493).",
        indice: "Storia facile 2, M1 cap. 2 · Tablet p. 112",
        link: "storia/seconda/flussi-migratori/scoperta-nuovi-mondi.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "L'età dei conquistadores",
        dipartimento: true,
        descrizione: "Cortés e Pizarro abbattono gli imperi azteco e inca; encomienda, epidemie, Las Casas. Dentro la fonte: le lettere di Cortés a Carlo V (Europeana).",
        indice: "Storia facile 2, M1 cap. 2 · Tablet p. 112",
        link: "storia/seconda/flussi-migratori/conquistadores.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "Le civiltà precolombiane",
        dipartimento: true,
        descrizione: "Dai primi abitanti venuti dall'Asia a Maya, Aztechi e Inca. Dentro la fonte: il Codice Selden (Europeana).",
        indice: "Storia facile 2, M1 cap. 2 · Tablet p. 112",
        link: "storia/seconda/flussi-migratori/civilta-precolombiane.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "La tratta degli schiavi",
        dipartimento: true,
        descrizione: "La più grande migrazione forzata della storia: commercio triangolare, piantagioni, resistenza e abolizione. Dentro la fonte su Europeana.",
        indice: "Storia facile 2, M3 cap. 9 · Tablet p. 112",
        link: "storia/seconda/flussi-migratori/tratta-schiavi.html",
        data: "2026-10-29",
        attivita: []
      }
    ]
  },
  {
    materia: "storia",
    classe: "seconda",
    numero: "II",
    titolo: "Sistemi di produzione, organizzazione sociale e vita quotidiana",
    descrizione: "Primo e secondo quadrimestre.",
    lezioni: [
      {
        titolo: "La rivoluzione agricola: nuove risorse, ripresa dei commerci, la società comunale",
        dipartimento: true,
        descrizione: "Dopo il Mille: nuove tecniche agricole, crescita della popolazione, mercanti e città. Con carta, testo su due livelli e Dentro la fonte (Europeana).",
        indice: "Storia facile 1, M3 capp. 10 e 12 · Tablet pp. 53, 65",
        link: "storia/seconda/sistemi-produzione/rivoluzione-agricola-comuni.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "La civiltà rinascimentale",
        dipartimento: true,
        descrizione: "Umanesimo e Rinascimento: Firenze, i mecenati, la stampa. Dentro la fonte: la Bibbia di Gutenberg su Europeana.",
        indice: "Storia facile 2, M1 cap. 1 · Tablet p. 102",
        link: "storia/seconda/sistemi-produzione/civilta-rinascimentale.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "Gli imperi coloniali",
        dipartimento: true,
        descrizione: "Spagna e Portogallo nel mondo: conquiste, sfruttamento, scambio colombiano. Con planisfero e Dentro la fonte (Europeana).",
        indice: "Storia facile 2, M3 cap. 9 · Tablet p. 112",
        link: "storia/seconda/sistemi-produzione/imperi-coloniali.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "Il sistema mondiale nei secoli XVII e XVIII",
        dipartimento: true,
        descrizione: "Compagnie delle Indie, commercio triangolare, Olanda e Inghilterra. Dentro la fonte: un mercante della VOC su Europeana.",
        indice: "Storia facile 2, M2 cap. 7 · Tablet p. 154",
        link: "storia/seconda/sistemi-produzione/sistema-mondiale.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "La rivoluzione industriale: nuove risorse e sistemi di produzione",
        dipartimento: true,
        descrizione: "Macchine, vapore, carbone e fabbriche nell'Inghilterra del Settecento. Con carta, testo su due livelli e Dentro la fonte (Europeana).",
        indice: "Storia facile 2, M3 cap. 11 · Tablet p. 165",
        link: "storia/seconda/sistemi-produzione/rivoluzione-industriale.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "Città, proletariato e capitalismo",
        dipartimento: true,
        descrizione: "La società industriale: borghesia e proletariato, lavoro minorile, sindacati e socialismo. Dentro la fonte: bambini nelle miniere (Europeana).",
        indice: "Storia facile 2, M3 cap. 11 · Tablet p. 165",
        link: "storia/seconda/sistemi-produzione/citta-proletariato-capitalismo.html",
        data: "2026-10-29",
        attivita: []
      }
    ]
  },
  {
    materia: "storia",
    classe: "seconda",
    numero: "III",
    titolo: "Lo Stato e le forme di governo",
    descrizione: "Primo e secondo quadrimestre, in collegamento con Italiano ed Educazione civica.",
    lezioni: [
      {
        titolo: "I Comuni",
        dipartimento: true,
        descrizione: "XI–XIII secolo: le città si governano da sole, la Lega lombarda, guelfi e ghibellini. Dentro la fonte: il Buon Governo di Lorenzetti (Europeana).",
        indice: "Storia facile 1, M3 cap. 12 · Tablet p. 65",
        link: "storia/seconda/stato-governo/comuni.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "Le monarchie nazionali",
        dipartimento: true,
        descrizione: "Francia, Inghilterra e Spagna: Magna Charta, guerra dei Cent'anni, Reconquista. Dentro la fonte su Europeana.",
        indice: "Storia facile 1, M4 cap. 15 · Tablet p. 96",
        link: "storia/seconda/stato-governo/monarchie-nazionali.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "Le Signorie e gli altri Stati regionali",
        dipartimento: true,
        descrizione: "Dal Comune alla Signoria, gli Stati regionali, la pace di Lodi. Dentro la fonte: il corteo dei Magi dei Medici (Europeana).",
        indice: "Storia facile 1, M4 cap. 17 · Tablet p. 91",
        link: "storia/seconda/stato-governo/signorie.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "Riforma e Controriforma",
        dipartimento: true,
        descrizione: "Lutero, Calvino, Enrico VIII e la risposta cattolica del Concilio di Trento. Dentro la fonte: le 95 tesi (Europeana).",
        indice: "Storia facile 2, M1 cap. 4 · Tablet p. 123",
        link: "storia/seconda/stato-governo/riforma-controriforma.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "L'Assolutismo",
        dipartimento: true,
        descrizione: "Luigi XIV, Versailles e il potere assoluto. Dentro la fonte: il ritratto del Re Sole (Europeana).",
        indice: "Storia facile 2, M2 cap. 7 · Tablet p. 144",
        link: "storia/seconda/stato-governo/assolutismo.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "La monarchia parlamentare inglese",
        dipartimento: true,
        descrizione: "Guerra civile, Cromwell, Gloriosa rivoluzione e Bill of Rights. Dentro la fonte su Europeana.",
        indice: "Storia facile 2, M2 cap. 7 · Tablet p. 149",
        link: "storia/seconda/stato-governo/monarchia-parlamentare.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "L'Illuminismo",
        dipartimento: true,
        descrizione: "Ragione, separazione dei poteri, tolleranza, Beccaria. Dentro la fonte: le tavole dell'Enciclopedia (Europeana).",
        indice: "Storia facile 2, M3 cap. 8 · Tablet p. 159",
        link: "storia/seconda/stato-governo/illuminismo.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "La Rivoluzione americana",
        dipartimento: true,
        descrizione: "Dalle tasse al Tea Party, la Dichiarazione d'indipendenza e la Costituzione. Con carta delle tredici colonie e Dentro la fonte (Europeana).",
        indice: "Storia facile 2, M3 cap. 10 · Tablet p. 170",
        link: "storia/seconda/stato-governo/rivoluzione-americana.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "La Rivoluzione francese",
        dipartimento: true,
        descrizione: "1789–1799: Stati generali, Bastiglia, diritti dell'uomo, Repubblica e Terrore. Dentro la fonte: la Dichiarazione dei diritti (Europeana).",
        indice: "Storia facile 2, M3 cap. 12 · Tablet p. 175",
        link: "storia/seconda/stato-governo/rivoluzione-francese.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "L'impero napoleonico",
        dipartimento: true,
        descrizione: "Napoleone dal colpo di Stato a Waterloo: Codice civile, conquiste, propaganda. Dentro la fonte su Europeana.",
        indice: "Storia facile 2, M3 cap. 13 · Tablet p. 180",
        link: "storia/seconda/stato-governo/impero-napoleonico.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "Il Congresso di Vienna e la Restaurazione",
        descrizione: "Lezione extra: capitolo di Storia facile e del Tablet che non è nella programmazione di dipartimento. Con carta, testo su due livelli e Dentro la fonte (Europeana).",
        indice: "Storia facile 2, M4 cap. 14 · Tablet p. 186",
        link: "storia/seconda/stato-governo/congresso-vienna.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "Il Risorgimento",
        dipartimento: true,
        descrizione: "Mazzini, i moderati, il 1848 e il Piemonte di Cavour. Dentro la fonte: un manifesto di Garibaldi del 1849 (Europeana).",
        indice: "Storia facile 2, M4 cap. 15 · Tablet p. 192",
        link: "storia/seconda/stato-governo/risorgimento.html",
        data: "2026-10-29",
        attivita: []
      },
      {
        titolo: "L'unità d'Italia",
        descrizione: "Lezione extra: capitolo di Storia facile e del Tablet che non è nella programmazione di dipartimento. Con carta, testo su due livelli e Dentro la fonte (Europeana).",
        indice: "Storia facile 2, M4 cap. 16 · Tablet p. 192",
        link: "storia/seconda/stato-governo/unita-italia.html",
        data: "2026-10-29",
        attivita: []
      }
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
      {
        titolo: "L'Italia dopo l'Unità",
        descrizione: "Lezione extra: non è nella programmazione di dipartimento. Destra e Sinistra storica, questione meridionale: il ponte tra il Risorgimento (seconda) e il Novecento.",
        indice: "Storia facile 3, M1 cap. 1 · Tablet p. 210",
        link: "storia/terza/ottocento-novecento/italia-dopo-unita.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "Gli imperi coloniali",
        dipartimento: true,
        descrizione: "1870–1914: colonialismo, imperialismo e nazionalismo, la spartizione dell'Africa, l'Italia ad Adua e in Libia. Con carta del mondo, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M1 cap. 2 · Tablet p. 216",
        link: "storia/terza/ottocento-novecento/imperi-coloniali.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "La seconda rivoluzione industriale",
        descrizione: "Lezione extra: non è nominata nella programmazione di dipartimento (Storia facile e Tablet la mettono alla fine della seconda). Acciaio, elettricità, chimica, petrolio: le basi dei «miracoli del progresso».",
        indice: "Storia facile 2, M4 cap. 17 · Tablet p. 200",
        link: "storia/terza/ottocento-novecento/seconda-rivoluzione-industriale.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "La Belle Époque",
        dipartimento: true,
        descrizione: "1871–1914: gli anni in cui l'Europa credeva nel futuro. Prima/Dopo, Idea principale, testo su due livelli, Perché?, Concetti fondamentali, Come?, Parole chiave, Studiamo le fonti (La Stampa) e Ripassiamo.",
        indice: "Storia facile 3, M1 cap. 3 · Tablet p. 221",
        link: "storia/terza/ottocento-novecento/belle-epoque.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "I miracoli del progresso e delle scienze",
        dipartimento: true,
        descrizione: "Vaccini, raggi X, radioattività, relatività, automobile e aeroplano: la scienza cambia la vita, ma serve anche alla guerra. Con testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M1 cap. 3 · Tablet pp. 222–224",
        link: "storia/terza/ottocento-novecento/progresso-scienze.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "La società di massa",
        dipartimento: true,
        descrizione: "Scuola, giornali, grandi magazzini, sport, sindacati, partiti e voto: milioni di persone comuni entrano nella storia. Con testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M1 cap. 3 · Tablet pp. 224–225",
        link: "storia/terza/ottocento-novecento/societa-di-massa.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "La grande emigrazione",
        descrizione: "Lezione extra: non è nella programmazione di dipartimento. Milioni di italiani verso le Americhe tra Ottocento e Novecento.",
        indice: "Storia facile 3, M1 cap. 3 · Tablet p. 227",
        link: "storia/terza/ottocento-novecento/grande-emigrazione.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "L'età giolittiana",
        descrizione: "Lezione extra: non è nella programmazione di dipartimento. L'Italia dal 1901 al 1914: industria, riforme, suffragio universale maschile, guerra di Libia.",
        indice: "Storia facile 3, M1 cap. 3 · Tablet p. 227",
        link: "storia/terza/ottocento-novecento/eta-giolittiana.html",
        data: "2026-10-28",
        attivita: []
      }
    ]
  },
  {
    materia: "storia",
    classe: "terza",
    numero: "II",
    titolo: "Guerra, rivoluzioni, totalitarismi",
    descrizione: "Primo quadrimestre, in collegamento con Geografia e Religione.",
    lezioni: [
      {
        titolo: "La prima guerra mondiale",
        dipartimento: true,
        descrizione: "1914–1918: cause e occasione, la guerra di trincea, l'Italia dalla neutralità a Vittorio Veneto, la guerra totale. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M2 capp. 4–5 · Tablet p. 232",
        link: "storia/terza/guerre-totalitarismi/prima-guerra-mondiale.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "La Rivoluzione russa e lo stalinismo",
        dipartimento: true,
        descrizione: "Dalla caduta dello zar alla Rivoluzione d'ottobre, la nascita dell'URSS, Stalin: piani quinquennali, collettivizzazione, purghe e gulag. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M3 cap. 6 · Tablet p. 240",
        link: "storia/terza/guerre-totalitarismi/rivoluzione-russa.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "Il primo dopoguerra",
        dipartimento: true,
        descrizione: "1918–1929: Versailles e la nuova carta dell'Europa, la «vittoria mutilata» e il biennio rosso, la Germania di Weimar, la crisi del 1929. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M2 cap. 5 · Tablet p. 246",
        link: "storia/terza/guerre-totalitarismi/primo-dopoguerra.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "Il fascismo in Italia",
        dipartimento: true,
        descrizione: "Squadrismo, marcia su Roma, delitto Matteotti, la dittatura e il consenso, l'impero e le leggi razziali; gli antifascisti. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M3 cap. 7 · Tablet p. 251",
        link: "storia/terza/guerre-totalitarismi/fascismo.html",
        data: "2026-10-28",
        attivita: []
      }
    ]
  },
  {
    materia: "storia",
    classe: "terza",
    numero: "III",
    titolo: "Dal nazismo alla guerra fredda",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Italiano e Religione.",
    lezioni: [
      {
        titolo: "Il nazismo",
        dipartimento: true,
        descrizione: "La Repubblica di Weimar e la crisi, Hitler al potere, lo Stato totalitario, la persecuzione degli ebrei, la strada verso la guerra. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M3 cap. 8 · Tablet p. 257",
        link: "storia/terza/nazismo-guerra-fredda/nazismo.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "La seconda guerra mondiale",
        dipartimento: true,
        descrizione: "1939–1945: guerra lampo, guerra mondiale, la svolta, l'Italia dal 1940 all'8 settembre, la Shoah, la fine e l'età atomica. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M4 capp. 9 e 11 · Tablet p. 262",
        link: "storia/terza/nazismo-guerra-fredda/seconda-guerra-mondiale.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "La Resistenza in Italia e in Europa",
        dipartimento: true,
        descrizione: "L'8 settembre, i partigiani e il CLN, le donne, la resistenza civile, le stragi, il 25 aprile; le resistenze europee. Nella programmazione di dipartimento è tra le conoscenze («Resistenza e formazione della Repubblica italiana»), non tra i moduli.",
        indice: "Storia facile 3, M4 cap. 10 · Tablet p. 262",
        link: "storia/terza/nazismo-guerra-fredda/resistenza.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "L'Europa divisa",
        dipartimento: true,
        descrizione: "La guerra fredda: cortina di ferro, NATO e Patto di Varsavia, Berlino e il muro, l'equilibrio del terrore, Ungheria e Praga, la corsa allo spazio. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M5 cap. 12 (La guerra fredda) · Tablet p. 271",
        link: "storia/terza/nazismo-guerra-fredda/europa-divisa.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "Il crollo degli imperi coloniali",
        dipartimento: true,
        descrizione: "1945–1975: l'India di Gandhi, Vietnam e Algeria, l'anno dell'Africa, Bandung e i non allineati, le difficoltà dei nuovi Stati, l'apartheid. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M5 cap. 14 · Tablet p. 283",
        link: "storia/terza/nazismo-guerra-fredda/decolonizzazione.html",
        data: "2026-10-28",
        attivita: []
      }
    ]
  },
  {
    materia: "storia",
    classe: "terza",
    numero: "IV",
    titolo: "Capire il mondo attuale",
    descrizione: "Secondo quadrimestre, in collegamento con Geografia, Scienze e Tecnologia.",
    lezioni: [
      {
        titolo: "La nascita della Repubblica italiana",
        dipartimento: true,
        descrizione: "1945–1948: il voto alle donne, il referendum del 2 giugno, l'Assemblea costituente e i principi della Costituzione, il trattato di pace e l'esodo, il 18 aprile 1948. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M5 cap. 13 · Tablet p. 278",
        link: "storia/terza/mondo-attuale/nascita-repubblica.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "La Ricostruzione e il miracolo economico",
        descrizione: "Lezione extra: capitolo di Storia facile e del Tablet che non è nella programmazione di dipartimento.",
        indice: "Storia facile 3, M5 cap. 13 · Tablet p. 278",
        link: "storia/terza/mondo-attuale/miracolo-economico.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "I problemi del Medio Oriente",
        dipartimento: true,
        descrizione: "Dalla fine dell'Impero ottomano a oggi: la nascita di Israele e la questione palestinese, petrolio e religioni, le guerre fino al 2026. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M5 cap. 16 · Tablet p. 289",
        link: "storia/terza/mondo-attuale/medio-oriente.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "Cambia la carta geografica dell'Europa",
        dipartimento: true,
        descrizione: "Dal 1989 a oggi: la caduta del muro, la fine dell'URSS, le guerre jugoslave, l'Unione europea e il suo allargamento, la guerra in Ucraina. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M5 capp. 15 e 17 · Tablet p. 271",
        link: "storia/terza/mondo-attuale/carta-europa.html",
        data: "2026-10-28",
        attivita: []
      },
      {
        titolo: "Il mondo contemporaneo",
        dipartimento: true,
        descrizione: "Globalizzazione, rivoluzione digitale, nuove potenze, terrorismo, migrazioni, clima e pandemia: le sfide del nostro tempo. Con carta, testo su due livelli e Studiamo le fonti (La Stampa).",
        indice: "Storia facile 3, M5 cap. 18 · Tablet p. 289",
        link: "storia/terza/mondo-attuale/mondo-contemporaneo.html",
        data: "2026-10-28",
        attivita: []
      }
    ]
  },
  /* ---------------- EDUCAZIONE CIVICA · PRIMA ---------------- */
  /* Dalla Progettazione di educazione civica del dipartimento (programmazione di esempio
     per i consigli di classe): un modulo per ogni UDA. Le lezioni della seconda vengono dal
     Generatore di lezioni di educazione civica; quelle di prima e terza sono in preparazione. */
  {
    materia: "educazione-civica",
    classe: "prima",
    numero: "I",
    titolo: "Le regole della nostra classe",
    descrizione: "Settembre–novembre, circa 13 ore (Italiano, Storia, Scienze motorie, Tecnologia, Musica). Accoglienza e convivenza. Fasi: conoscersi e riconoscere le differenze (Wonder, La gabbianella e il gatto); diritti e doveri nella Costituzione (artt. 2, 3, 34) e nel regolamento d'istituto; i simboli della Repubblica (bandiera, inno, 2 giugno); la sicurezza a scuola e la prova di evacuazione; il fair play nello sport. Prodotto finale: Regolamento di classe scritto insieme, illustrato e firmato da tutti; piano di evacuazione dell'aula spiegato dagli alunni. Obiettivi del dipartimento: Partecipare responsabilmente alla comunità; Conoscere Costituzione, istituzioni e diritti; Adottare comportamenti sicuri e salutari.",
    lezioni: [
      { titolo: "Conoscersi e riconoscere le differenze", dipartimento: true, attivita: [] },
      { titolo: "Diritti e doveri: la Costituzione (artt. 2, 3, 34) e il regolamento d'istituto", dipartimento: true, attivita: [] },
      { titolo: "I simboli della Repubblica: bandiera, inno, 2 giugno", dipartimento: true, attivita: [] },
      { titolo: "La sicurezza a scuola e la prova di evacuazione", dipartimento: true, attivita: [] },
      { titolo: "Il fair play nello sport", dipartimento: true, attivita: [] },
      { titolo: "Il regolamento della nostra classe", dipartimento: true, attivita: [] }
    ]
  },
  {
    materia: "educazione-civica",
    classe: "prima",
    numero: "II",
    titolo: "Il mio Comune: servizi, rifiuti e beni comuni",
    descrizione: "Dicembre–febbraio, circa 10 ore (Geografia, Scienze, Italiano, Arte e immagine). Il Comune e i suoi organi (sindaco, giunta, consiglio comunale); i servizi al cittadino; la raccolta differenziata e la riduzione degli sprechi a scuola e a casa; un bene culturale o ambientale del territorio. Prodotto finale: Guida ai servizi del Comune e alla raccolta differenziata per le famiglie nuove arrivate; scheda illustrata di un bene del territorio. Obiettivi del dipartimento: Conoscere Costituzione, istituzioni e diritti; Agire per la sostenibilità; Riconoscere e tutelare il patrimonio; Partecipare responsabilmente alla comunità.",
    lezioni: [
      { titolo: "Il Comune e i suoi organi: sindaco, giunta, consiglio comunale", dipartimento: true, attivita: [] },
      { titolo: "I servizi al cittadino", dipartimento: true, attivita: [] },
      { titolo: "La raccolta differenziata e la riduzione degli sprechi", dipartimento: true, attivita: [] },
      { titolo: "Un bene culturale o ambientale del territorio", dipartimento: true, attivita: [] },
      { titolo: "La guida per le famiglie nuove arrivate", dipartimento: true, attivita: [] }
    ]
  },
  {
    materia: "educazione-civica",
    classe: "prima",
    numero: "III",
    titolo: "Piccoli cittadini digitali",
    descrizione: "Marzo–maggio, circa 10 ore (Tecnologia, Italiano, Inglese, Matematica). Dispositivi e piattaforme della scuola; le regole della rete; le parole che feriscono e quelle che uniscono; il cyberbullismo; confrontare semplici fonti per capire se un'informazione è vera. Prodotto finale: Decalogo illustrato per usare bene la piattaforma della classe; sondaggio della classe sull'uso di Internet con i risultati in un grafico (Matematica). Obiettivi del dipartimento: Usare consapevolmente strumenti e ambienti digitali; Ricercare e valutare informazioni digitali; Comunicare e condividere responsabilmente; Partecipare responsabilmente alla comunità.",
    lezioni: [
      { titolo: "Dispositivi e piattaforme della scuola", dipartimento: true, attivita: [] },
      { titolo: "Le regole della rete", dipartimento: true, attivita: [] },
      { titolo: "Parole che feriscono, parole che uniscono", dipartimento: true, attivita: [] },
      { titolo: "Il cyberbullismo", dipartimento: true, attivita: [] },
      { titolo: "Vero o falso? Confrontare semplici fonti", dipartimento: true, attivita: [] },
      { titolo: "Il decalogo della piattaforma di classe", dipartimento: true, attivita: [] }
    ]
  },

  /* ---------------- EDUCAZIONE CIVICA · SECONDA ---------------- */
  {
    materia: "educazione-civica",
    classe: "seconda",
    numero: "I",
    titolo: "Parole che uniscono: comunicare in rete",
    descrizione: "Ottobre–dicembre, circa 13 ore (Italiano, Tecnologia, Inglese, Musica). Dal Manifesto della comunicazione non ostile alle regole della classe in rete. Fasi: bufala poetica e verifica delle fonti; dati sul cyberbullismo; le parole delle canzoni; stesura del manifesto di classe. Prodotto finale: Manifesto di classe per la comunicazione in rete, con infografica pubblicata sul sito della scuola. Obiettivi del dipartimento: Comunicare e condividere responsabilmente; Ricercare e valutare informazioni digitali; Usare consapevolmente strumenti e ambienti digitali; Partecipare responsabilmente alla comunità.",
    lezioni: [
      {
        titolo: "Le parole sono un ponte",
        dipartimento: true,
        descrizione: "Conoscere i dieci principi del Manifesto della comunicazione non ostile e collegarli a situazioni della vita di classe e online.",
        link: "educazione-civica/seconda/parole-che-uniscono/01-le-parole-sono-un-ponte.html",
        data: "2026-11-01",
        attivita: []
      },
      {
        titolo: "Una bufala poetica",
        dipartimento: true,
        descrizione: "Riconoscere che un testo commovente diffuso in rete può essere falso e individuare gli indizi che permettono di dubitare prima di condividere.",
        link: "educazione-civica/seconda/parole-che-uniscono/02-una-bufala-poetica.html",
        attivita: []
      },
      {
        titolo: "Cercare bene in rete",
        dipartimento: true,
        descrizione: "Usare il motore di ricerca per documentarsi, scegliendo parole chiave efficaci e circoscrivendo la ricerca.",
        link: "educazione-civica/seconda/parole-che-uniscono/03-cercare-bene-in-rete.html",
        attivita: []
      },
      {
        titolo: "Verificare una notizia e citare le fonti",
        dipartimento: true,
        descrizione: "Verificare l'attendibilità di una notizia confrontando più fonti e citare correttamente le fonti evitando il plagio.",
        link: "educazione-civica/seconda/parole-che-uniscono/04-verificare-una-notizia-e-citare-le-fonti.html",
        attivita: []
      },
      {
        titolo: "Cyberbullismo: chi guarda può fare la differenza",
        dipartimento: true,
        descrizione: "Riconoscere le forme del cyberbullismo e il ruolo di chi assiste, individuando che cosa fare e a chi rivolgersi.",
        link: "educazione-civica/seconda/parole-che-uniscono/05-cyberbullismo-chi-guarda-puo-fare-la-differenza.html",
        attivita: []
      },
      {
        titolo: "Words matter: Dumbledore and the Manifesto",
        dipartimento: true,
        descrizione: "Understand a short film scene and the principles of the Manifesto in English; use words for building bridges and words for hurting.",
        link: "educazione-civica/seconda/parole-che-uniscono/06-words-matter-dumbledore-and-the-manifesto.html",
        attivita: []
      },
      {
        titolo: "Le mie parole: le metafore di una canzone",
        dipartimento: true,
        descrizione: "Riconoscere in una canzone le metafore usate per descrivere le parole e collegarle al loro effetto su chi le riceve.",
        link: "educazione-civica/seconda/parole-che-uniscono/07-le-mie-parole-le-metafore-di-una-canzone.html",
        attivita: []
      },
      {
        titolo: "Famosi online: possibilità e pericoli",
        dipartimento: true,
        descrizione: "Riflettere sulle possibilità e sui rischi della visibilità online, distinguendo identità reale e immagine pubblicata.",
        link: "educazione-civica/seconda/parole-che-uniscono/08-famosi-online-possibilita-e-pericoli.html",
        attivita: []
      },
      {
        titolo: "Parole che integrano: analisi di una canzone",
        dipartimento: true,
        descrizione: "Analizzare il testo di una canzone sul potere delle parole e ricavarne messaggi per una comunicazione che include.",
        link: "educazione-civica/seconda/parole-che-uniscono/09-parole-che-integrano-analisi-di-una-canzone.html",
        attivita: []
      },
      {
        titolo: "Una strofa per il Manifesto",
        dipartimento: true,
        descrizione: "Comporre e cantare una strofa in rima ispirata ai principi del Manifesto, rispettando metrica e accenti.",
        link: "educazione-civica/seconda/parole-che-uniscono/10-una-strofa-per-il-manifesto.html",
        attivita: []
      },
      {
        titolo: "Be kind online: netiquette",
        dipartimento: true,
        descrizione: "Learn and use the vocabulary of online communication and write simple rules for a respectful chat.",
        link: "educazione-civica/seconda/parole-che-uniscono/11-be-kind-online-netiquette.html",
        attivita: []
      },
      {
        titolo: "Scriviamo il Manifesto di classe",
        dipartimento: true,
        descrizione: "Scrivere insieme un testo regolativo condiviso, scegliendo le regole emerse nella UDA e motivandole.",
        link: "educazione-civica/seconda/parole-che-uniscono/12-scriviamo-il-manifesto-di-classe.html",
        attivita: []
      },
      {
        titolo: "L'infografica del Manifesto",
        dipartimento: true,
        descrizione: "Produrre e condividere un'infografica rispettando le regole della piattaforma e citando correttamente le fonti.",
        link: "educazione-civica/seconda/parole-che-uniscono/13-l-infografica-del-manifesto.html",
        attivita: []
      }
    ]
  },
  {
    materia: "educazione-civica",
    classe: "seconda",
    numero: "II",
    titolo: "Essere cittadini europei",
    descrizione: "Gennaio–marzo, circa 12 ore (Storia, Geografia, Inglese, Musica). Tappe dell'Unione Europea, istituzioni, Carta dei diritti fondamentali, inno e bandiera; i discorsi che hanno difeso i diritti. Prodotto finale: Simulazione di una seduta del Parlamento europeo su un tema scelto dalla classe. Obiettivi del dipartimento: Conoscere Costituzione, istituzioni e diritti; Partecipare responsabilmente alla comunità.",
    lezioni: [
      {
        titolo: "Dalla guerra alla pace: perché un'Europa unita",
        dipartimento: true,
        descrizione: "Spiegare perché, dopo la Seconda guerra mondiale, alcuni Stati europei decisero di unirsi, a partire dalla Dichiarazione Schuman.",
        link: "educazione-civica/seconda/essere-cittadini-europei/01-dalla-guerra-alla-pace-perche-un-europa-unita.html",
        data: "2026-11-01",
        attivita: []
      },
      {
        titolo: "Le tappe dell'Unione Europea",
        dipartimento: true,
        descrizione: "Ricostruire le principali tappe dalla Comunità del carbone e dell'acciaio all'Unione Europea di oggi.",
        link: "educazione-civica/seconda/essere-cittadini-europei/02-le-tappe-dell-unione-europea.html",
        attivita: []
      },
      {
        titolo: "Gli Stati dell'Unione sulla carta",
        dipartimento: true,
        descrizione: "Localizzare sulla carta gli Stati membri dell'Unione Europea e distinguerli dagli altri Stati europei.",
        link: "educazione-civica/seconda/essere-cittadini-europei/03-gli-stati-dell-unione-sulla-carta.html",
        attivita: []
      },
      {
        titolo: "Vivere senza frontiere: euro, Schengen, Erasmus",
        dipartimento: true,
        descrizione: "Riconoscere che cosa cambia nella vita quotidiana grazie all'Unione: libera circolazione, moneta unica, studio all'estero.",
        link: "educazione-civica/seconda/essere-cittadini-europei/04-vivere-senza-frontiere-euro-schengen-erasmus.html",
        attivita: []
      },
      {
        titolo: "Le istituzioni europee: chi fa che cosa",
        dipartimento: true,
        descrizione: "Riconoscere le principali istituzioni dell'Unione Europea e le loro funzioni, collegandole ai poteri dello Stato.",
        link: "educazione-civica/seconda/essere-cittadini-europei/05-le-istituzioni-europee-chi-fa-che-cosa.html",
        attivita: []
      },
      {
        titolo: "Speeches that changed history",
        dipartimento: true,
        descrizione: "Understand key words of two famous speeches on rights and connect them to rights in the European Union today.",
        link: "educazione-civica/seconda/essere-cittadini-europei/06-speeches-that-changed-history.html",
        attivita: []
      },
      {
        titolo: "La Carta dei diritti fondamentali dell'Unione",
        dipartimento: true,
        descrizione: "Conoscere la struttura della Carta dei diritti fondamentali dell'Unione Europea e riconoscere alcuni diritti nella vita quotidiana.",
        link: "educazione-civica/seconda/essere-cittadini-europei/07-la-carta-dei-diritti-fondamentali-dell-unione.html",
        attivita: []
      },
      {
        titolo: "L'Inno alla gioia, inno dell'Europa",
        dipartimento: true,
        descrizione: "Conoscere l'origine dell'inno europeo e riconoscerne il tema melodico, collegandolo ai simboli dell'Unione.",
        link: "educazione-civica/seconda/essere-cittadini-europei/08-l-inno-alla-gioia-inno-dell-europa.html",
        attivita: []
      },
      {
        titolo: "United in diversity",
        dipartimento: true,
        descrizione: "Use EU vocabulary in English and describe one's own European identity in simple sentences.",
        link: "educazione-civica/seconda/essere-cittadini-europei/09-united-in-diversity.html",
        attivita: []
      },
      {
        titolo: "Inni a confronto",
        dipartimento: true,
        descrizione: "Confrontare l'inno nazionale e l'inno europeo riconoscendo carattere, struttura e funzione.",
        link: "educazione-civica/seconda/essere-cittadini-europei/10-inni-a-confronto.html",
        attivita: []
      },
      {
        titolo: "Prepariamo la seduta del Parlamento europeo",
        dipartimento: true,
        descrizione: "Prepararsi a una simulazione assumendo il punto di vista di uno Stato membro su un tema comune.",
        link: "educazione-civica/seconda/essere-cittadini-europei/11-prepariamo-la-seduta-del-parlamento-europeo.html",
        attivita: []
      },
      {
        titolo: "La seduta del Parlamento europeo",
        dipartimento: true,
        descrizione: "Partecipare a una simulazione di seduta parlamentare rispettando le regole, argomentando e votando.",
        link: "educazione-civica/seconda/essere-cittadini-europei/12-la-seduta-del-parlamento-europeo.html",
        attivita: []
      }
    ]
  },
  {
    materia: "educazione-civica",
    classe: "seconda",
    numero: "III",
    titolo: "Il patrimonio del nostro quartiere",
    descrizione: "Aprile–maggio, circa 10 ore (Arte e immagine, Geografia, Italiano, Scienze). Un bene del territorio da conoscere, raccontare e tutelare; i nomi delle strade e l'art. 3 della Costituzione. Prodotto finale: Visita guidata in digitale (Invasioni Digitali) di un bene del quartiere, preparata dagli alunni. Obiettivi del dipartimento: Riconoscere e tutelare il patrimonio; Agire per la sostenibilità; Conoscere Costituzione, istituzioni e diritti.",
    lezioni: [
      {
        titolo: "Che cos'è un bene culturale",
        dipartimento: true,
        descrizione: "Riconoscere i diversi tipi di beni culturali e paesaggistici e il dovere di tutela stabilito dall'articolo 9 della Costituzione.",
        link: "educazione-civica/seconda/il-patrimonio-del-nostro-quartiere/01-che-cos-e-un-bene-culturale.html",
        data: "2026-11-01",
        attivita: []
      },
      {
        titolo: "Il quartiere sulla carta",
        dipartimento: true,
        descrizione: "Leggere la carta del quartiere, localizzare i beni individuati e scegliere quello da studiare.",
        link: "educazione-civica/seconda/il-patrimonio-del-nostro-quartiere/02-il-quartiere-sulla-carta.html",
        attivita: []
      },
      {
        titolo: "Le strade raccontano: i nomi del quartiere",
        dipartimento: true,
        descrizione: "Analizzare i nomi delle strade del quartiere come patrimonio e riflettere sull'uguaglianza tra donne e uomini (art. 3).",
        link: "educazione-civica/seconda/il-patrimonio-del-nostro-quartiere/03-le-strade-raccontano-i-nomi-del-quartiere.html",
        attivita: []
      },
      {
        titolo: "Leggere un bene: osservare e descrivere",
        dipartimento: true,
        descrizione: "Osservare un bene culturale e descriverlo con il lessico specifico: materiali, forme, stile, epoca.",
        link: "educazione-civica/seconda/il-patrimonio-del-nostro-quartiere/04-leggere-un-bene-osservare-e-descrivere.html",
        attivita: []
      },
      {
        titolo: "Perché i monumenti si rovinano",
        dipartimento: true,
        descrizione: "Riconoscere le principali cause di degrado dei beni culturali, naturali e umane, e collegarle all'inquinamento.",
        link: "educazione-civica/seconda/il-patrimonio-del-nostro-quartiere/05-perche-i-monumenti-si-rovinano.html",
        attivita: []
      },
      {
        titolo: "Sopralluogo: fotografare e documentare",
        dipartimento: true,
        descrizione: "Documentare un bene culturale con fotografie e appunti rispettando le regole del luogo e la privacy.",
        link: "educazione-civica/seconda/il-patrimonio-del-nostro-quartiere/06-sopralluogo-fotografare-e-documentare.html",
        attivita: []
      },
      {
        titolo: "Il verde del quartiere: un patrimonio vivo",
        dipartimento: true,
        descrizione: "Riconoscere il valore del verde urbano per la biodiversità e la qualità della vita, e proporre comportamenti sostenibili.",
        link: "educazione-civica/seconda/il-patrimonio-del-nostro-quartiere/07-il-verde-del-quartiere-un-patrimonio-vivo.html",
        attivita: []
      },
      {
        titolo: "Scriviamo i testi della visita guidata",
        dipartimento: true,
        descrizione: "Scrivere testi informativi brevi e chiari per una visita guidata digitale, citando le fonti.",
        link: "educazione-civica/seconda/il-patrimonio-del-nostro-quartiere/08-scriviamo-i-testi-della-visita-guidata.html",
        attivita: []
      },
      {
        titolo: "Chi protegge il patrimonio",
        dipartimento: true,
        descrizione: "Conoscere le istituzioni e le organizzazioni che tutelano il patrimonio, dal Comune all'UNESCO, e il ruolo dei cittadini.",
        link: "educazione-civica/seconda/il-patrimonio-del-nostro-quartiere/09-chi-protegge-il-patrimonio.html",
        attivita: []
      },
      {
        titolo: "La nostra Invasione Digitale",
        dipartimento: true,
        descrizione: "Realizzare e presentare una visita guidata digitale del bene, con foto, testi e fonti, rispettando privacy e diritti d'autore.",
        link: "educazione-civica/seconda/il-patrimonio-del-nostro-quartiere/10-la-nostra-invasione-digitale.html",
        attivita: []
      }
    ]
  },

  /* ---------------- EDUCAZIONE CIVICA · TERZA ---------------- */
  {
    materia: "educazione-civica",
    classe: "terza",
    numero: "I",
    titolo: "La Costituzione e la legalità",
    descrizione: "Ottobre–dicembre, circa 12 ore (Storia, Italiano, Geografia, Arte e immagine). Dal referendum del 2 giugno 1946 all'Assemblea costituente e al 1° gennaio 1948: come nasce la Costituzione e com'è fatta. Gli organi costituzionali. La legalità e il contrasto alle mafie: figure di riferimento e associazioni. La libertà di espressione (art. 21) nell'era di Internet. Prodotto finale: Costituzione raccontata ai ragazzi: ogni gruppo riscrive e illustra un articolo; proposta di riscrittura dell'art. 21 per l'era digitale. Obiettivi del dipartimento: Conoscere Costituzione, istituzioni e diritti; Partecipare responsabilmente alla comunità; Comunicare e condividere responsabilmente.",
    lezioni: [
      { titolo: "Come nasce la Costituzione: dal 2 giugno 1946 al 1° gennaio 1948", dipartimento: true, attivita: [] },
      { titolo: "Com'è fatta la Costituzione", dipartimento: true, attivita: [] },
      { titolo: "Gli organi costituzionali", dipartimento: true, attivita: [] },
      { titolo: "La legalità e il contrasto alle mafie", dipartimento: true, attivita: [] },
      { titolo: "La libertà di espressione (art. 21) nell'era di Internet", dipartimento: true, attivita: [] },
      { titolo: "La Costituzione raccontata ai ragazzi", dipartimento: true, attivita: [] }
    ]
  },
  {
    materia: "educazione-civica",
    classe: "terza",
    numero: "II",
    titolo: "Diritti umani e memoria",
    descrizione: "Gennaio–febbraio, circa 10 ore (Storia, Italiano, Inglese, Geografia). La Dichiarazione universale dei diritti umani (1948) e l'ONU; la Convenzione sui diritti dell'infanzia (1989); la Giornata della Memoria: leggi razziali, Diario di Anna Frank, il linguaggio dell'odio dal Manifesto della razza a oggi. Prodotto finale: Debate su un articolo della Dichiarazione universale; mostra per il 27 gennaio con i lavori della classe. Obiettivi del dipartimento: Conoscere Costituzione, istituzioni e diritti; Partecipare responsabilmente alla comunità; Comunicare e condividere responsabilmente.",
    lezioni: [
      { titolo: "La Dichiarazione universale dei diritti umani e l'ONU", dipartimento: true, attivita: [] },
      { titolo: "La Convenzione sui diritti dell'infanzia", dipartimento: true, attivita: [] },
      { titolo: "Il Giorno della Memoria: le leggi razziali e il Diario di Anna Frank", dipartimento: true, attivita: [] },
      { titolo: "Il linguaggio dell'odio dal Manifesto della razza a oggi", dipartimento: true, attivita: [] },
      { titolo: "Debate su un articolo della Dichiarazione universale", dipartimento: true, attivita: [] }
    ]
  },
  {
    materia: "educazione-civica",
    classe: "terza",
    numero: "III",
    titolo: "Clima, energia e informazione",
    descrizione: "Marzo–maggio, circa 11 ore (Scienze, Tecnologia, Italiano, Matematica). Cambiamenti climatici e biodiversità; fonti di energia rinnovabili e non rinnovabili; sostenibilità nelle attività economiche; leggere i dati sul clima; riconoscere le notizie false sul clima; copyright e Creative Commons; identità digitale e privacy nel condividere contenuti. Prodotto finale: Campagna informativa digitale sul clima, con dati e fonti verificate e immagini con licenza libera. Obiettivi del dipartimento: Agire per la sostenibilità; Ricercare e valutare informazioni digitali; Usare consapevolmente strumenti e ambienti digitali; Comunicare e condividere responsabilmente.",
    lezioni: [
      { titolo: "Cambiamenti climatici e biodiversità", dipartimento: true, attivita: [] },
      { titolo: "Fonti di energia rinnovabili e non rinnovabili", dipartimento: true, attivita: [] },
      { titolo: "La sostenibilità nelle attività economiche", dipartimento: true, attivita: [] },
      { titolo: "Leggere i dati sul clima", dipartimento: true, attivita: [] },
      { titolo: "Riconoscere le notizie false sul clima", dipartimento: true, attivita: [] },
      { titolo: "Copyright e Creative Commons", dipartimento: true, attivita: [] },
      { titolo: "Identità digitale e privacy", dipartimento: true, attivita: [] },
      { titolo: "La campagna informativa sul clima", dipartimento: true, attivita: [] }
    ],
    attivita: [
      { tipo: "Mappa", titolo: "Città che cambiano — Atlante d'Europa", descrizione: "Mappa interattiva delle soluzioni urbane sostenibili in Europa (acqua, calore, energia, mobilità, rifiuti, verde), dalla rubrica di Pino Bruno.", link: "educazione-civica/terza/clima-energia-e-informazione/citta-che-cambiano.html", data: "2026-11-04" }
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

var UDA = [
  {
    titolo: "Benvenuti nei laboratori delle discipline",
    standby: true,
    descrizione: "Accoglienza: i laboratori dello storico, del geografo, del lettore, dello scrittore e del cittadino. La valigia con un oggetto, un luogo, una storia, la prima parola e una regola; la mostra «Chi siamo».",
    classe: "prima",
    periodo: "Accoglienza, prime settimane",
    materie: ["storia", "geografia", "italiano", "educazione-civica"],
    link: "uda/benvenuti-nei-laboratori.html"
  }
];
