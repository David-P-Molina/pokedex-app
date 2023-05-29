import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './components/NavBar';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <Box className="App">
      <NavBar />
      <Routes>
        <Routes />  
        <Routes />
      </Routes>
    </Box>
  );
}

export default App;
