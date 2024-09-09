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
	},
};
</script>

<template>
	<div class="container my-5">
		<InputSearch @search="handleSearch" />
		<PokemonDetails :pokemon="store.pokeList" />
	</div>
</template>

<style lang="scss" scoped></style>
