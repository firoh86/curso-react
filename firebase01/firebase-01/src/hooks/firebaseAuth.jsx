// import { useState } from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";

const FirebaseAuth = () => {
  // user id unica desde firebase.auth().currentUser.uid;
  let userID;
  // hook de firebase
  const firebase = useFirebaseApp();

  // login auth firebase
  const login = async (email, password) => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        userID = firebase.auth().currentUser.uid;

        console.log(userID);

        alert("Se ha logeado con exito");
      })
      .catch(err => {
        // Handle Errors here.
        let errorCode = err.code;
        let errorMessage = err.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
      });
  };

  const singup = async (email, password, repassword) => {
    if (password === repassword) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
          userID = firebase.auth().currentUser.uid;

          console.log(userID);

          alert("Te has registrado con exito");
        })
        .catch(err => {
          // Handle Errors here.
          let errorCode = err.code;
          let errorMessage = err.message;
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
        });
    } else {
      alert("the passwords must be the same");
    }
  };
  const logout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(data => {
        userID = null;

        alert("Se ha deslogeado con exito");
      })
      .catch(err => {
        alert(err);
      });
  };

  // return de los metodos de login, sing up y log out
  return [login, singup, logout];
};

export default FirebaseAuth;
