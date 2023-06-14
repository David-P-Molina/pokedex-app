import React from 'react'

const PokedexCard = ({pokedex}) => {
  try {
    const {
    version_groups: [{ name: versionGroupName = "", url: versionGroupUrl = "" } = {}] = [],
    region: { name: regionName = "" } = {},
    id = "",
    name = "",
    descriptions: [{ description = "" } = {}] = []
  } = pokedex
} catch (error) {
  //national pokedex & conquest gallery pokedex are not working
} finally {
  
}
  return (
    <div className='pokedex-card'></div>
  )
}

export default PokedexCard