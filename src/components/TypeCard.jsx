import React from 'react'
import { Box, Typography } from '@mui/material'

const TypeCard = ({type, typeInfo}) => {
    //Conditional if type === typeInfoName create damage info for that name
  return (
    <Box>
        <Typography variant='h3'>
            {type.name}
        </Typography>
        <Typography>Stats:</Typography>
        <Typography>Double Damage From: {typeInfo?.double_damage_from}</Typography>
        <Typography>Double Damage To: {typeInfo?.double_damage_to}</Typography>
        <Typography>Half Damage From: {typeInfo?.half_damage_from}</Typography>
        <Typography>Half Damage To: {typeInfo?.half_damage_to}</Typography>
        <Typography>No Damage From: {typeInfo?.no_damage_from}</Typography>
        <Typography>No Damage To: {typeInfo?.no_damage_to}</Typography>

    </Box>
  )
}

export default TypeCard