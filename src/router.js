import { createRouter, createWebHistory } from "vue-router";
import PokemonDetails from "./components/partials/pokemonDetails.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/pokemon/:name",
			name: "PokemonDetails",
			component: PokemonDetails,
			props: true,
		},
	],
});

export { router };
