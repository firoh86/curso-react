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
    firestore()
      .collection("users")
      // si no le pasas parametro a .doc google genera Id unico
      .doc(newData.uid)
      .set(newData);
  };

  return [SetNewUser];
};

export default firestoreActions;
