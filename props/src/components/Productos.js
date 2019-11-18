import React, { Component } from 'react';
import Producto from './Producto';

class Productos extends Component {
  state = {
    productos: []
  };

  UNSAFE_componentWillMount() {
    // Se ejecuta antes de estar listo el documento
    console.log(1);

    this.setState({
      productos: [
        { id: 1, nombre: 'Alex', precio: 30 },
        { id: 2, nombre: 'Pablo', precio: 30 },
        { id: 3, nombre: 'Rosa', precio: 30 },
        { id: 4, nombre: 'Maria', precio: 30 }
      ]
    });
  }
  componentDidMount() {
    // Se ejecuta cuando esta listo el documento
    console.log(2);
  }
  UNSAFE_componentWillUpdate() {
    // Se ejecuta cuando el componente se actualiza
    console.log(3);
  }
  componentWillUnmount() {
    // Se ejecuta justo antes de que el componente sea removido
    console.log(4);
  }

  render() {
    console.log('render');
    const { productos } = this.state;

    return (
      <>
        <h3>Tienda de objetos</h3>
        {productos.map(productos => (
          <Producto key={productos.id} producto={productos} />
        ))}
      </>
    );
  }
}

export default Productos;
