import React from 'react'
import { Box, Typography,  } from '@mui/material'

const NationalPokedexCard = (pokedex) => {
    console.log(pokedex)
    const { id, pokedexName, regionName = "", versionGroupName = "" } = pokedex
    // const { description: englishDescription } = pokedex.descriptions.find(
    //     (desc) => desc.language.name === "en"
    //   ) || {};
    console.log(id)
    console.log(pokedexName)
  return (
    <Box className='pokedex-card'>
      <Typography>ID: {id}</Typography>
      <Typography>PokedexName: {pokedexName}</Typography>
      {/* <Typography>Description: {englishDescription}</Typography> */}
      <Typography>Region Name: {regionName}</Typography>
      <Typography>Version Group Name {versionGroupName}</Typography>
    </Box>
  )
}

export default NationalPokedexCard