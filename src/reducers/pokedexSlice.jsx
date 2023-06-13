import { createSlice } from '@reduxjs/toolkit'
import { fetchAllPokedexs } from '../apis/pokedexApi'

export const fetchPokedexListAsync = () => async (dispatch) => {
    try {
        dispatch(setIsLoading(true))
        const pokedexList = await fetchAllPokedexs()
        dispatch(setPokedexList(pokedexList))
    } catch (error) {
        dispatch(setPokedexError(error.message))
    } finally {
        dispatch(setIsLoading(false))
    }
}

// export const fetchPokedexInfo = () => async (dispatch) => {
//     const singlePokedexInfo = await fetchSinglePokedexInfo()
//     dispatch(setPokedexInfo(singlePokedexInfo))
// }

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