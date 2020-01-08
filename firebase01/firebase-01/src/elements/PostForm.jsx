import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// custom hook

import PostInputs from "../hooks/PostInputs";

// para redux
import { useSelector } from "react-redux";

const PostForm = () => {
  // custom hook
  const [bindPost, confesion] = PostInputs();

  const [postForm, setPostForm] = useState(false);
  const [postFormlenght, setPostFormlenght] = useState(false);

  useEffect(() => {
    if (confesion) {
      let alenght = JSON.stringify(confesion);
      setPostFormlenght(alenght.length);
    }
  }, [confesion]);

  // para saber si el usuario esta logeado
  const state = useSelector(state => state);
  const handlePost = () => {
    setPostForm(postForm => !postForm);
  };

  return (
    <>
      {state.isloged &&
        // button post
        (!postForm ? (
          <div className="post-container">
            <button className="button-small" onClick={() => handlePost()}>
              <FontAwesomeIcon icon={faEdit} size="1x" className="post__icon" />
            </button>
          </div>
        ) : (
          // form post
          <div className="form-container">
            <div className="form-card">
              <h3 className="form-tittle">Confesionario</h3>
              <div className="form-block-horizontal">
                <div>
                  <textarea
                    rows="8"
                    cols="15"
                    maxLength="400"
                    className="form-element"
                    placeholder="Escribe una confesión anónima"
                    {...bindPost}
                  ></textarea>
                </div>
              </div>

              <div className="form-block-horizontal">
                <p className="form-subtittle smalltext">{`quedan ${398 -
                  postFormlenght} carácteres`}</p>
              </div>
              <div className="form-block-horizontal">
                <button className="form-button" onClick={() => handlePost()}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    size="1x"
                    className="post__icon"
                  />
                </button>
                <button className="form-button" onClick={() => handlePost()}>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    className="post__icon"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default PostForm;
