// verificate email
import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";

const Login = () => {
  const firebase = useFirebaseApp();
  // por defecto se muestra login
  const [registerForm, setRegisterForm] = useState(false);
  // controlador de log
  const [isloged, setisloged] = useState(false);
  let user;
  const [useridForm, setUserIdForm] = useState({
    email: "",
    password: "",
    verification: "",
    nickname: "",
    userUid: ""
  });
  const [userid, setUserId] = useState({
    email: "",
    password: "",
    nickname: "",
    userUid: ""
  });
  // toggle del form de inicio
  const toggleForm = () => setRegisterForm(!registerForm);
  // carpeta services
  const register = async e => {
    if (useridForm.password === useridForm.verification) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(useridForm.email, useridForm.password)
        .then(data => {
          let uid = firebase.auth().currentUser.uid;
          setUserId({
            ...userid,
            email: useridForm.email,
            password: useridForm.password,
            userUid: uid
          });
          user = firebase.auth().currentUser;
          setisloged(true);
          resetValues();
        })
        .catch(err => {
          // Handle Errors here.
          let errorCode = err.code;
          let errorMessage = err.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
            resetValues();
          } else {
            alert(errorMessage);
          }
          // console.log(err);
        });
    } else {
      alert("the passwords must be the same");
    }
    // console.log(user);
  };
  const login = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(useridForm.email, useridForm.password)
      .then(data => {
        let uid = firebase.auth().currentUser.uid;
        setUserId({
          ...userid,
          email: useridForm.email,
          password: useridForm.password,
          userUid: uid
        });
        user = firebase.auth().currentUser;
        setisloged(true);
        resetValues();
      })
      .catch(err => {
        // Handle Errors here.
        let errorCode = err.code;
        let errorMessage = err.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
          resetValues();
        } else {
          alert(errorMessage);
        }
        // console.log(err);
      });

    // console.log(user);
  };

  const logout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(
        data =>
          setUserIdForm({
            ...useridForm,
            email: "",
            password: "",
            nickname: "",
            userUid: ""
          }),
        resetValues("ID")
      );
    user = null;
    setisloged(false);
    console.log(user);
  };

  // resetea los valores del form
  const resetValues = e => {
    if (e === "ID") {
      setUserId({
        email: "",
        password: "",
        nickname: "",
        userUid: ""
      });
      console.log("reset user");
    } else {
      setUserIdForm({
        email: "",
        password: "",
        nickname: "",
        userUid: ""
      });
      console.log("reset Form");
    }
  };

  return (
    <div className="login">
      {!isloged ? (
        <div className="login__row">
          <h4 className="login__tittle">
            {registerForm ? "Crear Cuenta" : "Iniciar Sesión"}
          </h4>

          <input
            onChange={e =>
              setUserIdForm({ ...useridForm, email: e.target.value })
            }
            type="email"
            placeholder="email"
            id="email"
            value={useridForm.email}
          ></input>
          <input
            onChange={e =>
              setUserIdForm({ ...useridForm, password: e.target.value })
            }
            type="password"
            placeholder="contraseña"
            id="contraseña"
            value={useridForm.password}
          ></input>
          {registerForm && (
            <div>
              <input
                onChange={e =>
                  setUserIdForm({ ...useridForm, nickname: e.target.value })
                }
                type="text"
                placeholder="usuario"
                id="usuario"
                value={useridForm.nickname}
              ></input>
              <input
                onChange={e =>
                  setUserIdForm({ ...useridForm, verification: e.target.value })
                }
                type="password"
                placeholder="repita contraseña"
                id="verification"
                value={useridForm.verification}
              ></input>
            </div>
          )}
          {registerForm ? (
            <button className="login__button" onClick={register}>
              register
            </button>
          ) : (
            <button className="login__button" onClick={login}>
              login
            </button>
          )}
          <p>
            {registerForm
              ? "¿Ya estás registrado? "
              : "¿Aun no tienes cuenta? "}
            <button
              onClick={() => {
                toggleForm();
                resetValues();
              }}
            >
              {registerForm ? "Accede ya" : "Create una"}
            </button>
          </p>
        </div>
      ) : (
        <div className="login__row">
          <h4 className="login__tittle">Cerrar Sesión</h4>
          <button className="login__button" onClick={logout}>
            logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
