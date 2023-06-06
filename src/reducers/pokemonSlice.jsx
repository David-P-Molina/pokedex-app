import { createSlice } from '@reduxjs/toolkit'
import { fetchPokemonList } from '../apis/pokeApi';

export const fetchPokemonListAsync = (limit) => async (dispatch) => {
    const pokemonList = await fetchPokemonList(limit);
    dispatch(setPokemonList(pokemonList));
  };
export const fetchPokeInfoAsync = (limit) => async (dispatch) => {
    const pokemonList = await fetchPokemonList(limit);
    dispatch(setPokemonList(pokemonList));
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