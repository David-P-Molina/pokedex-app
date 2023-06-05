import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'

const TypeCard = ({type}) => {
    useEffect(() => {
    //   fetchTypeDetail
    //Add to state and use
    //should this be done in the card or in the app types component
    }, [])
    let typeInfo = {}
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