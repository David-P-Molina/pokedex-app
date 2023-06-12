import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTypes, fetchOneType } from "../apis/typeApi";

export const fetchTypes = () => async (dispatch) => {
  try{
    dispatch(setIsLoading(true))
    const types = await fetchAllTypes()
    const typePromises = types.map((type) => fetchOneType({ typeURL: type.url }))
    const typeResponses = await Promise.all(typePromises)
    const typesWithDetails = typeResponses.map(((res) => res))
    dispatch(setTypesList(typesWithDetails))
  } catch (error) {
    dispatch(setTypesError(error.message))
  } finally {
    dispatch(setIsLoading(false))
  }
}

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
        state.typesList = action.payload
        state.error = null
      },
      setTypesError: (state, action) => {
        state.error = action.payload
      },
      setIsLoading: (state, action) => {
        state.isLoading = action.payload
      }
    },
  },
);

export const { setTypesList, setTypesError, setIsLoading } = typesSlice.actions

export default typesSlice.reducer