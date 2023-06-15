import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemonListAsync } from '../reducers/pokemonSlice'
import PokemonCard from '../components/PokemonCard';
import ErrorCard from '../components/ErrorCard';
import { CircularProgress } from '@mui/material'

const PokemonDetail = () => {
  const dispatch = useDispatch() 
  const pokemonList = useSelector((state) => state.pokemon.pokemonList)
  const pokemonError = useSelector((state) => state.pokemon.error)
  useEffect(() => {
    dispatch(fetchPokemonListAsync(2))
  }, [dispatch])

  if(!pokemonList > 0) return <CircularProgress />
  return (
    <Grid>
        <h1>Pokemon List</h1>
        {pokemonError && <ErrorCard componentName='Pokemon List' error={pokemonError}></ErrorCard>}
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
          )
        )}
    </Grid>
  )
}

export default PokemonDetail