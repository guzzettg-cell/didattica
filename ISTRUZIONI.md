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
