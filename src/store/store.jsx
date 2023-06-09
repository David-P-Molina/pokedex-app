import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { pokeApi } from "../apis/pokeApi";
import pokemonReducer from "../reducers/pokemonSlice";
import typesReducer from "../reducers/typesSlice";
import pokedexReducer from "../reducers/pokedexSlice"

const store = configureStore({
    reducer: {
        // [pokeApi.reducerPath]: pokeApi.reducer,//specific to api calls and adding them to state
        pokemon: pokemonReducer,//specific to any reducers needed
        types: typesReducer,
        pokedex: pokedexReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()//.concat(pokeApi.middleware)
    //part of redux toolkit adding middleware(thunk) to reducer
})

export default store