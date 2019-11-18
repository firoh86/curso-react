import React, { Component } from 'react';
import Producto from './Producto';

class Productos extends Component {
  // El state siempre debe ser un objeto cuando utilizas class component
  state = {
    productos: [
      { id: 1, nombre: 'Camisa ReactJS', precio: 30 },
      { id: 2, nombre: 'Camisa VueJS', precio: 30 },
      { id: 3, nombre: 'Camisa Angular', precio: 30 },
      { id: 4, nombre: 'Camisa Node.js', precio: 30 }
    ],
    totalCarrito: 500,
    cliente: 'Juan carlos de la chamba'
  };

  render() {
    // buen sitio para establecer variables
    const { productos } = this.state;
    console.log(productos);
    // dentro del return las variables se escriben con {}

    return (
      <>
        <h1>Lista de Productos</h1>
        {productos.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </>
    );
  }
}

export default Productos;
