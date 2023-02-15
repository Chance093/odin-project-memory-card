import axios from 'axios';

async function getPokemonURLs() {
	const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=12');
	const pokemonURLs = response.data.results.map((pokemon) => {
		return pokemon.url;
	});
	return pokemonURLs;
}

async function getPokemons() {
	const URLs = await getPokemonURLs();
	const promises = URLs.map((url) => {
		return axios.get(url);
	});
	const response = await Promise.all(promises);
	const data = response.map((response) => {
		return response.data;
	});
	return data;
}

export default getPokemons;
