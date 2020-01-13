import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";

// para borrar con firestore
import firestoreActions from "../../hooks/firebase/firestoreActions";

// para redux
import { useSelector } from "react-redux";

const ConfessionCard = props => {
  // para saber si el usuario coincide con el que envio el post
  const state = useSelector(state => state);
  const [, , , DeletePost] = firestoreActions();

  const [buttonPanel, setButtonPanel] = useState(false);

  const HandleDelete = () => {
    console.log("esta logeado he hizo click");
    DeletePost(state.userid, props.data.post);
    setButtonPanel(buttonPanel => !buttonPanel);
  };

  const Handlebuttonpanel = () => {
    setButtonPanel(buttonPanel => !buttonPanel);
  };
  const HandleBan = () => {
    console.log("vas a reportar un post");
    setButtonPanel(buttonPanel => !buttonPanel);
  };
  const HandleLeave = () => {
    if (buttonPanel) {
      setButtonPanel(buttonPanel => !buttonPanel);
    }
  };

  return (
    <div className="post-card" onMouseLeave={() => HandleLeave()}>
      <div className="form-block-vertical">
        <div className="post-header">
          <div className="post-header-block">
            <p className="post-header-text">{props.data.nickname}</p>
            <p className="post-header-text">{props.data.date}</p>
          </div>
          {state.isloged &&
            (!buttonPanel ? (
              <>
                <button
                  className=" post-button "
                  onClick={() => Handlebuttonpanel()}
                >
                  <FontAwesomeIcon
                    icon={faBars}
                    size="1x"
                    className="post__icon"
                  />
                </button>
              </>
            ) : (
              <div className="form-block-horizontal">
                <button className=" post-button " onClick={() => HandleBan()}>
                  <FontAwesomeIcon
                    icon={faBan}
                    size="1x"
                    className="post__icon"
                  />
                </button>
                <button
                  className=" post-button "
                  onClick={() => HandleDelete()}
                >
                  <FontAwesomeIcon
                    icon={faTrash}
                    size="1x"
                    className="post__icon"
                  />
                </button>
              </div>
            ))}
        </div>

        <div className="form-element">{props.data.post}</div>
      </div>
    </div>
  );
};

export default ConfessionCard;
