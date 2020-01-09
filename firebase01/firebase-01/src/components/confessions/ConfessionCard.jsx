import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const confessionCard = props => {
  return (
    <div className="post-card">
      <div className="form-block-vertical">
        <div className="post-header">
          <div className="post-header-block">
            <p className="post-header-text">{props.data.nickname}</p>
            <p className="post-header-text">{props.data.date}</p>
          </div>

          <button className=" post-button ">
            <FontAwesomeIcon icon={faBars} size="1x" className="post__icon" />
          </button>
        </div>

        <div className="form-element">{props.data.post}</div>
      </div>
    </div>
  );
};

export default confessionCard;
