import React, { useState } from "react";
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";
import SingUpForm from "./SingUpForm";

const Login = () => {
  const [isloged, setIsloged] = useState(false);
  // al inicio siempre en falso
  const [create, setCreate] = useState(false);

  const isCreating = () => {
    setCreate(create => !create);
  };

  const islogedFunction = () => {
    setIsloged(isloged => !isloged);
    // console.log(isloged);
  };

  return (
    <div>
      {isloged ? (
        <LogoutForm isloged={islogedFunction}></LogoutForm>
      ) : (
        <div>
          {create ? (
            <SingUpForm create={isCreating}></SingUpForm>
          ) : (
            <LoginForm isloged={islogedFunction} create={isCreating} />
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
