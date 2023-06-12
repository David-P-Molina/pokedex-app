import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemonListAsync } from '../reducers/pokemonSlice'
import PokemonCard from '../components/PokemonCard';

const PokemonDetail = () => {
  const dispatch = useDispatch() 
  const pokemonList = useSelector((state) => state.pokemon.pokemonList)
  const pokemonError = useSelector((state) => state.pokemon.error)
  useEffect(() => {
    dispatch(fetchPokemonListAsync(2))
  }, [dispatch])

  if(!pokemonList > 0) return "Loading..."
  return (
    <Grid>
        <h1>Pokemon List</h1>
        <ErrorCard error={pokemonError}></ErrorCard>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
          )
        )}
    </Grid>
  )
}

export default PokemonDetail