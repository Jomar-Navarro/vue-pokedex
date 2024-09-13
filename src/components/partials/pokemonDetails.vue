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
	<div class="container position-relative my-5">
		<div v-if="pokemon && pokemon.name">
			<div class="image d-flex justify-content-center">
				<img class="poke" src="/img/Poke.jpg" alt="Pokeball Image" />
				<img
					class="pokemon"
					:src="pokemon.sprites?.other['home'].front_default"
					alt="Pokemon Image"
				/>
			</div>
			<div
				class="favorite-list d-flex align-items-center justify-content-center"
			>
				<h1 class="text-capitalize">{{ pokemon.name }}</h1>
				<i
					:class="isFavorite ? 'fas fa-star' : 'far fa-star'"
					class="star-icon mx-3"
					@click="toggleFavorite"
				></i>
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

<style lang="scss" scoped>
.container {
	border: 1px solid black;
}

.poke {
	width: 400px;
	opacity: 0.6;
}

.pokemon {
	position: absolute;
	bottom: 50%;
	left: 50;
	width: 400px;
	object-fit: fill;
}

.star-icon {
	cursor: pointer;
	font-size: 2rem;
	color: gold;
}

.star-icon:hover {
	transform: scale(1.1);
}
</style>
