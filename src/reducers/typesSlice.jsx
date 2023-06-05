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
    extraReducers: (builder) => {
      builder
        .addCase(fetchTypes.pending, (state) => {
          state.status = 'loading'
        })
        .addCase(fetchTypes.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.typesList = action.payload
        })
        .addCase(fetchTypes.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        });
    },
  });

export default typesSlice.reducer