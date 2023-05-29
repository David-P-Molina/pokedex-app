import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <Stack
        direction="row"
        justifyContent="space-around"
        sx={{
            gap: { sm: '120px', xs: '40px'},
            mt: {sm: '36px', xs: '24px'},
            margin: '0 20px',
            justifyContent: 'none',
        }}>
        <Link to="/">
            Home{/* Home Pokemon Ball */}
        </Link>
        <Link to="/pokemon">
            Pokemon
        </Link>
        <Link to="/types">
            Type
        </Link>
        <SearchBar />
    </Stack>
  )
}

export default NavBar