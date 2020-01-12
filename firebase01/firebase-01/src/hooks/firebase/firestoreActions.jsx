import { firestore } from "firebase";
// para redux actions
import Actions from "../../components/redux/Actions";

const FirestoreActions = () => {
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
      .set(newData)
      .catch(error => console.log(error));
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
      })
      .catch(error => console.log(error));
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
      .set(newData)
      .catch(error => console.log(error));
  };

  const DeletePost = (uid, post) => {
    let deletepost = "";
    firestore()
      .collection("confesiones")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          // console.log(doc.data());
          const data = doc.data();
          // console.log(`${uid} ${data.uid}`);
          if (data.post === post && data.uid === uid) {
            console.log("coincide post y uid");
            deletepost = doc.id;
            // console.log(deletepost);
            DeleteData(deletepost);
          }
        });
      })
      .catch(error => console.log(error));

    // si coincide guarda el doc id y lo muestra para luego borrarlo
  };

  const DeleteData = id => {
    firestore()
      .collection("confesiones")
      // siempre va a necesitar un id
      .doc(id)
      .delete()
      .catch(error => console.log(error));
  };

  return [SetNewUser, LoginUpdateData, SetPost, DeletePost];
};

export default FirestoreActions;
