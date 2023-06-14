import React, { useEffect } from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import PokedexCard from '../components/PokedexCard'
import { fetchPokedexListAsync } from '../reducers/pokedexSlice'
import ErrorCard from '../components/ErrorCard'
import NationalPokedexCard from '../components/NationalPokedexCard'

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
      {pokedexError && <ErrorCard componentName='Pokedex' error={pokedexError}/>}
      <Grid>
        {pokedexList.map((dex) => {
          if (dex.id === 1 || dex.id === 11) {
            //National id:1 and conquest pokedex id:11 entries
            return <NationalPokedexCard />;
          } else if (dex.id === 11) {
            return null
          }
           return <PokedexCard key={dex.name} pokedex={dex}/>
          })
        }
      </Grid>
    </Box>
  )
}

export default Pokedex