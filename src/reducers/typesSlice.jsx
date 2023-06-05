import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllTypes } from "../apis/pokeApi";

export const fetchTypes = createAsyncThunk('types/fetchTypes', async () => {
    const types = await fetchAllTypes()
    return types
})

const initialState = {
    typesList: [],
    status: 'idle',
    error: null,
}