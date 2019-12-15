import { firestore } from "firebase";

const firestoreActions = () => {
  const SetNewUser = (uid, nickname) => {
    // console.log(`${uid} -- ${nickname}`);
    const newData = {
      uid: uid,
      nickname: nickname,
      description: "Escribe aqui una breve descripción de ti",
      followers: 0,
      following: 0,
      likes: 0
    };
    const setUser = firestore()
      .collection("users")
      // si no le pasas parametro a .doc google genera Id unico
      .doc(newData.uid)
      .set(newData);
  };

  const ReadUserProfile = uid => {
    firestore()
      .collection("users")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const data = doc.data();
          if (uid === data.uid) {
            // guardar la funcion de llamada en una constante para extraer datos
            return data;
          }
        });
      });
  };
  return [SetNewUser, ReadUserProfile];
};

export default firestoreActions;
