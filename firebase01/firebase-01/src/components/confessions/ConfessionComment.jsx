import React from "react";
const ConfessionComment = props => {
  return (
    <div className="form-block-vertical">
      {/*  <span className="tip tip-up"></span> */}
      <div className="post-comments">
        <p className="post-nickname">{props.data.nickname}</p>
        <p>{props.data.comment}</p>
      </div>
    </div>
  );
};

export default ConfessionComment;
