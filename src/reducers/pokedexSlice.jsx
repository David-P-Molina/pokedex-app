import { createSlice } from '@reduxjs/toolkit'

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