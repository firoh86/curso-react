import React, { Component } from "react";
import { Link } from "react-router-dom";
class Info extends Component {
  state = {};
  render() {
    return (
      <div className="Container-info">
        <h3>¡DISFRUTA DE TU BURGER DONDE QUIERAS!</h3>
        <p>
          Puedes pedir tu burger online para recoger cualquier día de la semana
          de 13:30 a 16:00 y de 20:30 a 23:00.
        </p>

        <p>
          Y ahora además, si quieres también te lo llevamos nosotros a domicilio
          todos los días excepto viernes y sábados por la noche y vísperas de
          festivos por la noche. Podrás elegir la forma de entrega (recoger o
          domicilio) durante el proceso de compra. Repartimos en Segovia
          capital, en los siguientes códigos postales: 40001, 40002, 40003,
          40004, 40005, y 40006.
        </p>

        <Link className="info-button" to="/pedido">
          Pide Ahora!
        </Link>
        <p>Pedido mínimo 18€. Coste del envío: 1€</p>

        <p>
          Y siempre que estemos abiertos, también puedes pedir The Burger World
          a domicilio a través de Uber Eats. (Reparten en Segovia y La
          Lastrilla)
        </p>
      </div>
    );
  }
}

export default Info;
