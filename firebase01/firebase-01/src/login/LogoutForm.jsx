import React from "react";
import FirebaseAuth from "../hooks/firebaseAuth";

const LogoutForm = () => {
  // firebaseAuth
  const [, , logout] = FirebaseAuth();

  const logoutHandle = e => {
    e.preventDefault();
    logout();
  };
  return (
    <div>
      <button onClick={logoutHandle}>Salir</button>
    </div>
  );
};

export default LogoutForm;
