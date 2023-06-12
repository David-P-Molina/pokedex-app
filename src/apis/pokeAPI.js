// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseURL } from '../utils'

export const fetchPokemonList = async (limit) => {
    const response = await fetch(`${baseURL}pokemon?limit=${limit}`)
    const data = await response.json()
    return data.results
  }

export const fetchOnePokemonInfo = async ({ pokemonURL }) => {
    const response = await fetch(`${pokemonURL}`)
    const data = await response.json()
    return data
}

// export const pokeApi = createApi({
//     reducerPath: 'pokeApi',
//     baseQuery: fetchBaseQuery({ baseUrl: baseURL}),
//     endpoints: (builder) => ({
//         getPokemonByName: builder.query({
//             query: (name)=> `pokemon/${name}`
//         }),
//         getAllPokemon: builder.query({
//             query: () => 'pokemon',
//         }),
//     })    
// })


// export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = pokeApi