import React, { Component } from "react";
import "../Formulario/formulary.css";
import PropTypes from "prop-types";

class Formulary extends Component {
  state = {
    categoria: "",
    idioma: ""
  };

  componentDidMount() {
    this.setState({ categoria: "general", idioma: "us" });
  }

  cambiarIdioma = e => {
    this.setState({ idioma: e.target.value }, () => {
      // Pasarlo a la página principal para consultar las noticias
      this.props.consultarNoticias(this.state.categoria, this.state.idioma);
    });
  };

  cambiarCategoria = e => {
    this.setState({ categoria: e.target.value }, () => {
      // Pasarlo a la página principal para consultar las noticias
      this.props.consultarNoticias(this.state.categoria, this.state.idioma);
    });
  };
  render() {
    return (
      <>
        <h2 className="form-title">Encuentra noticias por catergoria</h2>
        <form className="formulary">
          <div>
            <select onChange={this.cambiarCategoria}>
              <option value="general">General</option>
              <option value="bussines">Negocios</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="healt">Salud</option>
              <option value="science">Ciencia</option>
              <option value="technology">Tecnologia</option>
            </select>
          </div>
          <div>
            <select onChange={this.cambiarIdioma}>
              <option value="us">us</option>
              <option value="hk">hk</option>
              <option value="jp">jp</option>
              <option value="nz">nz</option>
              <option value="at">at</option>
              <option value="fr">fr</option>
              <option value="ar">ar</option>
            </select>
          </div>
        </form>
      </>
    );
  }
}
Formulary.propTypes = {
  cambiarCategoria: PropTypes.func.isRequired,
  cambiarIdioma: PropTypes.func.isRequired
};
export default Formulary;
