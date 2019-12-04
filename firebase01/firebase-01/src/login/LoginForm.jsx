import React from "react";
import LoginInputs from "../hooks/LoginInputs";
import FirebaseAuth from "../hooks/firebaseAuth";

const LoginForm = () => {
  // loginInputs
  const [email, password, bindMail, bindPassword, reset] = LoginInputs("");
  // firebaseAuth
  const [login] = FirebaseAuth();
  // debuguear no llega el reset
  const loginHandle = e => {
    e.preventDefault();
    login(email, password);
    reset();
  };
  return (
    <div>
      <form onSubmit={loginHandle}>
        <div>
          <input type="email" {...bindMail} placeholder="correo"></input>
        </div>
        <div>
          <input
            type="password"
            {...bindPassword}
            placeholder="contraseña"
          ></input>
        </div>
        <button>Acceder</button>
      </form>
      <p>¿Aun no tienes cuenta?</p>
      <button>Crear una</button>
    </div>
  );
};

export default LoginForm;
