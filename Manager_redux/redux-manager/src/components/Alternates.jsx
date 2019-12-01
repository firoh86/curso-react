import React from "react";
import { connect } from "react-redux";
const Alternates = ({ alternates, deleteAlternate }) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="cancha">
        {alternates.map(j => (
          <article className="titular" key={j.id}>
            <div>
              <img src={j.photo} alt={j.name} />
              <button onClick={() => deleteAlternate(j)}>x</button>
            </div>
            <p>{j.name}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  alternates: state.alternates
});
const mapDispatchToProps = dispatch => ({
  deleteAlternate(player) {
    dispatch({
      type: "Quitar_Suplente",
      player
    });
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Alternates);
