import React, { useState } from "react";

const Formulario = ({ datosConsulta }) => {
  // State del componente
  // busqueda= state, guardarBusqueda = this.setState({})
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: ""
  });

  const handleChange = e => {
    // Cambiar el state
    guardarBusqueda({
      // siempre primero creamos una copia del state actual para no sobreescribir
      ...busqueda,
      [e.target.name]: e.target.value
    });
    // para mostrar el 'state'
    // console.log(busqueda);
  };

  const consultarClima = e => {
    e.preventDefault();

    // pasar hacia el componente principal la busqueda del usuario
    datosConsulta(busqueda);
  };

  return (
    <form onSubmit={consultarClima}>
      <div className="form-row">
        <label>Ciudad: </label>
        <input type="text" name="ciudad" id="ciudad" onChange={handleChange} />
      </div>
      <div className="form-row">
        <select onChange={handleChange} name="pais">
          <option value="US">Selecciona un Pais</option>
          <option value="US">Estados Unidos</option>
          <option value="ES">España</option>
          <option value="AR">Argentina</option>
          <option value="HK">Hong Kong</option>
        </select>
      </div>
      <div className="form-row">
        <input type="submit" className="form-button" value="Enviar"></input>
      </div>
    </form>
  );
};

export default Formulario;
