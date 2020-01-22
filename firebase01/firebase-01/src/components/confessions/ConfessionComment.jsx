import React from "react";
const ConfessionComment = props => {
  return (
    <div className="form-block-vertical">
      <div className=" form-block-horizontal ">
        <div className="post-comments">
          <p>
            <span className="post-nickname">{props.data.nickname}</span>
            {props.data.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfessionComment;
