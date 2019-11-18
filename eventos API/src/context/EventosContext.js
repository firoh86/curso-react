import React, { Component } from "react";
import axios from "axios";

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
  token = "HMXVVKSU6RIIK7HS7JJC";
  ordenar = "date";

  state = {
    eventos: []
  };

  obtenerEventos = async busqueda => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?token=${this.token}&q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&locale=es_ES`;
    // Consultar la api con la url
    const eventos = await axios(url);
    this.setState({
      eventos: eventos.data.events
    });
    console.log(this.state.eventos);
  };

  render() {
    return (
      <EventosContext.Provider
        value={{
          eventos: this.state.eventos,
          obtenerEventos: this.obtenerEventos
        }}
      >
        {this.props.children}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
