import React from "react";

const Evento = ({ evento }) => {
  return (
    <div className="card">
      <div className="card-logo">
        {evento.logo ? <img src={evento.logo.url} alt={evento.name} /> : null}
      </div>
      <div className="card-title">{evento.name.text}</div>
    </div>
  );
};

export default Evento;
