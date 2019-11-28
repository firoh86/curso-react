import React, { Component } from "react";
import BurguerCard from "../burguerCard/BurguerCard";
import CardPlus from "../cardPlus/CardPlus";

// imagenes
import burguer1 from "../images/burguer1.png";
import burguer2 from "../images/burguer2.png";
import burguer3 from "../images/burguer3.png";
import burguer4 from "../images/burguer4.png";
// acompañamientos
import acomp1 from "../images/acomp1.png";
import acomp2 from "../images/acomp2.png";
import acomp3 from "../images/acomp3.png";
import acomp4 from "../images/acomp4.png";

class Formulary extends Component {
  state = {
    cards: [
      {
        id: 0,
        titulo: "Doble chesse burguer",
        url: burguer1,
        ingredientes:
          "Hamburguesa completa con dos pisos de carne y queso, lechuga tomate y red onion",
        precio: "3.50"
      },
      {
        id: 1,
        titulo: "Reinder burguer",
        url: burguer2,
        ingredientes:
          "Hamburguesa para carnivoros, con un cuarto de libra de carne de venado cocinada al horno",
        precio: "4.20"
      },
      {
        id: 2,
        titulo: "Hamburguesa de 1$",
        url: burguer3,
        ingredientes:
          "Una basura para tiesos, con pan barato y carne de segunda, no queremos que nadie se sienta mal por no poder probar nuestras hamburguesas",
        precio: "1.00"
      },
      {
        id: 3,
        titulo: "triple carne",
        url: burguer4,
        ingredientes:
          "Las tres hamburguesas anteriores ahora en un pack con un 15% de ahorro",
        precio: "8.60"
      }
    ],
    acomp: [
      {
        id: 1,
        titulo: "Aros de cebolla",
        url: acomp1,
        descripcion: "x6 aros de cebolla acompañados de salsa BBQ",
        precio: "1.20"
      },
      {
        id: 2,
        titulo: "Patatas fritas",
        url: acomp2,
        descripcion:
          "Añade unas sabrosas patatas fritas al punto de sal a tu hamburguesa",
        precio: "1.00"
      },
      {
        id: 3,
        titulo: "Patatas gajo",
        url: acomp3,
        descripcion:
          "Sasonadas con la mejor seleccion de especias, no pueden faltar en tu mesa",
        precio: "1.20"
      },
      {
        id: 4,
        titulo: "Finguers de pollo",
        url: acomp4,
        descripcion:
          "Envueltos en una fina lamina de queso, no te pribes de probarlos",
        precio: "1.80"
      }
    ]
  };
  // para generar id unicos en los card para la lista
  render() {
    // guarda el array con ese nombre que este en el state
    const { cards } = this.state;
    // guarda el array con ese nombre que este en el state
    const { acomp } = this.state;

    return (
      <>
        <div className="form-container">
          <h2>Hamburguesas</h2>

          <p>Elige tu hamburguesa entre nuestra mejor seleccion</p>
          <div className="seleccion">
            {cards.map(card => (
              <BurguerCard
                key={card.id}
                producto={card}
                cartButton={this.props.cartButton}
              />
            ))}
          </div>
        </div>
        <div className="form-container">
          <h2>Acompañamientos</h2>
          <p>Elige un acompañamiento para completar tu menu</p>
          <div className="seleccion">
            {acomp.map(aco => (
              <CardPlus
                key={aco.id}
                producto={aco}
                cartButton={this.props.cartButton}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Formulary;
