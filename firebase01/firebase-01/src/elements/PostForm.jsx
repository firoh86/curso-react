import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faEraser } from "@fortawesome/free-solid-svg-icons";

const PostForm = () => {
  return (
    <div className="form-container">
      <div className="form-card">
        <h3 className="form-tittle">Confesionario</h3>
        <div className="form-block-horizontal">
          <div>
            <textarea
              rows="8"
              cols="15"
              maxlength="400"
              className="form-element"
              placeholder="Escribe una confesión anónima"
            ></textarea>
          </div>
        </div>

        <div className="form-block-horizontal">
          <button className="form-button">
            <FontAwesomeIcon icon={faEraser} size="1x" className="post__icon" />
          </button>
          <button className="form-button">
            <FontAwesomeIcon
              icon={faArrowRight}
              size="1x"
              className="post__icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
