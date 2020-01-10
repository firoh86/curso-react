import { firestore } from "firebase";
// para redux actions
import Actions from "../../components/redux/Actions";

const firestoreActions = () => {
  // actions de redux
  const [, logData] = Actions();

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

  // actualizar state de redux con la info de firestore al logearse
  const LoginUpdateData = uid => {
    firestore()
      .collection("users")
      .get()
      .then(snapshot => {
        const newProfileData = snapshot.docs
          .filter(data => data.id === uid)[0]
          .data();
        const newData = {
          nickname: newProfileData.nickname,
          description: newProfileData.description,
          likes: newProfileData.likes,
          followers: newProfileData.followers,
          following: newProfileData.following
        };
        logData(newData);
      });
  };

  // Set data si existe se actualiza, si no existe lo crea
  const SetPost = (nickname, uid, post, date) => {
    const newData = {
      nickname: nickname,
      uid: uid,
      post: post,
      date: date
    };
    firestore()
      .collection("confesiones")
      // si no le pasas parametro a .doc google genera Id unico
      .doc()
      .set(newData);
  };

  return [SetNewUser, LoginUpdateData, SetPost];
};

export default firestoreActions;
