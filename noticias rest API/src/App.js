import React, { Component } from 'react';
import Header from './Components/Header/Header.js';
import ListaNoticias from './Components/listaNoticias/ListaNoticias.js';
import Formulary from './Components/Formulario/Formulario.jsx';
import './App.css';
// newsapi.org API key: 731d7bc9ea254831b1eaa33f3491212f
class App extends Component {
  state = {
    noticias: []
  };
  // Llamadas a la api externa con fetch por que la respuesta viene en JSON con async await para no andar con promesas
  async componentDidMount() {
    this.consultarNoticias();
  }

  consultarNoticias = async (categoria = 'general', idioma = 'us') => {
    const url = `
    https://newsapi.org/v2/top-headlines?country=${idioma}&category=${categoria}&apiKey=731d7bc9ea254831b1eaa33f3491212f`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    // console.log(noticias.articles[12]);
    this.setState({
      noticias: noticias.articles
    });
  };

  render() {
    return (
      <>
        <Header titulo='Noticias React API'></Header>
        <div className='container'>
          <Formulary consultarNoticias={this.consultarNoticias}></Formulary>
          <ListaNoticias
            className='listaNoticias'
            noticias={this.state.noticias}
          />
        </div>
      </>
    );
  }
}

export default App;
