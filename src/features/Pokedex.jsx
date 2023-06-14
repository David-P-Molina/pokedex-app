import React, { useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import PokedexCard from '../components/PokedexCard'
import { fetchPokedexListAsync } from '../reducers/pokedexSlice'

const Pokedex = () => {
  const dispatch = useDispatch() 
  const pokedexList = useSelector((state) => state.pokedex.pokedexList)
  const pokedexError = useSelector((state) => state.pokedex.error)
  const pokedexLoading = useSelector((state) => state.pokedex.isLoading)
    useEffect(() => {
      dispatch(fetchPokedexListAsync())
    }, [dispatch])

  if(pokedexLoading) return "...loading Pokedex Info"
  return (
    <Box>
      <Typography variant='h3'>Pokedex List</Typography>
      <Grid>
        <PokedexCard />
      </Grid>
    </Box>
  )
}

export default Pokedex