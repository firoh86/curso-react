import React from "react";
import FirebaseAuth from "../../hooks/firebaseAuth";

const LogoutForm = ({ isloged }) => {
  // firebaseAuth
  const [, , logout] = FirebaseAuth();

  const logoutHandle = e => {
    e.preventDefault();
    logout();
    // async con redux
    isloged();
  };
  return (
    <div className="login ">
      <div className="loginCard ">
        <div className="login__body ">
          <button onClick={logoutHandle} className="button  loginButton">
            Salir
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutForm;
