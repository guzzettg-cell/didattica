# Come aggiungere una UDA interdisciplinare

Le UDA compaiono in due posti:
- nella home, nella sezione **UDA interdisciplinari**;
- in fondo alla pagina di ogni materia coinvolta (es. una UDA di Geografia e Storia appare in entrambe le pagine).

## 1. Carica il file dell'UDA in questa cartella

Sei già nella cartella `uda`: clicca **Add file → Upload files**, trascina il file `.html` dell'UDA e fai **Commit changes**.

Usa nomi semplici: tutto minuscolo, senza spazi né accenti, con i trattini.
Esempio: `acqua-bene-comune.html`

Se l'UDA ha più file (scheda studenti, griglia di valutazione, materiali), puoi creare una sottocartella:
**Add file → Create new file** e scrivi nel nome `acqua-bene-comune/scheda.html`.
La barra `/` crea la cartella.

## 2. Aggiungi l'UDA al catalogo

1. Torna alla cartella principale e apri `materiali.js`.
2. Clicca sulla **matita** (Edit this file).
3. Scorri fino in fondo e trova queste righe:

```js
const UDA = [

];
```

4. Tra le due parentesi quadre incolla questo blocco e cambia i dati:

```js
  {
    titolo: "Acqua bene comune",
    descrizione: "Compito di realtà: una campagna informativa sul consumo d'acqua nel quartiere.",
    classe: "terza",
    periodo: "Novembre–dicembre",
    materie: ["geografia", "educazione-civica", "italiano"],
    link: "uda/acqua-bene-comune.html"
  }
```

5. Clicca **Commit changes**. Dopo un minuto circa l'UDA è visibile sul sito.

## Cosa scrivere in ogni campo

| Campo | Cosa contiene | Obbligatorio |
|---|---|---|
| `titolo` | Il titolo dell'UDA | sì |
| `descrizione` | Una o due frasi sul compito di realtà | no |
| `classe` | `prima`, `seconda` oppure `terza` | no |
| `periodo` | Quando si svolge, es. `"Secondo quadrimestre"` | no |
| `materie` | Le materie coinvolte, tra parentesi quadre | sì |
| `link` | Il percorso del file, sempre con `uda/` davanti | sì |

Le materie si scrivono **esattamente** così (minuscolo, con il trattino):
`geografia`, `storia`, `italiano`, `educazione-civica`.
L'ordine in cui le scrivi è l'ordine dei colori nella striscia laterale.

## Più UDA

Ogni UDA è un blocco tra parentesi graffe `{ }`. Tra un blocco e l'altro serve una **virgola**:

```js
const UDA = [
  {
    titolo: "Prima UDA",
    materie: ["geografia", "storia"],
    link: "uda/prima-uda.html"
  },
  {
    titolo: "Seconda UDA",
    materie: ["italiano", "educazione-civica"],
    link: "uda/seconda-uda.html"
  }
];
```

## Se qualcosa non compare

- **Controlla le virgole**: ne serve una dopo ogni riga dentro il blocco (tranne l'ultima) e una tra un blocco e l'altro.
- **Controlla le virgolette**: ogni testo va tra `"` e `"`. Se nel testo c'è un apostrofo va bene (`"L'acqua"`), ma non usare le virgolette doppie dentro il testo.
- **Controlla il link**: deve corrispondere esattamente al nome del file, maiuscole comprese.
- Ricarica la pagina con **Cmd+Shift+R** (Mac) o **Ctrl+F5** (Windows) per evitare di vedere la versione vecchia.

Se dopo una modifica sparisce **tutto** dalla home (anche le materie), c'è quasi sempre un errore di punteggiatura in `materiali.js`: apri il file, clicca **History** e confronta con la versione precedente.
