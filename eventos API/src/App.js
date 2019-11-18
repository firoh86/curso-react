import React from "react";
import Header from "./Components/Header/Header.js";
import Formulario from "./Components/Formulario/Formulario";
import CategoriasProvider from "./context/CategoriasContext.js";
import EventosProvider from "./context/EventosContext";
import ListaEventos from "./Components/ListaEventos/ListaEventos.js";
function App() {
  return (
    <>
      <div className="container">
        {/* Los providers normalmente van a redear otros componentes donde van a estar disponible los datos */}
        <EventosProvider>
          <CategoriasProvider>
            <Header></Header>
            <Formulario></Formulario>
            <ListaEventos />
          </CategoriasProvider>
        </EventosProvider>
      </div>
    </>
  );
}

export default App;
