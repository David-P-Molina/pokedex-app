import React from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemon } from '../reducers/pokemonSlice'

const Pokedex = () => {
    const pokemon = useSelector((state) => state.pokemon.pokemon)  
    const dispatch = useDispatch() 

    const handleSearch = (name) => {
        dispatch(fetchPokemon(name))
    }
  return (
    <div>Pokedex</div>
  )
}

export default Pokedex