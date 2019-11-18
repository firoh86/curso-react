import React, { Component } from "react";
import { CategoriasConsumer } from "../../context/CategoriasContext";
import { EventosConsumer } from "../../context/EventosContext";

class Formulario extends Component {
  state = {
    nombre: "",
    categoria: ""
  };

  // Si el usuario agrega un evento o categoria

  obtenerDatosEvento = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <EventosConsumer>
        {value => {
          // console.log(value);
          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                value.obtenerEventos(this.state);
              }}
            >
              <h4 className="form-title">
                Busca tu evento por Nombre o Categoría
              </h4>

              <div className="form">
                <div className="form-column">
                  <input
                    className="form-input"
                    name="nombre"
                    type="text"
                    placeholder="Nombre de Evento o Ciudad"
                    onChange={this.obtenerDatosEvento}
                  ></input>
                </div>

                {/* importamos el content consumer para usarlo y crear los options en base a la info en el state tras la peticion a la API
                    import { CategoriasConsumer } from "../../context/CategoriasContext"; */}
                <div className="form-column">
                  <select
                    name="categoria"
                    className="form-select"
                    onChange={this.obtenerDatosEvento}
                  >
                    <option value="">--Seleccione categoria--</option>
                    <CategoriasConsumer>
                      {value => {
                        return value.categorias.map(categoria => (
                          <option key={categoria.id} value={categoria.id}>
                            {categoria.name_localized}
                          </option>
                        ));
                      }}
                    </CategoriasConsumer>
                  </select>
                </div>

                <div className="form-column">
                  <input
                    type="submit"
                    className="form-button"
                    value="Buscar Evento"
                  ></input>
                </div>
              </div>
            </form>
          );
        }}
      </EventosConsumer>
    );
  }
}

export default Formulario;
