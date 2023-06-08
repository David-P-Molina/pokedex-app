import { createSlice } from '@reduxjs/toolkit'
import { fetchAllTypes, fetchOneType } from '../apis/typeApi'

const initialState = {
    pokedexList: [],
    status: 'idle',
    error: null,
}

const pokedexSlice = createSlice({
    name: 'pokedexs',
    initialState: initialState,
    reducers: {}
})