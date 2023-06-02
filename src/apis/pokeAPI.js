import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../utils'

export const fetchPokemonList = async (limit) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    const data = await response.json()
    return data.results
  }

export const pokeApi = createApi({
    reducerPath: 'pokeApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name)=> `pokemon/${name}`
        }),
        getAllPokemon: builder.query({
            query: () => 'pokemon',
        }),
        getAllTypes: builder.query({
            query: () => 'type',
        }),
    })    
})


export const { useGetPokemonByNameQuery, useGetAllPokemonQuery, useGetAllTypesQuery } = pokeApi