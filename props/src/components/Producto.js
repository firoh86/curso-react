import React from 'react';

const Producto = ({ producto }) => (
  <>
    <h2>{producto.nombre}</h2>
    <p>precio: ${producto.precio}</p>
    {/* {console.log(producto)} */}
  </>
);

export default Producto;
