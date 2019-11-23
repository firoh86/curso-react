import React, { Component } from "react";
import Formulary from "../formulary/Formulary";
import ShopCart from "../shopCart/ShopCart";
import IniciaPedido from "../iniciaPedido/IniciaPedido";

class Pedido extends Component {
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
    mostrar: false,
    mostrarList: false,
    pedido: false,
    trolley: []
  };

  cambiaNumero = (numero, e) => {
    this.setState({
      mensaje2: this.state.mensaje.mensajes[numero]
    });
    // console.log(this.state.mensaje2);
  };
  // para boton toggle shop cart list
  HandleSlist = e => {
    this.setState({ mostrarList: !this.state.mostrarList });
  };
  // mostrar p de elementos de animacin en la hamburguesa
  HandleMostrar = e => {
    this.setState({
      mostrar: e
    });
  };

  TogglePedido = e => {
    // togglea la condicion que muestra pedido en el state
    this.setState({ pedido: !this.state.pedido });
    // reinicia a oculto la lista de la compra
    if (this.state.pedido === false) {
      this.setState({ mostrarList: false });
    }
  };
  TrolleyAdd = cart => {
    // Se añaden a la lista de la compra
    const listItem = {
      titulo: cart.titulo,
      precio: cart.precio,
      id: this.state.trolley.length
    };
    this.setState({ trolley: [...this.state.trolley, listItem] });
    // console.log(this.state.trolley);
  };

  BorrarListItem = id => {
    const newList = this.state.trolley.filter(item => item.id !== id);
    this.setState({ trolley: newList });
    // console.log(this.state.trolley);
  };
  render() {
    return (
      <div className="container">
        <div className="card-container">
          <div className="burguer-card">
            <h1 className="title">Hamburguesas Firoh</h1>
            <p className="parrafo">
              Las mejores hamburguesas de todo el pais ahora a tu alcance desde
              la web!
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
            <h2 className="parrafo parrafo-bottom">
              {this.state.mostrar ? this.state.mensaje2 : ""}
            </h2>
          </div>
        </div>
        <div>
          <IniciaPedido
            pedido={this.state.pedido}
            button={() => this.TogglePedido}
          ></IniciaPedido>

          {this.state.pedido ? (
            <div>
              <Formulary cartButton={this.TrolleyAdd}></Formulary>
              <div
                className={this.state.mostrarList ? "list-show" : "list-hide"}
              >
                <ShopCart
                  onClick={this.HandleSlist}
                  mostrar={this.state.mostrarList}
                  lista={this.state.trolley}
                  deleteItem={this.BorrarListItem}
                ></ShopCart>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default Pedido;
