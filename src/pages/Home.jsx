import React from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import TypesDetail from '../features/TypesDetail'

const Home = () => {
  return (
    <Box>
        Home
        <HeroBanner />
        <TypesDetail/>
    </Box>
  )
}

export default Home