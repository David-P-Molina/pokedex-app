import { configureStore } from "@reduxjs/toolkit";
import { pokeApi } from "../apis/pokeAPI";
import pokemonReducer from "../reducers/pokemonSlice";

const store = configureStore({
    reducer: {
        [pokeApi.reducerPath]: pokeApi.reducer,
        pokemon: pokemonReducer,
    }
})