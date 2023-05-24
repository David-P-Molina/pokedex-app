import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
//What is createApi
//What is fetchBase Query
import { baseURL } from '../utils'
//Why import baseURL and import it

export const pokeApi = createApi({
    reducerPath: 'pokeApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
})

export const { useGetPokemonByNameQuery } = pokeApi
//Why did ChatGPT write it like this?