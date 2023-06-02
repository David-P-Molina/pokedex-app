import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemon, fetchAllPokemon, fetchAllTypes } from '../reducers/pokemonSlice'
import { pokeApi } from '../apis/pokeApi';
const Pokedex = () => {
  const dispatch = useDispatch() 
  const pokemon = useSelector((state) => state.pokemon.pokemon)
  const allPokemon = useSelector((state) => state.pokemon.allPokemon);
  const allTypes = useSelector((state) => state.pokemon.allTypes);
  
  const handleSearch = (name) => {
    dispatch(fetchPokemon(name))
  }
    useEffect(() => {
      dispatch(fetchAllPokemon())
      dispatch(fetchAllTypes())
      
    }, [dispatch])
    useEffect(() => {
      // Log the fetched data
      console.log('All Pokemon:', allPokemon);
      console.log('All Types:', allTypes);
    }, [allPokemon, allTypes]);
  return (
    <Grid>
        Holder{/* pokemon ui */}
    </Grid>
  )
}

export default Pokedex