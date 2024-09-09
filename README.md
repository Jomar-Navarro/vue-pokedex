# Pokémon Pokédex

## Descrizione

Questo progetto è un'applicazione web sviluppata con Vue.js che consente agli utenti di cercare un Pokémon, come se fosse un pokédex, utilizzando l'API di PokeAPI. Gli utenti possono inserire il nome di un Pokémon e visualizzare dettagli come nome, altezza, peso, tipi e statistiche.

## Tecnologie Utilizzate

- **Vue.js**: Framework JavaScript per la creazione di interfacce utente.
- **Axios**: Libreria per effettuare richieste HTTP.
- **PokeAPI**: API per accedere a dati sui Pokémon.

## Caratteristiche

- Ricerca di Pokémon per nome.
- Visualizzazione delle informazioni sui Pokémon, tra cui:
  - Nome
  - Tipi
  - Altezza
  - Peso
  - Statistiche (HP, Attacco, Difesa, etc.)
- Gestione degli errori per Pokémon non esistenti.

## Installazione

1. **Clona il repository:**

   ```bash
   git clone https://github.com/tuo-username/pokemon-search-app.git
   cd pokemon-search-app
   ```

2. **Installa le dipendenze:**

   ```bash
   npm install
   ```

3. **Avvia l'applicazione:**

   ```bash
   npm run dev
   ```

4. **Utilizzo**

   1. Nella homepage dell'app, inserisci il nome di un Pokémon nel campo di ricerca.
   2. Clicca sul pulsante "Cerca" per visualizzare le informazioni del Pokémon.
   3. Se il Pokémon non esiste, verrà visualizzato un messaggio di errore.

**Struttura del Progetto**

```

src/
├── components/
│ ├── Header.vue
│ ├── Footer.vue
│ ├── Main.vue
│ └── PokemonDetails.vue
├── data/
│ └── store.js
├── partials/
│ └── InputSearch.vue
└── App.vue
```
