import React from 'react'
import { Box, Typography } from '@mui/material'

const PokemonCard = ({ pokemon }) => {
  return (
    <Box key={pokemon.name} className='pokemon-card'>
            <Typography 
              key={pokemon.name}
              variant='h3' 
              textTransform='capitalize'>
              {pokemon.name}
            </Typography>
          </Box>
  )
}

export default PokemonCard