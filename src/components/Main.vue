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
			return this.favoritePokemons.includes(pokemonName);
		},
		toggleFavorite(pokemonName) {
			if (this.isPokemonFavorite(pokemonName)) {
				this.favoritePokemons = this.favoritePokemons.filter(
					(favorite) => favorite !== pokemonName
				);
			} else {
				this.favoritePokemons.push(pokemonName);
			}
		},
	},
};
</script>

<template>
	<div class="container my-5">
		<InputSearch @search="handleSearch" />
		<div>
			<div id="details">
				<PokemonDetails
					:pokemon="store.pokeList"
					:isFavorite="isPokemonFavorite(store.pokeList.name)"
					@toggle-favorite="toggleFavorite"
				/>
			</div>

			<!-- <div class="d-flex flex-column">
				<h2>Pokémon preferiti</h2>
				<ul>
					<li v-for="(favorite, index) in favoritePokemons" :key="index">
						<router-link
							:to="{ name: 'PokemonDetails', params: { name: favorite } }"
							>{{ favorite }}</router-link
						>
					</li>
				</ul>
			</div> -->
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
