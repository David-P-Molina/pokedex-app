import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <Stack>
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