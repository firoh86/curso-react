import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// para borrar con firestore
import firestoreActions from "../../hooks/firebase/firestoreActions";

// para redux
import { useSelector } from "react-redux";

const ConfessionCard = props => {
  // para saber si el usuario coincide con el que envio el post
  const state = useSelector(state => state);
  const [, , , DeletePost] = firestoreActions();

  const HandleClick = () => {
    if (state.isloged) {
      console.log("esta logeado he hizo click");
      DeletePost(state.userid, props.data.post);
    }
  };

  return (
    <div className="post-card">
      <div className="form-block-vertical">
        <div className="post-header">
          <div className="post-header-block">
            <p className="post-header-text">{props.data.nickname}</p>
            <p className="post-header-text">{props.data.date}</p>
          </div>
          {/* reportar post / borrar post propios */}
          <button className=" post-button " onClick={() => HandleClick()}>
            <FontAwesomeIcon icon={faBars} size="1x" className="post__icon" />
          </button>
        </div>

        <div className="form-element">{props.data.post}</div>
      </div>
    </div>
  );
};

export default ConfessionCard;
