import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemonList, fetchOnePokemonInfo } from '../apis/pokeApi';

export const fetchPokemonListAsync = (limit) => async (dispatch) => {
    try {
        dispatch(setIsLoading(true))
        const pokemonList = await fetchPokemonList(limit);
        const pokemonListPromises = pokemonList.map((pokemon) => fetchOnePokemonInfo({ pokemonURL: pokemon.url}))
        const pokemonListResponses = await Promise.all(pokemonListPromises)
        const pokemonWithDetails = pokemonListResponses.map(((res) => res))
        dispatch(setPokemonList(pokemonWithDetails));
    } catch (error) {
        dispatch(setPokemonError(error.message))
    } finally {
        dispatch(setIsLoading(false))
    }
  }

const initialState = {
    pokemonList: [],
    isLoading: true,
    error: null,
}
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers: {
        setPokemonList: (state, action) => {
            state.pokemonList = action.payload;
            state.error = null
        },
        setPokemonError: (state, action) => {
            state.error = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
})

export const { setPokemonList, setPokemonError, setIsLoading } = pokemonSlice.actions;

export default pokemonSlice.reducer