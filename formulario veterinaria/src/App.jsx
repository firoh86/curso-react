// Capitulo 3 Aplicación de manejo de pacientes de veterinaria
import React, { Component } from 'react';
import './App.css';
// components
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  };

  // Cuando la aplicación carga
  componentDidMount() {
    // localStorage.clear();
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }
  // Cuando eliminamos o agregamos una nueva cita
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }
  crearNuevaCita = datos => {
    // copiar el state actual(esto es como el push a un arreglo con la nueva sintexis)
    const citas = [...this.state.citas, datos];
    // agregar el nuevo state
    this.setState({ citas });
  };
  // elimina las citas del state
  eliminarCita = id => {
    //  Tomar una copia del state
    const citasActuales = [...this.state.citas];
    // utilizar filter para sacar el elemento @id del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);
    // arreglar el state
    this.setState({ citas });
  };
  render() {
    return (
      <div className='container'>
        <Header titulo='Administrador Pacientes Veterinario' />
        <div className='formulary'>
          <NuevaCita crearNuevaCita={this.crearNuevaCita} />
        </div>
        <div className='listaCitas'>
          <ListaCitas
            citas={this.state.citas}
            eliminarCita={this.eliminarCita}
          />
        </div>
      </div>
    );
  }
}

export default App;
