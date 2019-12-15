import React from "react";
import { firestore } from "firebase";

const DemoCrud = () => {
  const HandleClick = () => {
    firestore()
      .collection("users")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data());
          /*  const datos = doc.data();
          console.log(datos); */
        });
      });
  };
  // Set data si existe se actualiza, si no existe lo crea
  const SettData = () => {
    const newData = {
      nickname: "Rosa",
      description: "Sentado se vive mejor",
      followers: "8000",
      following: "1000",
      likes: "10"
    };
    const setDoc = firestore()
      .collection("users")
      // si no le pasas parametro a .doc google genera Id unico
      .doc("oepPeWXX4wv9bVgCXARU")
      .set(newData);
  };
  const addData = () => {
    const addDoc = {
      nickname: "Rosa",
      description: "Sentado se vive mejor",
      followers: "8000",
      following: "1000",
      likes: "10"
    };
    // Add data inserta datos en la colcción
    const addData = firestore()
      .collection("users")
      // si no le pasas parametro a .doc google genera Id unico
      .add(addDoc)
      .then(ref => {
        console.log(ref.id);
      });
  };

  const deleteData = id => {
    const deleteData = firestore()
      .collection("users")
      // siempre va a necesitar un id
      .doc(id)
      .delete();
  };

  return (
    <div>
      <h3>Firestore test</h3>
      <button onClick={() => HandleClick()}>click me to get data</button>
      <button onClick={() => SettData()}>Send data</button>
      <button onClick={() => addData()}>Add data</button>
      <button onClick={() => deleteData()}>Delete Data</button>
    </div>
  );
};

export default DemoCrud;
