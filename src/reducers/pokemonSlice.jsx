import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemonList, fetchOnePokemonInfo } from '../apis/pokeApi';

export const fetchPokemonListAsync = (limit) => async (dispatch) => {
    try {
        const pokemonList = await fetchPokemonList(limit);
        const pokemonListPromises = pokemonList.map((pokemon) => fetchOnePokemonInfo({ pokemonURL: pokemon.url}))
        const pokemonListResponses = await Promise.all(pokemonListPromises)
        const pokemonWithDetails = pokemonListResponses.map(((res) => res))
        dispatch(setPokemonList(pokemonWithDetails));
    } catch (error) {
        dispatch(setError(error.message))
    }
  };

const initialState = {
    pokemonList: [],
    pokeInfoList: [],
    pokemon: null,
    isLoading: false,
    error: null,
}
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers: {
        setPokemonList: (state, action) => {
            state.pokemonList = action.payload;
        },
        setPokeInfoList: (state, action) => {
            state.pokeInfoList = [...state.pokeInfoList, action.payload]
        },
    },
})

export const { setPokemonList } = pokemonSlice.actions;

export default pokemonSlice.reducer