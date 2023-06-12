import React from 'react'
import { Box, Typography } from '@mui/material'

const PokemonCard = ({ pokemon }) => {
  return (
    <Box key={pokemon.name} className='pokemon-card'>
    <Box 
      component='img' 
      alt={pokemon.name}
      src={pokemon?.src}
      sx={{
        height: 350,
        width: 350,
        maxHeight: { xs: 233, md: 200 },
        maxWidth: { xs: 350, md: 300 },
      }}
      />
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