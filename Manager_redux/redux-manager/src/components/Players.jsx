import React from "react";
// 1.conect es la funcion de react-redux para conectar con el store
import { connect } from "react-redux";
// 3.Y una vez conectado ya podemos utilizar esas propiedades del state en el store
//  para pasarlas como props a nuestros componentes
const Players = ({ players, addTitular, addAlternate }) => {
  return (
    <section>
      <h2>Jugadores</h2>
      <div className="players-container">
        {players.map(player => (
          <article className="player" key={player.id}>
            <img src={player.photo} alt={player.name} />
            <h3>{player.name}</h3>
            <div>
              <button onClick={() => addTitular(player)}>Titular</button>
              <button onClick={() => addAlternate(player)}>Suplente</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  players: state.players
});
const mapDispatchToProps = dispatch => ({
  addTitular(player) {
    dispatch({
      type: "Agregar_Titular",
      player
    });
  },
  addAlternate(player) {
    dispatch({
      type: "Agregar_Suplente",
      player
    });
  }
});
// 2.lo utilizamos en el export y me mandamos las funciones
export default connect(mapStateToProps, mapDispatchToProps)(Players);
