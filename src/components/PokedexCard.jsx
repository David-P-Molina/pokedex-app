import { Box } from '@mui/material'
import React from 'react'

const PokedexCard = ({pokedex}) => {
    const {
    version_groups: [{ name: versionGroupName = "", url: versionGroupUrl = "" } = {}] = [],
    region: { name: regionName = "" } = {},
    id = "",
    name: pokedexName = ""
  } = pokedex
  const { description: englishDescription } = pokedex.descriptions.find(
    (desc) => desc.language.name === "en"
  ) || {};
  
  console.log(englishDescription);
  //national pokedex & conquest gallery pokedex are not working
  return (
    <Box className='pokedex-card'>
      ID:{id}<br />
      PokedexName:{pokedexName}<br />
      Description:{englishDescription}<br />
      Region Name:{regionName}<br />
      Version Group Name{versionGroupName}<br />
      URL: {versionGroupUrl}<br />
    </Box>
  )
}

export default PokedexCard