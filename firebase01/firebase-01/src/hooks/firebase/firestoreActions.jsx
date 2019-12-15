import { firestore } from "firebase";

const firestoreActions = () => {
  const SetNewUser = (uid, nickname) => {
    console.log(`${uid} -- ${nickname}`);
    const newData = {
      uid: uid,
      nickname: nickname,
      description: "",
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
  return [SetNewUser];
};

export default firestoreActions;
