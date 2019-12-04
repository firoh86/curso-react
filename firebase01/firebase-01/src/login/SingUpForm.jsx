import React from "react";
import SingupInputs from "../hooks/SingupInputs";
import FirebaseAuth from "../hooks/firebaseAuth";

const SingUpForm = () => {
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
    <div>
      <form onSubmit={singupHandle}>
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
        <button>Crear cuenta</button>
      </form>
      <p>¿Ya tienes una cuenta?</p>
      <button>Acceder</button>
    </div>
  );
};

export default SingUpForm;
