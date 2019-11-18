import React, { useState, useEffect } from "react";
import Header from "./components/Header/header";
import Formulario from "./components/Formulario/formulario";
import Error from "./components/Error/error";
import Resultado from "./components/Resultado/resultado";
import "./App.css";

// API key
// f6e904fa1d9929b0abb393c49fe4fb41
function App() {
  // State principal
  // ciudad = state, guardarCiudad = this.setState()
  const [ciudad, guardarCiudad] = useState("");
  const [pais, guardarPais] = useState("");
  const [error, guardarError] = useState(false);
  // guardamos el resultado de la consulta en otro state
  const [resultado, guardarResultado] = useState({});

  // Use effect se ejecuta cuando se carga el componente y cuando se modifica
  // import React, { useEffect } from "react";
  useEffect(() => {
    // Prevenir ejecucion al component didmount
    if (ciudad === "") return;

    const consultarApi = async () => {
      const appId = "f6e904fa1d9929b0abb393c49fe4fb41";

      const url = ` https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId} `;

      // Consultar la url
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      // console.log(resultado);
      guardarResultado(resultado);
    };
    consultarApi();
  }, [ciudad, pais]);

  const datosConsulta = datos => {
    // console.log(datos);
    // Validar que ambos campos existan y estén
    if (datos.ciudad === "" || datos.pais === "") {
      // error
      guardarError(true);
      return;
    }
    // Ciudad y pais existen, agregamos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  };

  // Cargar un componente condicionalmente

  let componente;
  if (error) {
    // Hay un error mostrarlo
    componente = <Error mensaje="Ambos campos son obligatorios" />;
  } else if (resultado.cod == "404") {
    componente = <Error mensaje="La ciudad no existe en nuestro registro" />;
  } else {
    // Mostrar clima
    componente = <Resultado resultado={resultado}></Resultado>;
  }
  return (
    <div className="container">
      <Header titulo="Clima React App"></Header>
      <div className="app-body">
        <Formulario datosConsulta={datosConsulta}></Formulario>
        {componente}
      </div>
    </div>
  );
}

export default App;
