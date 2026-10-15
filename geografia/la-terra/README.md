# Il pianeta Terra — lezioni interattive di geografia

Simulazioni e attività interattive per la classe terza della scuola secondaria di primo grado, capitolo 19 «Il pianeta Terra». Le lezioni seguono l'ordine delle pagine del libro di testo.

| Lezione | Pagine | File |
|---|---|---|
| Il Sistema solare | 4-5 | `lezioni/sistema-solare.html` |
| Il reticolato geografico | 6-7 | `lezioni/reticolato.html` |
| Le proiezioni | 8-9 | `lezioni/proiezioni.html` |
| Il moto di rotazione | 10 | `lezioni/rotazione-terra.html` |
| Il crepuscolo | 10 | `lezioni/crepuscolo.html` |
| Il moto di rivoluzione | 11 | `lezioni/rivoluzione.html` |
| I fusi orari | 12-13 | `lezioni/fusi-orari.html` |
| La struttura della Terra | 14-15 | `lezioni/struttura-terra.html` |
| I continenti | 18-19 | `lezioni/continenti.html` |
| Rilievi, oceani, fiumi e laghi | 20-25 | `lezioni/acque.html` |
| L'atmosfera | 26-27 | `lezioni/atmosfera.html` |

## Come pubblicarle con GitHub Pages

1. Crea un nuovo repository su GitHub (per esempio `geografia-terra`).
2. Carica il contenuto di questa cartella: `index.html`, la cartella `lezioni`, `README.md` e il file `.nojekyll`.
3. Nel repository vai in **Settings → Pages**, scegli **Deploy from a branch**, ramo `main`, cartella `/ (root)`, e salva.
4. Dopo un minuto il sito sarà su `https://NOMEUTENTE.github.io/geografia-terra/`.

Ogni lezione è un unico file HTML senza dipendenze: funziona anche aprendolo dal computer, senza connessione. Solo i caratteri tipografici vengono caricati da Google Fonts; senza connessione la pagina usa i caratteri di sistema.

## Immagini e licenze

- Carta delle placche (`struttura-terra.html`): di Fradeve11, opera propria, pubblico dominio — https://commons.wikimedia.org/w/index.php?curid=3544952
- Animazione della Pangea (`continenti.html`): U.S. Geological Survey, pubblico dominio — https://commons.wikimedia.org/wiki/File:Pangea_animation_03.gif
- Tutti gli altri disegni sono generati dal codice delle pagine.

- Carta politica di base (`continenti.html`, `acque.html`): fonte e licenza da indicare.

In questa versione pubblica le carte del libro di testo non sono incluse: in «I continenti» e in «Rilievi, oceani, fiumi e laghi» i punti cliccabili sono collocati sulla carta politica in base alle loro coordinate geografiche. La carta delle correnti è sostituita da pulsanti con i nomi, da usare insieme alla carta del libro (pagina 23).
