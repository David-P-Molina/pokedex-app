import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useGetPokemonByNameQuery, useGetAllPokemonQuery, useGetAllTypesQuery } from '../apis/pokeAPI'

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (name) => {
        const response = await useGetPokemonByNameQuery(name)
        return response
    }
)

export const fetchAllPokemon = createAsyncThunk(
    'pokemon/fetchAllPokemon', async () => {
        const response = await useGetAllPokemonQuery()
        return response
    }
)

export const fetchAllTypes = createAsyncThunk(
    'pokemon/fetchAllTypes', async () => {
        const response = await useGetAllTypesQuery()
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
            .addCase(fetchAllPokemon.pending, (state => {
                state.isLoading = true
            }))
            .addCase(fetchAllPokemon.fulfilled, (state => {
                state.isLoading = false
                state.allPokemon = state.payload
            }))
            .addCase(fetchAllPokemon.rejected, (state => {
                state.isLoading = false;
                state.error = state.error.message
            }))
            //Cases for getting all Types
            .addCase(fetchAllTypes.pending, (state => {
                state.isLoading = true
            }))
            .addCase(fetchAllTypes.fulfilled, (state => {
                state.isLoading = false
                state.allTypes = state.payload
            }))
            .addCase(fetchAllTypes.rejected, (state => {
                state.isLoading = false;
                state.error = state.error.message
            }))
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