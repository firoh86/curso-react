import React from "react";

const BurguerCard = ({ producto, cartButton }) => {
  const dat = { titulo: producto.titulo, precio: producto.precio };
  return (
    <div className="card">
      <img className="card-image" alt="" src={producto.url}></img>

      <p className="card-titulo">{producto.titulo}</p>
      <p>{producto.ingredientes}</p>
      <p className="card-price">{producto.precio}$</p>
      <button className="card-button" onClick={cartButton.bind(this, dat)}>
        Añadir
      </button>
    </div>
  );
};

export default BurguerCard;
