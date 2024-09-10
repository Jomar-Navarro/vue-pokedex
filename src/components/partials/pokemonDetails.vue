<script>
export default {
	props: {
		pokemon: Object,
		isFavorite: Boolean,
	},

	methods: {
		toggleFavorite() {
			if (this.pokemon && this.pokemon.name) {
				this.$emit("toggle-favorite", this.pokemon.name);
			}
		},
	},
};
</script>

<template>
	<div class="container">
		<div v-if="pokemon && pokemon.name">
			<div class="favorite-list d-flex align-items-center">
				<h1 class="text-capitalize">{{ pokemon.name }}</h1>
				<button @click="toggleFavorite" class="btn btn-warning h-25 mx-3">
					{{ isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti" }}
				</button>
			</div>
			<p>
				Type:
				<span
					class="badge text-bg-info mx-1"
					v-for="(type, index) in pokemon.types"
					:key="index"
				>
					{{ type.type.name }}
				</span>
			</p>
			<p>Heigth: {{ pokemon.height }}</p>
			<p>Weigth: {{ pokemon.weight }}</p>
			<div>
				<h3>Stats</h3>
				<ul>
					<li v-for="(stat, index) in pokemon.stats" :key="index">
						{{ stat.stat.name }}: {{ stat.base_stat }}
					</li>
				</ul>
			</div>
		</div>

		<div v-else class="text-center">
			<h1>Cerca un Pokémon</h1>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
