import React from "react";
import LoginInputs from "../../hooks/LoginInputs";
import FirebaseAuth from "../../hooks/firebase/firebaseAuth";

const LoginForm = ({ create }) => {
  // loginInputs
  const [email, password, bindMail, bindPassword, reset] = LoginInputs("");
  // firebaseAuth
  const [login] = FirebaseAuth();
  // debuguear no llega el reset
  const loginHandle = e => {
    e.preventDefault();
    login(email, password);
    // async con redux
    reset();
  };
  return (
    <div className="login ">
      <div className="loginCard ">
        <form onSubmit={loginHandle} className="login__form">
          <h3 className="login__title">log in</h3>
          <div className="login__body">
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
            <button className="button loginButton">Acceder</button>
          </div>
        </form>
        <div className="login__body">
          <p>¿Aun no tienes cuenta?</p>
          <button className="button  loginButton" onClick={() => create()}>
            Crear una
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
