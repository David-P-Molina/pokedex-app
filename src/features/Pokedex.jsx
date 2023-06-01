import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemon, fetchAllPokemon, fetchAllTypes } from '../reducers/pokemonSlice'

const Pokedex = () => {
    const pokemon = useSelector((state) => state.pokemon.pokemon)  
    const dispatch = useDispatch() 

    const handleSearch = (name) => {
        dispatch(fetchPokemon(name))
    }
    useEffect(() => {
      dispatch(fetchAllPokemon())
      dispatch(fetchAllTypes())
    }, )
    
  return (
    <Grid>
        Holder{console.log(pokemon)}{/* pokemon ui */}
    </Grid>
  )
}

export default Pokedex