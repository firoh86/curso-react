import React, { Component } from 'react';
import uuid from 'uuid';
import './NuevaCita.css';
import PropTypes from 'prop-types';

const stateInicial = {
  // Datos del paciente que se está dando de alta
  cita: {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  },
  error: false
};

class NuevaCita extends Component {
  state = { ...stateInicial };
  // Cuando el usuario escribe en los campos
  handleChange = e => {
    // console.log(e.target.name + ': ' + e.target.value);
    // Colocar lo que el usuario escribe en el state
    this.setState({
      cita: {
        // tomas una copia del state para que no pierda los cambios al modificarlos con el setState
        ...this.state.cita,
        [e.target.name]: e.target.value
      }
    });
  };

  // Cuando el usuarioenvia el formulario
  handleSubmit = e => {
    e.preventDefault();

    // Extraer los valores del state
    const { mascota, propietario, fecha, hora, sintomas } = this.state.cita;
    // Validar que todos los campoes esten llenos
    if (
      mascota === '' ||
      propietario === '' ||
      fecha === '' ||
      hora === '' ||
      sintomas === ''
    ) {
      this.setState({
        error: true
      });
      // detener la ejecucion
      return;
    }

    // Generar un objeto con los datos
    const nuevaCita = { ...this.state.cita };
    nuevaCita.id = uuid();
    // Agregar la cita al state de App
    this.props.crearNuevaCita(nuevaCita);

    // Colocar en el state el stateInicial
    this.setState({
      ...stateInicial
    });
  };

  render() {
    // extraer valor del state (true/false)
    const { error } = this.state;

    return (
      <div className='card'>
        <div className='card-body'>
          <h2 className='card-title'>
            Llena el formulario para crear una nueva cita
          </h2>
          {error ? (
            <div className='alerta'>Todos los campos son obligatorios</div>
          ) : null}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className='form-row'>
            <label>Nombre Mascota</label>
            <input
              name='mascota'
              onChange={this.handleChange}
              placeholder='Nombre Mascota'
              type='text'
              value={this.state.cita.mascota}
            />
          </div>
          <div className='form-row'>
            <label>Nombre Dueño</label>
            <input
              name='propietario'
              onChange={this.handleChange}
              placeholder='Nombre Dueño Mascota'
              type='text'
              value={this.state.cita.propietario}
            />
          </div>
          <div className='form-row'>
            <label>Fecha</label>
            <input
              type='date'
              name='fecha'
              onChange={this.handleChange}
              value={this.state.cita.fecha}
            />

            <label>Hora</label>
            <input
              type='time'
              name='hora'
              onChange={this.handleChange}
              value={this.state.cita.hora}
            />
          </div>
          <div className='form-row'>
            <label>Sintomas de la Mascota</label>
            <textarea
              className='textArea'
              placeholder='Describe los sintomas'
              type='textArea'
              name='sintomas'
              onChange={this.handleChange}
              value={this.state.cita.sintomas}
            />
          </div>
          <input
            type='submit'
            className='form-button'
            value='Agregar Nueva Cita'
          />
        </form>
      </div>
    );
  }
}

NuevaCita.propTypes = {
  crearNuevaCita: PropTypes.func.isRequired
};

export default NuevaCita;
