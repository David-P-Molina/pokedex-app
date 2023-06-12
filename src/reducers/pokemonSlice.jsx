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
        dispatch(setPokemonError(error.message))
    }
  }

const initialState = {
    pokemonList: [],
    pokemon: null,
    isLoading: false,
    error: null,
}
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers: {
        setPokemonList: (state, action) => {
            state.isLoading = false
            state.pokemonList = action.payload;
            state.error = null
        },
        setPokemonError: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
    },
})

export const { setPokemonList, setPokemonError } = pokemonSlice.actions;

export default pokemonSlice.reducer