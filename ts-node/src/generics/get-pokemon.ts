import axios from 'axios';
import { Pokemon } from '../interfaces/pokemon';

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
	const resp = axios.get<Pokemon>(
		`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
	);
	console.log((await resp).data);
	return (await resp).data;
};
