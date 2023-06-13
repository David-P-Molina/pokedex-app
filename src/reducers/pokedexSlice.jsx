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
    pokedexInfoList: [],
    status: 'idle',
    error: null,
}

const pokedexSlice = createSlice({
    name: 'pokedexs',
    initialState: initialState,
    reducers: {
        setPokedexList: (state, action) => {
            state.pokedexList = action.payload
        }
    }
})

export const { setPokedexList } = pokedexSlice.actions
export default pokedexSlice.reducer