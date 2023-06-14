import { createSlice } from '@reduxjs/toolkit'
import { fetchAllPokedexs, fetchSinglePokedex } from '../apis/pokedexApi'

export const fetchPokedexListAsync = () => async (dispatch) => {
    try {
        dispatch(setIsLoading(true))
        const pokedexList = await fetchAllPokedexs()
        const pokedexPromises = pokedexList.map((dex) => fetchSinglePokedex({pokedexURL: dex.url}))
        const pokedexResponses = await Promise.all(pokedexPromises)
        const pokedexWithDetails = pokedexResponses.map((res) => res)
        dispatch(setPokedexList(pokedexWithDetails))
    } catch (error) {
        dispatch(setPokedexError(error.message))
    } finally {
        dispatch(setIsLoading(false))
    }
}

const initialState = {
    pokedexList: [],
    isLoading: false,
    error: null,
}

const pokedexSlice = createSlice({
    name: 'pokedexs',
    initialState: initialState,
    reducers: {
        setPokedexList: (state, action) => {
            state.pokedexList = action.payload
        },
        setPokedexError: (state, action) => {
            state.error = action.payload
        },
        setIsLoading: (state,action) => {
            state.isLoading = action.payload
        }
    }
})

export const { setPokedexList, setIsLoading, setPokedexError } = pokedexSlice.actions
export default pokedexSlice.reducer