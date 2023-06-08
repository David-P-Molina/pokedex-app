import { baseURL } from '../utils';

export const fetchAllPokedexs = async () => {
    const response = await fetch(`${baseURL}pokedex`)
    const data = await response.json()
    return data.results
}