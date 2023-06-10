import React from 'react'
import { Box, Typography } from '@mui/material'
import { generateDamageTypes } from '../utils';

const TypeCard = ({ type }) => {
  const { damage_relations, id, name } = type;

  const doubleDamageFrom = generateDamageTypes(damage_relations, 'double_damage_from');
  const doubleDamageTo = generateDamageTypes(damage_relations, 'double_damage_to');
  const halfDamageFrom = generateDamageTypes(damage_relations, 'half_damage_from');
  const halfDamageTo = generateDamageTypes(damage_relations, 'half_damage_to');
  const noDamageFrom = generateDamageTypes(damage_relations, 'no_damage_from');
  const noDamageTo = generateDamageTypes(damage_relations, 'no_damage_to');

  return (
    <Box key={id} className='type-card'>
      <Typography variant='h3'>{id}: {name}</Typography>
      <Typography variant="h6">Type Details</Typography>
      <Typography variant="body">Double Damage From:</Typography>
      <div>{doubleDamageFrom}</div>
      <Typography variant="body">Double Damage To:</Typography>
      <div>{doubleDamageTo}</div>
      <Typography variant="body">Half Damage From:</Typography>
      <div>{halfDamageFrom}</div>
      <Typography variant="body">Half Damage To:</Typography>
      <div>{halfDamageTo}</div>
      <Typography variant="body">No Damage From:</Typography>
      <div>{noDamageFrom}</div>
      <Typography variant="body">No Damage To:</Typography>
      <div>{noDamageTo}</div>

    </Box>
  )
}

export default TypeCard