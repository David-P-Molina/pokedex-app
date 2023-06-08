import { createSlice } from '@reduxjs/toolkit'
import { fetchAllPokedexs } from '../apis/pokedexApi'

export const fetchPokedexListAsync = () => async (dispatch) => {
    const pokedexList = await fetchAllPokedexs()
    dispatch(setPokedexList(pokedexList))
}

const initialState = {
    pokedexList: [],
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