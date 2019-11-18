import React from 'react';
import './NuevaCita.css';
import PropTypes from 'prop-types';

const Cita = ({ cita, eliminarCita }) => {
  return (
    <div className='separador'>
      <h3>{cita.mascota}</h3>
      <div> Nombre dueño: {cita.propietario}</div>
      <div> fecha: {cita.fecha}</div>
      <div>Hora: {cita.hora}</div>
      <p>Sintomas:</p>
      <div> {cita.sintomas}</div>

      <button className='form-button red' onClick={() => eliminarCita(cita.id)}>
        Eliminar
      </button>
    </div>
  );
};

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
};

export default Cita;
