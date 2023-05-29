import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PokemonDetail from './features/PokemonDetail';
import TypesDetail from './features/TypesDetail';

import './App.css';

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Routes>
        <Routes to="/" element={ <Home/> }/>  
        <Routes to="/pokemon" element={<PokemonDetail />}/>
        <Routes to="/types" element={<TypesDetail />}/>
      </Routes>
    </Box>
  );
}

export default App;
