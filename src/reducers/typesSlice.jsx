import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllTypes } from "../apis/pokeApi";

export const fetchTypes = createAsyncThunk('types/fetchTypes', async () => {
    const types = await fetchAllTypes()
    return types
})

const initialTypeState = {
    typesList: [],
    status: 'idle',
    error: null,
}

const typesSlice = createSlice({
    name: 'types',
    initialState: initialTypeState,
    reducers: {},
})

export default typesSlice.reducer