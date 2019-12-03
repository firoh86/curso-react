import React, { useState, useEffect } from "react";
// PODEMOS TENER MAS DE UN USEEFFECT EN NUESTRO COMPONENTE
const Child = () => {
  const [isLoading, setIsLoading] = useState(true);

  /*useEffect es una funcion que recive un callback
     En terminos de componentes de clase useEffect viene a ser la combinacion de component did mount, component did update y component will unmount. 
     
     useEffect(()=>{
      // que hacer despues de que se haya montado
     })
     */
  useEffect(() => {
    //  que hacer despues de que el componente se haya montado
    // setIsLoading(false);
    // Todo lo que esta en useEffect se considera un subscribe, se queda subscrito para comprobar los cambios
    // entonces metemos nuestra funcion en una variable para poder controlarla y que no se cree un bucle infinito en este caso trabajando con un setInterval
    const timeId = setInterval(() => {
      console.log("useEffect!");
      setIsLoading(!isLoading);
    }, 2000);
    // aqui en el return, "saneamos el useEffect" basicamente nos desuscribimos una vez que el componente se haya desmontado.
    return () => clearInterval(timeId);
  }, [isLoading]); //el subscribe es de la variable isloading en este caso

  useEffect(() => {
    console.log("only once");
    // si le pasamos un segundo parametro al useEffect en este caso es un array vacio, le decimos se solo se actualize una vez por que no tiene mas parametros
    // que controlar, de este modo actuaría como un did mount.
  }, []);

  return <div>{isLoading ? <h4>Is loading</h4> : <h4>Is Loaded</h4>}</div>;
};

export default Child;
