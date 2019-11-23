import React from "react";
const InicioPedido = ({ button, pedido }) => {
  return (
    <div className="inicioPedido">
      <button onClick={button(this)} className="pedido-button">
        {pedido ? "volver atrás" : "Empezar pedido"}
      </button>
    </div>
  );
};

export default InicioPedido;
