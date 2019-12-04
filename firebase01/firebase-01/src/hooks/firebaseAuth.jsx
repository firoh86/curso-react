import { useState } from "react";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";

const FirebaseAuth = (email, password) => {
  // user id unica
  const [uid, setUid] = useState();
  // hook de firebase
  const firebase = useFirebaseApp();
  // login firebase
  const login = async () => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        let userid = firebase.auth().currentUser.uid;
        setUid(userid);
        console.log(uid);
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
  // return de los metodos de login, sing up y log out
  return [login];
};

export default FirebaseAuth;
