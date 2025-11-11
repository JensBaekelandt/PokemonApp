# Pokémon Mobile App - Mobile Applications 1 Exams


## Projectomschrijving
A simple mobile application built with React Native (Expo) that displays a list of Pokémon fetched from the PokéAPI
.
Users can search, sort, and filter Pokémon, and view detailed information about each Pokémon on a separate screen.
The app also includes a static Profile tab showing developer info.


## Navigatie
Bottom Tabs:
Home — list of Pokémon
Profile — static personal info

Stack Navigation within Home:
List → Detail → Back

## API
List: https://pokeapi.co/api/v2/pokemon?limit=1025

Detail: https://pokeapi.co/api/v2/pokemon/{name}

Species: https://pokeapi.co/api/v2/pokemon-species/{name} (for flavor text)


## Run-instructies
1. Clone repo https://github.com/JensBaekelandt/PokemonApp.git
2. cd PokemonApp
3. npm install
4. npx expo start or npm start (Open the app using Expo Go on your smartphone.)


## Zoeken en sorteren
- Searching: live filtering by Pokémon name 
- Sorting: name A→Z / Z→A, id ↑ / ↓
- Filtering: Gen 1 only (id ≤ 151)
- Logic implemented in: `SearchSortBar.js` en `HomeScreen.js`
- Performance: Uses FlashList from @shopify/flash-list for efficient rendering.