import React from "react";
import { firestore } from "firebase";

const Firestore = () => {
  const HandleClick = () => {
    firestore()
      .collection("users")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const datos = doc.data();
          console.log(datos);
        });
      });
  };
  return (
    <div>
      <h3>Firestore test</h3>
      <button onClick={() => HandleClick()}>click me to check firestore</button>
    </div>
  );
};

export default Firestore;
