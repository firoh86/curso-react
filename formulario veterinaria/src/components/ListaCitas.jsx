import React from 'react';
import Cita from './Cita';
import './NuevaCita.css';
import PropTypes from 'prop-types';

const ListaCitas = ({ citas, eliminarCita }) => {
  // Imprimir un mensaje en base de si hay citas o no
  const mensaje =
    Object.keys(citas).length === 0
      ? 'no hay citas'
      : 'Administra las citas aqui';

  return (
    <div className='card mt'>
      <h3>{mensaje}</h3>
      <div className='listacitas'>
        {citas.map(cita => (
          <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
        ))}
      </div>
    </div>
  );
};

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  eliminarCita: PropTypes.func.isRequired
};
export default ListaCitas;
