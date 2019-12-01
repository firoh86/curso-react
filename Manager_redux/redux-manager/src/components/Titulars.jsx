import React from "react";
import { connect } from "react-redux";
const Titulars = ({ titulars, deleteTitular }) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
        {titulars.map(j => (
          <article className="titular" key={j.id}>
            <div>
              <img src={j.photo} alt={j.name} />

              <button onClick={() => deleteTitular(j)}>x</button>
            </div>
            <p>{j.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  titulars: state.titulars
});
const mapDispatchToProps = dispatch => ({
  deleteTitular(player) {
    dispatch({
      type: "Quitar_Titular",
      player
    });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Titulars);
