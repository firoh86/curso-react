import React from 'react';

const Producto = ({ producto }) => (
  <>
    <h1>{producto.nombre}</h1>
    <p>Precio: ${producto.precio}</p>
  </>
);
export default Producto;
