<script>
export default {
	data() {
		return {
			pokemonToSearch: "",
		};
	},

	methods: {
		startSearch() {
			if (this.pokemonToSearch) {
				this.$emit("search", this.pokemonToSearch);
			} else {
				console.error("Il campo di ricerca è vuoto!");
			}
		},
	},
};
</script>

<template>
	<form @submit.prevent="startSearch" class="d-flex justify-content-center">
		<label for="pokemon" class="form-label me-3">Search a Pokémon: </label>
		<input
			v-model.trim="pokemonToSearch"
			type="text"
			id="pokemon"
			class="d-flex justify-content-center"
			placeholder="Type to search a Pokémon..."
		/>
		<button type="submit">Cerca</button>
	</form>
</template>

<style lang="scss" scoped></style>
