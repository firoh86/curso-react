import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Productos from './components/Productos';

function App() {
  const fecha = new Date().getFullYear();

  return (
    <>
      <Header titulo='Tienda virtual' />
      <Productos />
      <Footer fecha={fecha} />
    </>
  );
}

export default App;
