import React from "react";
import SingupInputs from "../../hooks/SingupInputs";
import FirebaseAuth from "../../hooks/firebaseAuth";

const SingUpForm = ({ create }) => {
  // SingUpInputs
  const [
    email,
    password,
    repassword,
    bindMail,
    bindPassword,
    bindRepassword,
    bindNickname,
    reset
  ] = SingupInputs("");
  // firebaseAuth
  const [, singup] = FirebaseAuth();
  // falta pasar el nickname al firestore
  // debuguear no llega el reset
  const singupHandle = e => {
    e.preventDefault();
    singup(email, password, repassword);
    reset();
  };
  return (
    <div className="login ">
      <div className="loginCard ">
        <form onSubmit={singupHandle}>
          <h3 className="login__title">Sign in</h3>
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
            <div>
              <input
                type="password"
                {...bindRepassword}
                placeholder="repite contraseña"
              ></input>
            </div>
            <div>
              <input
                type="text"
                {...bindNickname}
                placeholder="nombre de usuario"
              ></input>
            </div>
            <button className="button  loginButton">Crear cuenta</button>
          </div>
        </form>
        <div className="login__body">
          <p>¿Ya tienes una cuenta?</p>
          <button className="button  loginButton" onClick={() => create()}>
            Acceder
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUpForm;
