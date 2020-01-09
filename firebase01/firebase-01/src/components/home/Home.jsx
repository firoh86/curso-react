import React, { useState, useEffect } from "react";
import PostFormulary from "../elements/PostFormulary";
import ConfessionCard from "../confessions/ConfessionCard";

import { firestore } from "firebase";
const Home = () => {
  const [listprops, setListProps] = useState();
  useEffect(() => {
    const list = [];
    firestore()
      .collection("confesiones")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          const post = doc.data();
          list.push(post);
        });
        setListProps(list);
      });
  }, []);

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
