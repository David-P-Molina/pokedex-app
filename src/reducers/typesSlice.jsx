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
    extraReducers: (builder) => {
        builder
          .addCase(fetchTypes.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchTypes.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.typesList = action.payload;
          })
          .addCase(fetchTypes.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})

export default typesSlice.reducer