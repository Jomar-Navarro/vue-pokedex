<script>
import InputSearch from "./partials/InputSearch.vue";
import axios from "axios";
import { store } from "../data/store";
import PokemonDetails from "./partials/pokemonDetails.vue";

export default {
	components: {
		InputSearch,
		PokemonDetails,
	},

	data() {
		return {
			store,
			favoritePokemons: [],
			pokemon: {},
		};
	},

	methods: {
		handleSearch(pokemonName) {
			const fullApi = `${this.store.apiUrl}${pokemonName.toLowerCase()}`;
			axios
				.get(fullApi)
				.then((result) => {
					this.store.pokeList = result.data;
					console.log(this.store.pokeList);
				})
				.catch((error) => {
					console.error("Errore durante la chiamata API: ", error);
					this.store.error = "Pokémon non trovato";
				});
		},

		isPokemonFavorite(pokemonName) {
			// Controlla se il Pokémon è nei preferiti
			return this.favoritePokemons.includes(pokemonName);
		},
		toggleFavorite(pokemonName) {
			// Aggiungi o rimuovi il Pokémon dai preferiti
			if (this.isPokemonFavorite(pokemonName)) {
				// Rimuovi dai preferiti
				this.favoritePokemons = this.favoritePokemons.filter(
					(favorite) => favorite !== pokemonName
				);
			} else {
				// Aggiungi ai preferiti
				this.favoritePokemons.push(pokemonName);
			}
		},
	},
};
</script>

<template>
	<div class="container my-5">
		<InputSearch @search="handleSearch" />
		<div class="d-flex">
			<div>
				<PokemonDetails
					:pokemon="store.pokeList"
					:isFavorite="isPokemonFavorite(store.pokeList.name)"
					@toggle-favorite="toggleFavorite"
				/>
			</div>

			<div class="d-flex flex-column">
				<h2>Pokémon preferiti</h2>
				<ul>
					<li v-for="(favorite, index) in favoritePokemons" :key="index">
						{{ favorite }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
