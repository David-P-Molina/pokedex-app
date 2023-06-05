import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const TypeCard = ({ type }) => {
    const typeInfo = useSelector((state) => state.types.typesList.name === type)
    
  return (
    <Box>
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