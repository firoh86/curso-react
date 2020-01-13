import { useState } from "react";

const ProfileInputs = initialValue => {
  // campos del formulario
  const [nickname, setNickname] = useState(initialValue);
  const [description, setDescription] = useState(initialValue);

  // actualizacion de los campos
  const bindNickname = {
    nickname,
    onChange: e => {
      setNickname(e.target.value);
    }
  };
  const bindDescription = {
    description,
    onChange: e => {
      setDescription(e.target.value);
    }
  };
  const reset = () => {
    setNickname(initialValue);
    setDescription(initialValue);
  };

  return [nickname, description, bindNickname, bindDescription, reset];
};

export default ProfileInputs;
