import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../utils'

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
    })    
})


export const { useGetPokemonByNameQuery, getAllPokemon } = pokeApi