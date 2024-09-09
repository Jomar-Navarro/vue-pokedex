<script>
export default {
	props: {
		pokemon: Object,
	},
};
</script>

<template>
	<div v-if="pokemon && pokemon.name">
		<h1 class="text-capitalize">{{ pokemon.name }}</h1>
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
</template>

<style lang="scss" scoped></style>
