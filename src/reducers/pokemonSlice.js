import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useGetPokemonByNameQuery } from '../apis/pokeAPI'

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async (name) => {
        const response = await useGetPokemonByNameQuery(name)
        return response
    }
)