import React, { useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import PokedexCard from '../components/PokedexCard'
import { fetchPokedexListAsync } from '../reducers/pokedexSlice'

const Pokedex = () => {
  const dispatch = useDispatch() 
  const pokedexList = useSelector((state) => state.pokedex.pokedexList)
    useEffect(() => {
      dispatch(fetchPokedexListAsync())
    }, [dispatch])
    console.log(pokedexList)
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