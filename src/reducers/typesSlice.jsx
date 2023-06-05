import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllTypes, fetchOneType } from "../apis/pokeApi";

export const fetchTypes = createAsyncThunk('types/fetchTypes', async () => {
    const types = await fetchAllTypes()
    const typePromises = types.map((type) => fetchOneType({ typeURL: type.url }))
    const typeResponses = await Promise.all(typePromises)
    const typesWithDetails = typeResponses.map((res) => res.results)
    return typesWithDetails
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