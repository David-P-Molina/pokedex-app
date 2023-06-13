import React, { useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import PokedexCard from '../components/PokedexCard'

const Pokedex = () => {
  const dispatch = useDispatch() 
    
    useEffect(() => {
    }, [dispatch])
    
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