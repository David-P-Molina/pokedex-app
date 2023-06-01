import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { pokeApi } from "../apis/pokeAPI";
import pokemonReducer from "../reducers/pokemonSlice";

const store = configureStore({
    reducer: {
        [pokeApi.reducerPath]: pokeApi.reducer,//specific to api calls and adding them to state
        pokemon: pokemonReducer,//specific to any reducers needed
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokeApi.middleware)
    //part of redux toolkit adding middleware(thunk) to reducer
})

export default store