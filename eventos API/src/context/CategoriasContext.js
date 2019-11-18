import React, { Component } from "react";
import axios from "axios";

// Crear el context
const CategoriasContext = React.createContext();
// Consumer te permite usar CategoriasConsumer en otros componentes para consumir los datos
export const CategoriasConsumer = CategoriasContext.Consumer;
// Provider

class CategoriasProvider extends Component {
  token = "XZAIHDD7K627THOTUWOV";

  state = {
    categorias: []
  };

  componentDidMount() {
    this.obtenerCategorias();
  }

  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    let categorias = await axios.get(url);
    // console.log(categorias.data.categories);
    this.setState({
      categorias: categorias.data.categories
    });
  };
  render() {
    return (
      <>
        <CategoriasContext.Provider
          value={{ categorias: this.state.categorias }}
        >
          {/* Para que se pueda comunicar en el provider del app */}
          {this.props.children}
        </CategoriasContext.Provider>
      </>
    );
  }
}

export default CategoriasProvider;
