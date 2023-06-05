import { Box, Typography } from '@mui/material'
import React from 'react'

const TypeCard = ({type}) => {
  return (
    <Box>
        <Typography variant='h3'>
            {type.name}
        </Typography>
    </Box>
  )
}

export default TypeCard