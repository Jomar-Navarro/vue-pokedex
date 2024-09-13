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
		<input
			v-model.trim="pokemonToSearch"
			type="text"
			id="pokemon"
			class="input d-flex justify-content-center"
			placeholder="Type to search a Pokémon..."
		/>
		<button type="submit" class="btn">
			<img class="poke" src="/img/Poke.jpg" alt="" />
		</button>
	</form>
</template>

<style lang="scss" scoped>
.input {
	width: 25%;
	padding: 5px;
	font-size: 16px;
	border-width: 2px;
	border-color: #000000;
	background-color: #ffffff;
	color: #000000;
	border-style: outset;
	border-radius: 50px;
	box-shadow: 0px 0px 10px rgba(66, 66, 66, 0.75);
	text-shadow: 0px 0px 10px rgba(66, 66, 66, 0.75);

	&:focus {
		outline: none;
	}
}

.poke {
	width: 30px;
}
</style>
