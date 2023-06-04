import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemon, fetchAllPokemon, fetchAllTypes, fetchPokemonListAsync } from '../reducers/pokemonSlice'
import { pokeApi } from '../apis/pokeApi';

const Pokedex = () => {
  const dispatch = useDispatch() 
  const pokemon = useSelector((state) => state.pokemon.pokemon)
  const pokemonList = useSelector((state) => state.pokemon.pokemonList)
  const allPokemon = useSelector((state) => state.pokemon.allPokemon);
  const allTypes = useSelector((state) => state.pokemon.allTypes);
  
  const handleSearch = (name) => {
    dispatch(fetchPokemon(name))
  }
    useEffect(() => {
      dispatch(fetchAllPokemon())
      dispatch(fetchAllTypes())
      dispatch(fetchPokemonListAsync(20))
    }, [dispatch])
    // useEffect(() => {
    //   // Log the fetched data
    //   console.log('All Pokemon:', allPokemon);
    //   console.log('All Types:', allTypes);
    // }, [allPokemon, allTypes]);
    if(!pokemonList > 0) return "Loading..."
  return (
    <Grid>
        <h1>Pokemon List</h1>
        {pokemonList.map((pokemon) => (
          <p key={pokemon.name}>{pokemon.name}</p>
          )
        )}
    </Grid>
  )
}

export default Pokedex