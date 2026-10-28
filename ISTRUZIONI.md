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
(Prima/Dopo, Idea principale, Perché?, Concetti, Parole chiave, testi, verifiche). I contenuti
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
