import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Search from './Components/Search'
import Sandwich from './Components/Sandwichadv'
import Footer from './Components/Footer'



function App() {
  return (
    <Router>
      <Navbar/>
      <Home/>
      <Search/>
      
      <Sandwich/>
      <Footer/>

    </Router>
  );
}

export default App;
