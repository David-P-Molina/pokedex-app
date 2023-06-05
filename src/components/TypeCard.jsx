import React from 'react'
import { Box, Typography } from '@mui/material'

const generateDamageTypes = (damageInfo, propertyKey) => {
  if(damageInfo[propertyKey] === []) return <span>None</span>
  const damageInfoList = damageInfo[propertyKey].map((item) => (
    <span key={item.name}>{item.name}</span>
    )
  )
  return damageInfoList
}

const TypeCard = ({ type }) => {
  const { damage_relations, id, move_damage_class: { 
    name: moveDamageClassName 
  }, } = type;

  return (
    <Box key={type.name}>
        <Typography variant='h3'>
            {type.name}
        </Typography>
        <Typography>Stats:</Typography>
        <Typography>Double Damage From: {type?.double_damage_from || 'None'}</Typography>
        <Typography>Double Damage To: {type?.double_damage_to || 'None'}</Typography>
        <Typography>Half Damage From: {type?.half_damage_from || 'None'}</Typography>
        <Typography>Half Damage To: {type?.half_damage_to || 'None'}</Typography>
        <Typography>No Damage From: {type?.no_damage_from || 'None'}</Typography>
        <Typography>No Damage To: {type?.no_damage_to || 'None'}</Typography>

    </Box>
  )
}

export default TypeCard