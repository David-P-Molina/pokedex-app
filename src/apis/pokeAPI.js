import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../utils'

export const fetchPokemonList = async (limit) => {
    const response = await fetch(`${baseURL}pokemon?limit=${limit}`)
    const data = await response.json()
    return data.results
  }

export const fetchAllTypes = async () => {
    const response = await fetch(`${baseURL}type`)
    const data = await response.json()
    return data.results
}

export const fetchOneType = async ({ typeURL }) => {
    const response = await fetch(`${typeURL}`)
    const data = await response.json()
    return data
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