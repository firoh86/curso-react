import React, { Component } from "react";

class Home extends Component {
  state = {
    mensaje: {
      numero: "1",
      mensajes: [
        "El mejor pan recien hecho",
        "la lechuga mas fresca",
        "tomates de la huerta",
        "cebolla recien cortada",
        "pepinillos como los de siempre",
        "la carne a la parrilla mas tierna",
        "El mejor pan recien hecho"
      ],
      mensaje2: ""
    },
    mostrar: false
  };

  cambiaNumero = (numero, e) => {
    this.setState({
      mensaje2: this.state.mensaje.mensajes[numero]
    });
    console.log(this.state.mensaje2);
  };

  HandleMostrar = e => {
    this.setState({
      mostrar: e
    });
  };

  render() {
    return (
      <div className="container">
        <div className="burguer-card">
          <h1 className="title">Hamburguesas Firoh</h1>
          <p className="parrafo">
            Las mejores hamburguesas de todo el pais ahora a tu alcance desde la
            web!
          </p>

          <div
            className="burguer-frame"
            onMouseEnter={() => this.HandleMostrar(true)}
            onMouseLeave={() => this.HandleMostrar(false)}
          >
            <div
              className="burguer top-pan"
              onMouseEnter={() => this.cambiaNumero(0)}
            ></div>
            <div
              className="burguer lechuga"
              onMouseEnter={() => this.cambiaNumero(1)}
            ></div>
            <div
              className="burguer tomate"
              onMouseEnter={() => this.cambiaNumero(2)}
            ></div>
            <div
              className="burguer cebolla"
              onMouseEnter={() => this.cambiaNumero(3)}
            ></div>
            <div
              className="burguer pepinillos"
              onMouseEnter={() => this.cambiaNumero(4)}
            ></div>
            <div
              className="burguer carne"
              onMouseEnter={() => this.cambiaNumero(5)}
            ></div>
            <div
              className="burguer bot-pan"
              onMouseEnter={() => this.cambiaNumero(6)}
            ></div>
          </div>
          <h2 className="parrafo bottom">
            {this.state.mostrar ? this.state.mensaje2 : ""}
          </h2>
        </div>
      </div>
    );
  }
}
export default Home;
