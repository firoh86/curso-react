/*
  Métodos de ciclo de vida

    Son métodos o funciones que se ejecutan automáticamente en el Componente.
    Sólo existen en los ClassConponents.
    Son eventos que ocurren desde que el evento es creado hasta que es destruido.

    ComponentWillMount:
    Cuando el componente se va a cargar pero aún no esta listo
    ComponentDidMount:
    Cuando el componente se ha creado y leido
    ComponentDidUpdate:
    Cuando el componente recibe algún cambio.(cuando se actualiza)
    ComponentWillUnmount:
    Cuando un nuevo componente se ha cargado y éste será reemplazado, pero puedes ejecutarlo antes de que eso suceda


  */
import React from 'react';
import Productos from './components/Productos';

function App() {
  return (
    <>
      <h1>Tienda de objetos</h1>
      <Productos />
    </>
  );
}

export default App;
