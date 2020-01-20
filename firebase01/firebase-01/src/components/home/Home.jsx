import React, { useState, useEffect } from "react";
import PostFormulary from "../elements/PostFormulary";
import ConfessionCard from "../confessions/ConfessionCard";
import { firestore } from "firebase";

const Home = () => {
  const db = firestore().collection("confesiones");

  // lista de confesiones/posts
  const [listprops, setListProps] = useState();

  //todos los comentarios para filtrar en los posts
  // const [comments, setComments] = useState();
  // actualiza los post en tiempo real desde firestore y sanea el efecto cortando la promesa si el componente se desmonta

  /*   const unsubscribe = useCallback(() => {
    let list = [];
    db.collection("confesiones")
      .orderBy("date", "desc")
      .onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          const post = doc.data();
          list.push(post);
        });
        setListProps(list);
        console.log(list);
        // list = [];
      });
  }, [db]);

  const unsubscribe2 = useCallback(() => {
    let list = [];
    db.collection("comentarios").onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        const comment = doc.data();
        list.push(comment);
      });

      setComments(list);
      console.log(list);
      list = [];
    });
  
  }, [db]); */

  useEffect(() => {
    let list = {};
    const test = firestore()
      .collection("confesiones")
      .orderBy("date", "desc")
      .onSnapshot(snapshot => {
        const everypost = snapshot.docs.map(doc => ({
          ...doc.data()
        }));

        setListProps(everypost);
        list = {};
      });
    console.log(list);
    return () => test();
  }, []);

  return (
    <div>
      <h3 className="form-tittle header-top">Confesiones anónimas</h3>
      <div className="posts-Container ">
        {/* comprobar que ambos campos estan rellenos antes de crear la lista de posts */}
        {/*     {listprops &&
          comments &&
          listprops.map((item, idx) => (
            <ConfessionCard key={idx} data={item} comments={comments} />
          ))} */}
        {listprops &&
          listprops.map((item, idx) => (
            <ConfessionCard key={idx} data={item} />
          ))}
      </div>
      <PostFormulary />
    </div>
  );
};

export default Home;
