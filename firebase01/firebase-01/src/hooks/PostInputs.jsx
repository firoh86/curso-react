import { useState } from "react";

const PostInputs = initialValue => {
  // campos del formulario
  const [confesion, setConfesion] = useState(initialValue);

  const bindPost = {
    confesion,
    onChange: e => {
      setConfesion(e.target.value);
    }
  };
  return [bindPost, confesion];
};

export default PostInputs;
