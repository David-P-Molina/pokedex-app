import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

const Pokedex = () => {
  const dispatch = useDispatch() 
  
    useEffect(() => {
    }, [dispatch])
    
  return (
    <Grid>
    </Grid>
  )
}

export default Pokedex