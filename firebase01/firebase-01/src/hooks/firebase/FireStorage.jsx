import React from "react";
import firebase from "firebase";
const FireStorage = () => {
  const storage = firebase.storage();

  const HandleUpload = e => {
    console.log("esta subiendo" + e);
  };
  return (
    <div className="form-block-vertical">
      <p className="smalltext ">Cambia tu avatar</p>
      <input
        className="form-element"
        type="file"
        onChange={e => HandleUpload()}
      />
      <button className="form-button">Enviar</button>
    </div>
  );
};

export default FireStorage;
