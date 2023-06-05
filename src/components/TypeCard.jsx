import React, { useEffect } from 'react'
import { Box, Typography } from '@mui/material'

const TypeCard = ({type}) => {
    useEffect(() => {
    //   fetchTypeDetail
    //Add to state and use
    //should this be done in the card or in the app types component
    
    }, [])
    
  return (
    <Box>
        <Typography variant='h3'>
            {type.name}
        </Typography>
    </Box>
  )
}

export default TypeCard