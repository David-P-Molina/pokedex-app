import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../utils'

export const fetchPokemonList = async (limit) => {
    const response = await fetch(`${baseURL}pokemon?limit=${limit}`)
    const data = await response.json()
    return data.results
  }

  //Need to redo to fetch actual pokemonTypes and get working
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