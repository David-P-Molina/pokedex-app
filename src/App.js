import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import Home from './pages/Home';
import PokemonDetail from './features/PokemonDetail';
import TypesDetail from './features/TypesDetail';

import './App.css';

function App() {
  return (
    <Box className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route to="/" element={ <Home/> }/>  
          <Route to="/pokemon" element={<PokemonDetail />}/>
          <Route to="/types" element={<TypesDetail />}/>
        </Routes>
      </Router>
      <Footer />
    </Box>
  );
}

export default App;
