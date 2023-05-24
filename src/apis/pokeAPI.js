import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseURL = 'https://pokeapi.co/api/v2/'
export const pokeApi = createApi({
    reducerPath: 'pokeApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
})
export const { useGetPokemonByNameQuery } = pokeApi