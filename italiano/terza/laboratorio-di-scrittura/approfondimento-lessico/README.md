# Parole giovani

Un indice interattivo del **Piccolo Dizionario (immaginario) delle ragazze e dei ragazzi**, il progetto della Fondazione Pordenonelegge con Fondazione Treccani Cultura, Istituto Toniolo e Parole O_Stili (edizioni 2023, 2024, 2025 e 2026).

Pagina pensata per l'uso in classe nella scuola secondaria di primo grado.

## Cosa contiene

- **366 card**, una per ogni parola delle quattro edizioni: parola, categoria grammaticale, campo semantico, edizioni in cui compare.
  Sul retro: i link ai PDF ufficiali, alla pagina esatta in cui si trova ogni definizione, e uno schema per scrivere la propria definizione.
- **Cinque modi di sfogliare le card**: indice alfabetico, nuvola di parole, campi semantici (sezioni a scomparsa), edizioni, **Parole della rete** (le parole dei social e delle chat, con domande guida per la cittadinanza digitale e un elenco di parole da definire in classe).
- **Thesaurus**: 202 ruote di parole (relazioni di significato e relazioni tra parole). Le parole presenti nel dizionario aprono la loro card; quelle che hanno una ruota portano alla ruota corrispondente.
- Tasti per ingrandire e rimpicciolire il testo; tema chiaro e scuro automatico.

## Cosa NON contiene (e perché)

Questo repository **non riproduce** i testi delle definizioni, le copertine o altri materiali grafici delle edizioni originali, che appartengono ai rispettivi titolari dei diritti. Per leggere le definizioni, ogni card rimanda ai PDF pubblicati sul sito di pordenonelegge:

- 2023 – [prima edizione](https://www.pordenonelegge.it/tuttolanno/scuola-e-formazione/piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi/piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi-2023)
- 2024 – [seconda edizione](https://www.pordenonelegge.it/tuttolanno/scuola-e-formazione/piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi/piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi-2024/ESITI%20piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi-2024)
- 2025 – [terza edizione](https://www.pordenonelegge.it/tuttolanno/scuola-e-formazione/piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi/piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi-2025/ESITI%20piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi-2025)
- 2026 – [quarta edizione](https://www.pordenonelegge.it/tuttolanno/scuola-e-formazione/piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi/piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi-2026/ESITI%20piccolo-dizionario-immaginario-delle-ragazze-e-dei-ragazzi-2026)

Le ruote del Thesaurus sono materiale originale, preparato per questo progetto didattico: non riproducono thesaurus o dizionari editi.

## File

| File | Contenuto |
|---|---|
| `index.html` | La pagina completa, autonoma (funziona anche aperta dal computer, senza internet tranne i font) |
| `dati/parole.json` | Elenco delle parole: forma, categoria, campo semantico, edizioni e pagine del PDF |
| `dati/thesaurus.json` | Le 202 ruote del Thesaurus |

## Pubblicare con GitHub Pages

1. Carica i file in un repository.
2. In **Settings → Pages**, scegli il ramo `main` e la cartella `/ (root)`.
3. Dopo qualche minuto la pagina è online all'indirizzo indicato da GitHub.

## Note

- I campi semantici e le ruote del Thesaurus sono scelte didattiche e possono essere modificati nei file JSON.
- I numeri di pagina si riferiscono ai PDF ufficiali delle edizioni.
