# Come aggiungere materiali

Ogni materia è organizzata in tre livelli:

- **Modulo**: un argomento generale (es. Modulo I – La Terra)
- **Lezione**: una tappa del modulo (es. Meridiani e paralleli)
- **Attività**: schede, esercizi, presentazioni, video… dentro la lezione

Tutto si gestisce dal file `materiali.js`. Le pagine si aggiornano da sole.

## Aggiungere un'attività a una lezione che esiste già

1. Carica il file nella cartella della materia e della classe, es. `geografia/terza/`
   (Add file → Upload files).
2. Apri `materiali.js` → matita. Trova la lezione e, dentro `attivita: [ ]`, aggiungi:

```js
          {
            tipo: "Esercizi",
            titolo: "Esercizi sulle coordinate",
            link: "geografia/terza/esercizi-coordinate.html",
            data: "2026-10-20"
          }
```

   Se c'è già un'altra attività, metti una **virgola** dopo la sua `}`.
3. Commit changes.

## Aggiungere una lezione a un modulo

Dentro `lezioni: [ ]` del modulo:

```js
      {
        titolo: "I moti della Terra",
        descrizione: "Rotazione, rivoluzione, stagioni.",
        attivita: []
      }
```

La lezione appare subito con la scritta "Attività in preparazione".
Se la lezione ha una sua pagina, aggiungi la riga `link: "geografia/terza/moti.html",`.

## Etichette dei libri

In cima a `materiali.js`, in `LIBRI`, ci sono le etichette dei libri
(Vivi la Geografia, GeoAgenda, Paesaggi vicini e lontani), ognuna con una sigla e un colore.
Per indicare da quale libro parte una lezione, aggiungi nella lezione la riga:

```js
        libri: ["geoagenda", "vivi"],
```

Una lezione può avere una sola etichetta o più di una; se non ha la riga `libri`, non ne ha.
Le etichette compaiono sotto il titolo della lezione e, nella pagina della materia,
ci sono i pulsanti «Libro:» per vedere solo le lezioni di un libro
(si può anche condividere il link: per esempio `geografia/?libro=geoagenda`).
Per un nuovo libro, aggiungi una riga in `LIBRI` con sigla, nome e colore.

## Programma di dipartimento

Le lezioni che corrispondono a un argomento della programmazione di dipartimento hanno la riga
`dipartimento: true,` e mostrano il segno «◆ Programma di dipartimento».
Se l'argomento è nella programmazione di un'altra classe (per esempio l'Europa, che il dipartimento
mette in prima e il sito tratta in seconda) si scrive la classe: `dipartimento: "prima",`.
Nella pagina della materia il pulsante «◆ Solo programma di dipartimento» mostra solo queste lezioni
(link diretto: `geografia/?dipartimento=1`).

## Indice di Storia facile e del Tablet (solo storia)

Le lezioni di storia hanno la riga `indice`, che **non compare nel sito**: dice in quale capitolo
di *Storia facile* 1-3 e in quale pagina del *Tablet degli argomenti di Storia* (Erickson) si trova
lo stesso argomento, per costruire la lezione con la loro organizzazione
(Prima/Dopo, Idea principale, Testo sintetico/essenziale, Perché?, Concetti fondamentali, Come?, Parole chiave, Studiamo le fonti, Ripassiamo). I contenuti
delle lezioni sono nostri; dei due libri si usa solo il modo di organizzare il materiale.

```js
        indice: "Storia facile 3, M1 cap. 3 · Tablet p. 221",
```

## Attività per tutto il modulo

Ripassi e verifiche che riguardano l'intero modulo vanno in `attivita: [ ]`
del modulo (dopo le lezioni), non dentro una lezione.
Compaiono nel riquadro "Per tutto il modulo".

## Aggiungere un modulo

In fondo all'elenco `MODULI`, prima della `];`, con una virgola dopo il modulo precedente:

```js
  {
    materia: "storia",
    classe: "seconda",
    numero: "I",
    titolo: "L'Europa del Cinquecento",
    lezioni: []
  }
```

Materie: `geografia`, `storia`, `italiano`, `educazione-civica`.
Classi: `prima`, `seconda`, `terza`.

## Se qualcosa non compare

- Controlla virgole e parentesi: ogni `{` ha la sua `}`, ogni `[` la sua `]`.
- Il `link` deve corrispondere esattamente al nome del file.
- Ricarica con Cmd+Shift+R (Mac) o Ctrl+F5 (Windows).
- Se sparisce tutto, l'errore è in `materiali.js`: apri il file → History e confronta con la versione precedente.

Per le UDA ci sono istruzioni a parte in `uda/ISTRUZIONI.md`.

## Pulsanti in alto e ingrandimento (tutte le pagine)

Ogni pagina ha, prima di `</body>`, una riga che collega il file comune `assets/barra.js`:

```html
<script src="../../assets/barra.js"></script>
```

Il numero di `../` dipende da quanto è profonda la cartella (una pagina in `storia/seconda/stato-governo/`
ne ha tre: `../../../assets/barra.js`). Il file aggiunge da solo:
- in alto a sinistra, su **tutte** le pagine, il **menu del sito**: ⌂ (pagina principale),
  i pulsanti **Storia · Geografia · Italiano · Educazione civica** (quello della materia della pagina è
  colorato pieno). Non cambia grandezza quando si ingrandisce la pagina;
- a destra, subito prima dei pulsanti A− / A+, la casella **Cerca nel sito**. Quando si scorre la
  pagina il menu e la casella scorrono via; restano fermi solo A− / A+. Sui telefoni ricerca e
  A− / A+ stanno sulla prima riga, le materie sotto;
- se la pagina non ha già un «← Torna…» in alto, il pulsante **← Materia: tutti i moduli**;
- i pulsanti **A− / A+** per ingrandire, se la pagina non li ha già.

Ordine e colori dei pulsanti delle materie sono in cima a `assets/barra.js`, nella riga `MENU`.

Quando carichi una pagina nuova, ricordati di aggiungere questa riga.

## Ricerca nel sito

La pagina `cerca.html` cerca in tutto il sito: nei titoli e nelle descrizioni del catalogo
(`materiali.js`, sempre aggiornato) e nel **testo delle pagine**. La casella è in alto in
ogni pagina, accanto ad A− / A+ (la aggiunge `assets/barra.js`).
Si può anche linkare una ricerca già fatta: `cerca.html?q=Leopardi`, `cerca.html?q=clima&classe=terza`.

Il testo delle pagine sta in `assets/indice-ricerca.js`, un file **generato**: non va modificato a mano.

- **Su GitHub si aggiorna da solo**: a ogni caricamento di pagine `.html` l'azione
  *Indice della ricerca* (`.github/workflows/indice-ricerca.yml`) rilegge le pagine e, se qualcosa
  è cambiato, salva il nuovo indice con un commit «Aggiorna l'indice della ricerca».
  Dopo quel commit, prima di caricare altre modifiche dal computer fai **Pull** (o «Fetch origin»
  in GitHub Desktop): il repository online ha un file in più.
- Si può lanciare a mano: su GitHub, **Actions → Indice della ricerca → Run workflow**.
- Oppure dal computer, nella cartella del sito: `python3 strumenti/crea-indice-ricerca.py`.

Una pagina nuova si trova subito per titolo e descrizione (dal catalogo); le parole del suo testo
si trovano dopo l'aggiornamento dell'indice.
