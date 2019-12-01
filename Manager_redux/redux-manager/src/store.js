// por defecto se declara como store, he importamos el paquete createStore de la libreria redux
// npm install redux react-redux
import { createStore } from "redux";
// creamos el estado inicial de la aplicacion
const stateDefault = {
  players: [
    {
      id: 1,
      name: "Juan Carlos",
      photo:
        "https://joanboira.com/wp-content/uploads/2019/10/Retrato-de-perfil-profesional-1.jpg"
    },
    {
      id: 2,
      name: "Roberto Casas",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlM4SoTn8-Z4J7CME9gVtH9WzpTQUJKhYsZ5t6Ir3JXwxLu2eD&s"
    },
    {
      id: 3,
      name: "Mauro Romero",
      photo: "https://foroalfa.org/imagenes/perfiles/272/31/31769.jpg"
    }
  ],
  titulars: [],
  alternates: []
};
// En el reducer se presentan dos parametros, el estado y la accion que cambiara el estado. Le añadimos un estado inicial al estado.
const reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "Agregar_Titular":
      return {
        ...state,
        titulars: state.titulars.concat(action.player),
        players: state.players.filter(j => j.id !== action.player.id)
      };

    case "Agregar_Suplente":
      return {
        ...state,
        alternates: state.alternates.concat(action.player),
        players: state.players.filter(j => j.id !== action.player.id)
      };

    case "Quitar_Titular":
      return {
        ...state,
        players: state.players.concat(action.player),
        titulars: state.titulars.filter(j => j.id !== action.player.id)
      };

    case "Quitar_Suplente":
      return {
        ...state,
        players: state.players.concat(action.player),
        alternates: state.alternates.filter(j => j.id !== action.player.id)
      };
    default:
      break;
  }
  return state;
};
// createStore debe mandar la funcion reductora
export default createStore(reducer);
