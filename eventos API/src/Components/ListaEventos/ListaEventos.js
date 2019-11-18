import React from "react";
import { EventosConsumer } from "../../context/EventosContext";
import Evento from "../Evento/Evento.js";

const ListaEventos = () => {
  return (
    <>
      <div className="card">
        <EventosConsumer>
          {value => {
            return value.eventos.map(evento => {
              // console.log(evento);
              return <Evento key="evento.id"></Evento>;
            });
          }}
        </EventosConsumer>
      </div>
    </>
  );
};

export default ListaEventos;
