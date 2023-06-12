import { baseURL } from '../utils';

export const fetchAllPokedexs = async () => {
    const response = await fetch(`${baseURL}pokedex`)
    const data = await response.json()
    return data.results
}

export const fetchSinglePokedex = async ({ pokedexURL }) => {
    const response = await fetch(pokedexURL)
    const data = await response.json()
    return data
}