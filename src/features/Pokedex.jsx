import React, { useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material'
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
      dispatch(fetchPokemonListAsync(2))
    }, [dispatch])
    //Fetch IndividualPokemon
    useEffect(() => {
      //fetch call based on url
      const allPokemonInfo = []
      pokemonList.forEach((pokemon,index) => {
        let pokeInfo = dispatch(fetchPokeInfo(pokemon))
        let pokeObject = {
          height: pokeInfo['height'],
          weight: pokeInfo['weight'],
          types: [pokeInfo.types[0], pokeInfo.types[1]],
          id: pokeInfo['id'],
          img: pokeInfo.sprites.versions.generation-viii.icons.front_default,
          key: index,
        }; //construct necessary info, type, evolutions, description, etc.
        allPokemonInfo.push(pokeObject)
      })
    }, [pokemonList])
    
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