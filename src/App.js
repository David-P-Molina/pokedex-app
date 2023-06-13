import React from 'react'
import Footer from './components/Footer'
import Pokedex from './features/Pokedex';
import { Provider } from 'react-redux'
import { CssBaseline, Container } from '@mui/material';
import store from './store/store'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { Box } from '@mui/material'
// import NavBar from './components/NavBar';
// import Home from './pages/Home';
import './App.css';
// import PokemonDetail from './features/PokemonDetail';
// import TypesDetail from './features/TypesDetail';
import Pokedex from './features/Pokedex';
function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container maxWidth='lg' className='app'>
        <Pokedex />
        {/* <PokemonDetail />
        <TypesDetail /> */}
        <Footer />
      </Container>
    </Provider>
    // <Box className="App">
    //   <Router>
    //   <NavBar />
    //     <Routes>
    //       <Route to="/" element={ <Pokedex /> }/>  
    //       <Route to="/pokemon" element={<PokemonDetail />}/>
    //       <Route to="/types" element={<TypesDetail />}/>
    //     </Routes>
    //   </Router>
    //   <Footer />
    // </Box>
  );
}

export default App;
