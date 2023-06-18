import { Box, Typography } from '@mui/material'
import React from 'react'

const PokedexCard = ({ pokedex }) => {
  const {
  version_groups: [{ name: versionGroupName = "", url: versionGroupUrl = "" } = {}] = [],
  region: { name: regionName = "" } = {}, id = "", name: pokedexName = ""
  } = pokedex
  const { description: englishDescription } = pokedex.descriptions.find(
    (desc) => desc.language.name === "en"
  ) || {};
  
  return (
    <Box className='pokedex-card'>
      <Typography>ID: {id}</Typography>
      <Typography>PokedexName: {pokedexName}</Typography>
      <Typography>Description: {englishDescription}</Typography>
      <Typography>Region Name: {regionName}</Typography>
      <Typography>Version Group Name {versionGroupName}</Typography>
      <Typography>URL: {versionGroupUrl}</Typography>
    </Box>
  )
}

export default PokedexCard