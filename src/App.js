import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Products from './pages/Products';
import Customer from './pages/Customer';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Blog from './pages/Blog';

function App() {
  return (

  <>
  <Navbar/>
  <Home/>
  <About/>
  <Menu/>
  <Products/>
  <Customer/>
  <Contact/>
  <Blog/>
  <Footer/>
    </>
  );
}

export default App;
