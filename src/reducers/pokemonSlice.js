import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { useGetPokemonByNameQuery, useGetAllPokemonQuery, useGetAllTypesQuery } from '../apis/pokeAPI'
import { pokeApi } from '../apis/pokeApi';

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (name) => {
        const response = await pokeApi.getPokemonByName(name).toPromise();
        return response
    }
)

export const fetchAllPokemon = createAsyncThunk(
    'pokemon/fetchAllPokemon', async () => {
        const response = await pokeApi.getAllPokemon().toPromise();
        return response
    }
)

export const fetchAllTypes = createAsyncThunk(
    'pokemon/fetchAllTypes', async () => {
        const response = await pokeApi.getAllTypes().toPromise();
        return response
    }
)
const initialState = {
    allPokemon: [],
    allTypes: [],
    pokemon: null,
    isLoading: false,
    error: null,
}
const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //Cases for getting all Pokemon
            .addCase(fetchAllPokemon.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllPokemon.fulfilled, (state, action) => {
                state.isLoading = false
                state.allPokemon = action.payload
            })
            .addCase(fetchAllPokemon.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
            //Cases for getting all Types
            .addCase(fetchAllTypes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllTypes.fulfilled, (state, action) => {
                state.isLoading = false
                state.allTypes = action.payload
            })
            .addCase(fetchAllTypes.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message
            })
            //Cases for getting single Pokemon
            .addCase(fetchPokemon.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchPokemon.fulfilled, (state, action) => {
                state.isLoading = false
                state.pokemon = action.payload
            })
            .addCase(fetchPokemon.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    }
})

export default pokemonSlice.reducer