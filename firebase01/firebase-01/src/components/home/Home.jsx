import React, { useState, useEffect } from "react";
import PostFormulary from "../elements/PostFormulary";
import ConfessionCard from "../confessions/ConfessionCard";

import { firestore } from "firebase";

const Home = () => {
  const [listprops, setListProps] = useState();
  // actualiza los post en tiempo real desde firestore y sanea el efecto cortando la promesa si el componente se desmonta
  useEffect(() => {
    let isSubscribed = true;
    let list = [];
    const db = firestore().collection("confesiones");

    db.orderBy("date", "desc")
      .get()
      .then(snapshot => {
        if (isSubscribed) {
          snapshot.forEach(doc => {
            const post = doc.data();
            list.push(post);
          });
          setListProps(list);
        }
      })
      .catch(error => {
        if (isSubscribed) {
          console.log(error);
        }
      });

    return () => (isSubscribed = false);
  }, [listprops]);

  return (
    <div>
      <h3 className="form-tittle header-top">Confesiones anónimas</h3>
      <div className="posts-Container ">
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
