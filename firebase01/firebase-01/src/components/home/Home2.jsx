import React, { useState, useEffect } from "react";
import PostFormulary from "../elements/PostFormulary";
import ConfessionCard from "../confessions/ConfessionCard";
import { firestore } from "firebase";

const Home = () => {
  const db = firestore();

  // lista de confesiones/posts
  const [listprops, setListProps] = useState();

  //todos los comentarios para filtrar en los posts
  const [comments, setComments] = useState();
  // actualiza los post en tiempo real desde firestore y sanea el efecto cortando la promesa si el componente se desmonta
  useEffect(() => {
    let isSubscribed = true;
    let list = [];
    // para posts
    db.collection("confesiones")
      .orderBy("date", "desc")
      .get()
      .then(snapshot => {
        if (isSubscribed) {
          snapshot.forEach(doc => {
            const post = doc.data();
            list.push(post);
          });
          setListProps(list);
        }
        list = [];
      })
      .catch(error => {
        if (isSubscribed) {
          console.log(error);
        }
      });
    // para comentarios
    db.collection("comentarios")
      .get()
      .then(snapshot => {
        if (isSubscribed) {
          snapshot.forEach(doc => {
            const comment = doc.data();
            list.push(comment);
          });
          setComments(list);
        }
        list = [];
      })
      .catch(error => {
        if (isSubscribed) {
          console.log(error);
        }
      });
    return () => (isSubscribed = false);
  }, [db]);

  return (
    <div>
      <h3 className="form-tittle header-top">Confesiones anónimas</h3>
      <div className="posts-Container ">
        {/* comprobar que ambos campos estan rellenos antes de crear la lista de posts */}
        {listprops &&
          comments &&
          listprops.map((item, idx) => (
            <ConfessionCard key={idx} data={item} comments={comments} />
          ))}
      </div>
      <PostFormulary />
    </div>
  );
};

export default Home;
