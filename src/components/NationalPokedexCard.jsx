import React from 'react'
import { Box, Typography,  } from '@mui/material'

const NationalPokedexCard = (pokedex) => {
  return (
    <Box>
        <Typography variant='h4'>
            {pokedex.name}
        </Typography>
        NationalPokedexCard
    </Box>
  )
}

export default NationalPokedexCard