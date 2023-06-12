import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllTypes, fetchOneType } from "../apis/typeApi";

export const fetchTypes = createAsyncThunk('types/fetchTypes', async () => {
  try{
    const types = await fetchAllTypes()
    const typePromises = types.map((type) => fetchOneType({ typeURL: type.url }))
    const typeResponses = await Promise.all(typePromises)
    const typesWithDetails = typeResponses.map(((res) => res))
    dispatch(setTypesList(typesWithDetails))
  } catch (error) {
    dispatch(setTypesError(error.message))
  }
})

const initialTypeState = {
    typesList: [],
    isLoading: true,
    error: null,
}

const typesSlice = createSlice({
    name: 'types',
    initialState: initialTypeState,
    reducers: {
      setTypesList: (state, action) => {
        state.isLoading = false
        state.typesList = action.payload
        state.error = null
      },
      setTypesError: (state, action) => {
        state.isLoading = false
        state.error = action.payload
      },
    },
  },
);

export const { setTypesList, setTypesError} = typesSlice.actions

export default typesSlice.reducer