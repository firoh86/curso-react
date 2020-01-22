import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";

import CommentsForm from "../comments/CommentsForm";

// para borrar con firestore
import firestoreActions from "../../hooks/firebase/firestoreActions";

// para redux
import { useSelector } from "react-redux";
// para los comentarios de los posts
import ConfessionComment from "./ConfessionComment";

const ConfessionCard = props => {
  // para saber si el usuario coincide con el que envio el post
  const state = useSelector(state => state);
  const [, , , DeletePost] = firestoreActions();

  const [buttonPanel, setButtonPanel] = useState(false);
  const [showcomments, setShowcomments] = useState(false);

  const HandleShowComments = () => {
    setShowcomments(showcomments => !showcomments);
  };

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

  // console.log(props.comments);

  return (
    <div className="post-card" onMouseLeave={() => HandleLeave()}>
      <div className="form-block-vertical">
        <div className="post-header">
          <div className="post-pic-container ">
            <img
              src={props.data.profilepic}
              alt={`profilepic ${props.data.nickname}`}
            />
          </div>
          <div className="post-header-block">
            <p className="post-header-text post-nickname">
              {props.data.nickname}
            </p>
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
        <div className="form-block-horizontal">
          <div className="form-block-horizontal"></div>
          {!showcomments ? (
            <button
              className=" button-show-comments "
              onClick={() => HandleShowComments()}
            >
              ◢
            </button>
          ) : (
            <>
              <button
                className=" button-show-comments purple"
                onClick={() => HandleShowComments()}
              >
                ◤
              </button>
            </>
          )}
        </div>
        {showcomments && (
          <div>
            {props.comments.map(
              (item, idx) =>
                item.commentID === props.data.postID.id && (
                  <ConfessionComment key={idx} data={item} />
                )
            )}
          </div>
        )}
        {state.isloged && <CommentsForm id={props.data.postID.id} />}
      </div>
    </div>
  );
};

export default ConfessionCard;
