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
const LIBRI = {
  "paesaggi":  { nome: "Paesaggi vicini e lontani", colore: "#2e7d4f" },
  "geoagenda": { nome: "GeoAgenda",                 colore: "#7a3fa0" },
  "vivi":      { nome: "Vivi la Geografia",         colore: "#1d6fa5" }
};

const MODULI = [

  /* ---------------- GEOGRAFIA · PRIMA ---------------- */
  /* Organizzata secondo Paesaggi vicini e lontani 1 (pagine A e B).
     Le lezioni senza etichetta e con «Lezione extra» non sono nel libro. */
  {
    materia: "geografia",
    classe: "prima",
    numero: "I",
    titolo: "Gli strumenti della geografia",
    descrizione: "Orientarsi, leggere le carte, usare dati e grafici. Primo quadrimestre, in collegamento con Scienze.",
    lezioni: [
      {
        titolo: "Perché la geografia",
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
          { tipo: "Attività 2", titolo: "Il cammino del Sole", descrizione: "Dove si trova il Sole durante il giorno, l'ombra del bastone e il confronto tra città.", link: "geografia/prima/orientamento/attivita/il-cammino-del-sole.html", data: "2026-10-23" },
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
      { titolo: "Tanti tipi di fotografie", libri: ["paesaggi"], pagine: "A16–A17", attivita: [] },
      { titolo: "I dati: raccoglierli, ordinarli, rappresentarli", dipartimento: true, libri: ["paesaggi"], pagine: "A18–A21", descrizione: "I dati e i grafici.", attivita: [] },
      { titolo: "Il GIS: che cos'è un Sistema Informativo Geografico?", libri: ["paesaggi"], pagine: "A141", descrizione: "Esplorare, mappare, condividere.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "prima",
    numero: "II",
    titolo: "Il paesaggio: clima, rilievi e acque",
    descrizione: "Che cos'è il paesaggio, i fenomeni che lo modificano, il clima, i rilievi e le acque. Primo quadrimestre, in collegamento con Scienze.",
    lezioni: [
      { titolo: "Il paesaggio e la sua evoluzione", libri: ["paesaggi"], pagine: "A34–A37", attivita: [] },
      { titolo: "Le forze che modificano il paesaggio", libri: ["paesaggi"], pagine: "A38–A41", descrizione: "Fenomeni che hanno origine all'interno e all'esterno della Terra.", attivita: [] },
      { titolo: "Il clima", dipartimento: true, libri: ["paesaggi"], pagine: "A44–A47", descrizione: "Il clima e gli ambienti naturali.", attivita: [] },
      { titolo: "L'inquinamento", dipartimento: true, libri: ["paesaggi"], pagine: "A48–A49", descrizione: "I problemi dell'ambiente.", attivita: [] },
      { titolo: "I rilievi", libri: ["paesaggi"], pagine: "A61–A71", descrizione: "Montagne, colline, pianure; gli esseri umani modificano i rilievi.", attivita: [] },
      { titolo: "Le acque", libri: ["paesaggi"], pagine: "A81–A95", descrizione: "Ghiacciai, fiumi, laghi, mari e coste; gli esseri umani modificano i corsi d'acqua e le coste.", attivita: [] },
      { titolo: "Le risorse idriche", dipartimento: true, libri: ["paesaggi"], pagine: "A105–A110", descrizione: "Dossier: l'acqua.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "prima",
    numero: "III",
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
    titolo: "Le regioni italiane",
    descrizione: "Secondo quadrimestre, in collegamento con Storia.",
    lezioni: [
      { titolo: "Come si studia una regione italiana", dipartimento: true, libri: ["paesaggi"], pagine: "B114–B115", attivita: [] },
      { titolo: "L'Italia settentrionale", dipartimento: true, libri: ["paesaggi"], pagine: "B116–B145", attivita: [] },
      { titolo: "L'Italia centrale", dipartimento: true, libri: ["paesaggi"], pagine: "B146–B161", attivita: [] },
      { titolo: "L'Italia meridionale e insulare", dipartimento: true, libri: ["paesaggi"], pagine: "B162–B189", attivita: [] }
    ]
  },

  /* ---------------- GEOGRAFIA · SECONDA ---------------- */
  /* Organizzata secondo Paesaggi vicini e lontani 2 (pagine C e D).
     Le lezioni senza etichetta e con «Lezione extra» non sono nel libro. */
  {
    materia: "geografia",
    classe: "seconda",
    numero: "I",
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
    titolo: "Il pianeta Terra: gli equilibri a rischio",
    link: "geografia/terza/la-terra/index.html",
    descrizione: "Origini del pianeta, un pianeta irrequieto, idrografia, continenti, clima e biomi. Primo quadrimestre, in collegamento con Scienze.",
    lezioni: [
      {
        titolo: "Il Sistema solare",
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "Sole, pianeti, asteroidi, meteoroidi e comete: schede cliccabili e zoom.",
        link: "geografia/terza/la-terra/lezioni/sistema-solare.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il moto di rotazione",
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "La Terra gira da ovest a est: modello 3D con la cupola del cielo di Roma.",
        link: "geografia/terza/la-terra/lezioni/rotazione-terra.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il crepuscolo",
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "I raggi del Sole deviati dall'atmosfera all'alba e al tramonto.",
        link: "geografia/terza/la-terra/lezioni/crepuscolo.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il moto di rivoluzione",
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "Orbita, equinozi e solstizi, circolo di illuminazione e durata del dì.",
        link: "geografia/terza/la-terra/lezioni/rivoluzione.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "I fusi orari",
        dipartimento: "prima",
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "24 fusi da 15°, ora UTC e ora legale, ora civile e ora locale, linea del cambiamento di data, i fusi dell'Europa e le lancette da spostare.",
        link: "geografia/terza/la-terra/lezioni/fusi-orari.html",
        data: "2026-10-24",
        attivita: []
      },
      {
        titolo: "La struttura della Terra",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "Viaggio verso il centro, placche, vulcani e terremoti, formazione della Terra.",
        link: "geografia/terza/la-terra/lezioni/struttura-terra.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Il rischio vulcanico e il rischio sismico",
        dipartimento: true,
        libri: ["geoagenda", "vivi"],
        descrizione: "Educazione civica: pericoli di vulcani e terremoti, tsunami, difese di Vesuvio ed Etna, previsione e prevenzione, edifici antisismici.",
        link: "geografia/terza/la-terra/lezioni/rischio-vulcanico-sismico.html",
        data: "2026-10-27",
        attivita: []
      },
      {
        titolo: "I continenti",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "Dati dei sei continenti, confronti e deriva dalla Pangea a oggi.",
        link: "geografia/terza/la-terra/lezioni/continenti.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Le proiezioni: disegnare il mondo su un foglio",
        dipartimento: "prima",
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "Carte conformi ed equivalenti, Mercatore, Peters ed Equal Earth a confronto con il globo. Spostata dalla prima, da verificare.",
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
        descrizione: "Catene montuose e scudi, fondali oceanici, correnti, acqua dolce.",
        link: "geografia/terza/la-terra/lezioni/acque.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "L'atmosfera",
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "Composizione, strati e temperatura, venti costanti e brezze.",
        link: "geografia/terza/la-terra/lezioni/atmosfera.html",
        data: "2026-10-15",
        attivita: []
      },
      {
        titolo: "Fasce climatiche e biomi",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "Clima e ambienti, lezioni 1–4: i fattori del clima, dal clima ai biomi, gli ambienti caldi, dalle zone temperate ai poli.",
        link: "geografia/terza/clima-e-ambienti/index.html",
        data: "2026-10-21",
        attivita: [
          { tipo: "Lezione 1", titolo: "Perché sulla Terra esistono climi diversi?", link: "geografia/terza/clima-e-ambienti/index.html#lezione-1", data: "2026-10-21" },
          { tipo: "Lezione 2", titolo: "Dal clima ai biomi", link: "geografia/terza/clima-e-ambienti/index.html#lezione-2", data: "2026-10-21" },
          { tipo: "Lezione 3", titolo: "Gli ambienti caldi: troppa acqua o troppo poca?", link: "geografia/terza/clima-e-ambienti/index.html#lezione-3", data: "2026-10-21" },
          { tipo: "Lezione 4", titolo: "Dalle zone temperate ai poli", link: "geografia/terza/clima-e-ambienti/index.html#lezione-4", data: "2026-10-21" }
        ]
      },
      {
        titolo: "Il clima e i suoi cambiamenti",
        dipartimento: true,
        libri: ["paesaggi", "geoagenda", "vivi"],
        descrizione: "Clima e ambienti, lezioni 5–6: come trasformiamo gli ambienti, il clima di ieri e di oggi.",
        link: "geografia/terza/clima-e-ambienti/index.html#lezione-5",
        data: "2026-10-21",
        attivita: [
          { tipo: "Lezione 5", titolo: "Come trasformiamo gli ambienti?", link: "geografia/terza/clima-e-ambienti/index.html#lezione-5", data: "2026-10-21" },
          { tipo: "Lezione 6", titolo: "Il clima è sempre cambiato. Che cosa cambia oggi?", link: "geografia/terza/clima-e-ambienti/index.html#lezione-6", data: "2026-10-21" }
        ]
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
    titolo: "Popolazione mondiale: crescita e inurbamento",
    descrizione: "Dove siamo, quanti siamo, come ci muoviamo. Dicembre–gennaio, in collegamento con Scienze e Storia.",
    lezioni: [
      {
        titolo: "La crescita della popolazione mondiale",
        dipartimento: true,
        attivita: [
          { tipo: "Se c'è tempo", titolo: "Carte che cambiano forma", descrizione: "Anamorfosi: il mondo disegnato in base alla popolazione, ai giovani, ai cellulari.", link: "geografia/prima/carte-geografiche/attivita/carte-che-cambiano-forma.html", data: "2026-10-23" }
        ]
      },
      { titolo: "L'inurbamento", dipartimento: true, attivita: [] },
      { titolo: "I movimenti migratori", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E94–E95", descrizione: "Perché si emigra; migrazioni internazionali e forzate, profughi. GeoAgenda 3: E78–E79 · Vivi la Geografia 3: pp. 62–65.", attivita: [] },
      { titolo: "Salute e istruzione", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E98–E101", descrizione: "Problematiche legate allo sviluppo. GeoAgenda 3: E80–E83 · Vivi la Geografia 3: pp. 118–123.", attivita: [] },
      { titolo: "Culture, lingue e religioni", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E102–E103, E115–E120", descrizione: "La geografia delle culture; dossier «La diversità delle culture». GeoAgenda 3: E84–E87 · Vivi la Geografia 3: pp. 164–175.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "III",
    titolo: "L'economia mondiale",
    descrizione: "Le attività e le reti con cui trasformiamo il pianeta. Gennaio–febbraio, in collegamento con Scienze e Tecnologia.",
    lezioni: [
      { titolo: "L'economia mondiale", dipartimento: true, attivita: [] },
      { titolo: "La globalizzazione", dipartimento: true, attivita: [] },
      { titolo: "Risorse e materie prime", dipartimento: true, attivita: [] },
      { titolo: "Le energie", dipartimento: true, attivita: [] },
      { titolo: "Nord e Sud del mondo", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E90–E93", descrizione: "Disuguaglianze, sottosviluppo, rapporti di dipendenza economica. GeoAgenda 3: E74–E77 · Vivi la Geografia 3: pp. 10–11, 116–117, 126–127.", attivita: [] },
      { titolo: "I conflitti per le risorse: acqua, suolo e cibo", dipartimento: true, libri: ["paesaggi", "geoagenda", "vivi"], pagine: "E124–E125", descrizione: "Le risorse e lo sviluppo sostenibile. GeoAgenda 3: E104–E105 · Vivi la Geografia 3: pp. 46–47, 118–119.", attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "IV",
    titolo: "Gli Stati del mondo: la geopolitica",
    descrizione: "Introduzione agli Stati: febbraio–marzo, in collegamento con Storia ed Educazione civica.",
    lezioni: [
      { titolo: "La crisi degli Stati nazionali", dipartimento: true, attivita: [] },
      { titolo: "Il sistema politico mondiale", dipartimento: true, attivita: [] },
      { titolo: "L'Organizzazione delle Nazioni Unite", dipartimento: true, attivita: [] },
      { titolo: "I diritti umani", dipartimento: true, attivita: [] }
    ]
  },
  {
    materia: "geografia",
    classe: "terza",
    numero: "V",
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
    numero: "VI",
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
    numero: "VII",
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
    numero: "VIII",
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
    descrizione: "Fonologia, ortografia e punteggiatura, le parti del discorso. Primo e secondo quadrimestre, in collegamento con Inglese, Francese, Spagnolo e Tedesco.",
    lezioni: [
      { titolo: "Suoni e lettere: fonologia e alfabeto", descrizione: "Alfabeto, vocali e consonanti, digrammi, sillaba, dittongo e iato, accento.", attivita: [
          { tipo: "Esercizi", titolo: "Suoni e lettere", descrizione: "Scheda riassuntiva e cinque esercizi con correzione automatica: sillabe, accento, dittongo e iato, digrammi.", link: "italiano/prima/educazione-linguistica/fonologia-alfabeto.html", data: "2026-10-30" }
        ] },
      { titolo: "Ortografia e punteggiatura", descrizione: "I casi difficili, accento sui monosillabi, h, apostrofo, maiuscole e segni di punteggiatura.", attivita: [
          { tipo: "Esercizi", titolo: "Ortografia e punteggiatura", descrizione: "Scheda riassuntiva e sei esercizi con correzione automatica.", link: "italiano/prima/educazione-linguistica/ortografia-punteggiatura.html", data: "2026-10-30" }
        ] },
      { titolo: "Le parti variabili: articolo, nome e verbo", descrizione: "Articoli determinativi, indeterminativi e partitivi; tipi di nome e plurale; coniugazioni e tempi dell'indicativo.", attivita: [
          { tipo: "Esercizi", titolo: "Articolo, nome e verbo", descrizione: "Scheda riassuntiva e sei esercizi con correzione automatica.", link: "italiano/prima/educazione-linguistica/articolo-nome-verbo.html", data: "2026-10-30" }
        ] },
      { titolo: "Le parti variabili: aggettivo, pronome e verbo", descrizione: "Aggettivi qualificativi e determinativi, gradi; pronomi personali e relativi; verbi transitivi e intransitivi, forma e modi.", attivita: [
          { tipo: "Esercizi", titolo: "Aggettivo, pronome e verbo", descrizione: "Scheda riassuntiva e sette esercizi con correzione automatica.", link: "italiano/prima/educazione-linguistica/aggettivo-pronome-verbo.html", data: "2026-10-30" }
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
          { tipo: "Sceneggiatura", titolo: "Peter e le decorazioni di Natale: dal racconto al découpage", link: "italiano/seconda/dal-testo-al-film/peter-decorazioni-di-natale.html", data: "2026-10-20" }
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
      { titolo: "La poesia lirica: Leopardi", attivita: [] },
      { titolo: "La poesia patriottica", attivita: [] },
      { titolo: "Il romanzo storico: Manzoni", attivita: [] },
      { titolo: "La letteratura contemporanea", attivita: [] }
    ]
  },
  {
    materia: "italiano",
    classe: "terza",
    numero: "III",
    titolo: "Antologia",
    descrizione: "Lettura e comprensione: i generi della narrativa e il teatro. Primo e secondo quadrimestre, in collegamento con Storia, Educazione civica, Arte e Immagine, Musica, Geografia, Religione e Tecnologia.",
    lezioni: [
      { titolo: "Il racconto autobiografico", attivita: [] },
      { titolo: "Il romanzo di formazione", attivita: [] },
      { titolo: "Il romanzo psicologico-sociale", attivita: [] },
      { titolo: "Il romanzo di fantascienza", attivita: [] },
      { titolo: "Il teatro", attivita: [] }
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
    titolo: "Le officine dello storico",
    link: "storia/prima/officine/index.html",
    descrizione: "Prima di cominciare: brevi laboratori di metodo. Ogni officina prepara una parte delle lezioni e ne ha l'icona e il colore.",
    lezioni: [
      { titolo: "Officina 0 · Chi siamo", officina: 0, parte: "officina", descrizione: "Ci presentiamo con oggetti e ricordi: ognuno ha una storia.", link: "storia/prima/officine/officina-00-chi-siamo.html", data: "2026-10-30", attivita: [] },
      { titolo: "Officina 1 · Che cos'è la storia", officina: 1, parte: "attivita", descrizione: "La storia ricostruisce il passato degli uomini con domande e prove.", attivita: [] },
      { titolo: "Officina 2 · Storia e preistoria", officina: 2, parte: "att-tempo", descrizione: "La storia comincia con la scrittura; prima c'è la preistoria.", attivita: [] },
      { titolo: "Officina 3 · Oralità e scrittura", officina: 3, parte: "att-fonti", descrizione: "Racconti tramandati a voce e testi scritti: che cosa si conserva, che cosa cambia.", attivita: [] },
      { titolo: "Officina 4 · Le tracce del passato", officina: 4, parte: "att-fonti", descrizione: "Fonti scritte, materiali, iconografiche e orali: il museo di classe delle fonti.", attivita: [] },
      { titolo: "Officina 5 · Il tempo della storia", officina: 5, parte: "cosa-quando", descrizione: "Anni, secoli, a.C. e d.C., periodi; la linea del tempo.", attivita: [] },
      { titolo: "Officina 6 · Lo spazio della storia", officina: 6, parte: "cosa-dove", descrizione: "Carta geografica e carta storica: i confini cambiano.", attivita: [] },
      { titolo: "Officina 7 · Le parole della storia", officina: 7, parte: "quali-parole", descrizione: "Parole nuove, parole che cambiano significato; il glossario di classe.", attivita: [] }
    ]
  },
  {
    materia: "storia",
    classe: "prima",
    numero: "I",
    titolo: "L'Italia dai Bizantini ai Longobardi",
    descrizione: "Primo quadrimestre, in collegamento con Geografia.",
    lezioni: [
      { titolo: "Officina 8 · Come si legge una lezione", officina: 8, parte: "leggiamo", descrizione: "Le prime parti della lezione: Cosa imparerai, Leggiamo, Quali parole?, Ripassiamo.", attivita: [] },
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
      { titolo: "Officina 9 · Le persone della storia", officina: 9, parte: "chi-incontrerai", descrizione: "Chi sono i protagonisti e come si presentano.", attivita: [] },
      { titolo: "Officina 10 · Causa, evento, effetto", officina: 10, parte: "perche", descrizione: "Perché le cose succedono e che cosa provocano.", attivita: [] },
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
      { titolo: "Officina 11 · Collegare ciò che so", officina: 11, parte: "ti-ricordi", descrizione: "Partire da quello che si è già studiato.", attivita: [] },
      { titolo: "Officina 12 · Guardare una fonte", officina: 12, parte: "fonti", descrizione: "Osservare un'immagine come uno storico.", attivita: [] },
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
      { titolo: "Officina 13 · Le idee chiave", officina: 13, parte: "quali-idee", descrizione: "Riconoscere le idee più importanti di una lezione.", attivita: [] },
      { titolo: "Officina 14 · Fare uno schema", officina: 14, parte: "come", descrizione: "Mettere in ordine le informazioni in colonne o in una mappa.", attivita: [] },
      { titolo: "Officina 15 · Fatto o interpretazione?", officina: 15, parte: "fonti", descrizione: "Distinguere ciò che si può verificare dai giudizi.", attivita: [] },
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
      { titolo: "Officina 16 · Prevedere e collegare", officina: 16, parte: "e-dopo", descrizione: "Che cosa verrà dopo? Collegare una lezione alla successiva.", attivita: [] },
      { titolo: "Officina 17 · Discutere da storici", officina: 17, parte: "ripassiamo", descrizione: "Sostenere un'idea con le prove: il mini-dibattito.", attivita: [] },
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
