import React, { useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemon, fetchAllPokemon, fetchAllTypes, fetchPokemonListAsync, fetchPokeInfoAsync } from '../reducers/pokemonSlice'
import { pokeApi } from '../apis/pokeApi';
import { constructPokeObject } from '../utils';

const Pokedex = () => {
  const dispatch = useDispatch() 
  const pokemon = useSelector((state) => state.pokemon.pokemon)
  const pokemonList = useSelector((state) => state.pokemon.pokemonList)
  // const allPokemon = useSelector((state) => state.pokemon.allPokemon);
  // const allTypes = useSelector((state) => state.pokemon.allTypes);
  
    useEffect(() => {
      // dispatch(fetchAllPokemon())
      // dispatch(fetchAllTypes())
      dispatch(fetchPokemonListAsync(2))
    }, [dispatch])
    //Fetch IndividualPokemon
    useEffect(() => {
      //fetch call based on url
      const allPokemonInfo = []
      pokemonList.forEach((pokemon,index) => {
        let pokeInfo = dispatch(fetchPokeInfoAsync(pokemon))
        let assembledPokeObj = constructPokeObject(pokeInfo, index)
        allPokemonInfo.push(assembledPokeObj)// should this be done in pokemonSlice.js
      })
    }, [])
    
    if(!pokemonList > 0) return "Loading..."
  return (
    <Grid>
        <h1>Pokemon List</h1>
        {pokemonList.map((pokemon) => (
          <Box>
            <Typography 
              key={pokemon.name}
              variant='h3' 
              textTransform='capitalize'>
              {pokemon.name}
            </Typography>
          </Box>
          )
        )}
    </Grid>
  )
}

export default Pokedex