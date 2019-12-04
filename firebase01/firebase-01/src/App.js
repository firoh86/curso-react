import React from "react";
import "./App.css";
import LoginForm from "./login/LoginForm";
import SingUpForm from "./login/SingUpForm";
import LogoutForm from "./login/LogoutForm";

function App() {
  return (
    <div className="App">
      <LoginForm></LoginForm>
      <SingUpForm></SingUpForm>
      <LogoutForm></LogoutForm>
    </div>
  );
}

export default App;
