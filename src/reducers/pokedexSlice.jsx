import { createSlice } from '@reduxjs/toolkit'
import { fetchAllTypes, fetchOneType } from '../apis/typeApi'

const initialState = {
    pokedexList: [],
    status: 'idle',
    error: null,
}