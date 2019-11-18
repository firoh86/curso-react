import React from "react";

function Resultado({ resultado }) {
  console.log(resultado);
  // Extraer los valores
  const { name, main } = resultado;
  if (!name) return null;

  // restar grados kelvin
  const kelvin = 273.15;

  return (
    <div className="card">
      <h3>El clima de {name} es:</h3>
      <p className="temperatura">
        Temperatura: {parseInt(main.temp - kelvin, 10)}
        <span>ºC</span>
      </p>
      {/* en react cuando usas un parseInt tienes que pasarle la base decimal, base10 */}
      <p>Temperatura máxima: {parseInt(main.temp_max - kelvin, 10)}ºC</p>
      <p>Temperatura mínima: {parseInt(main.temp_min - kelvin, 10)}ºC</p>
      <p>Tasa de humedad: {main.humidity}%</p>
      {/* <p>vientos de: {main.Wind.speed}km/h</p> */}
    </div>
  );
}
export default Resultado;
