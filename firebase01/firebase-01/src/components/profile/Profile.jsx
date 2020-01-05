import React, { useEffect } from "react";
// para state de redux
import { useSelector } from "react-redux";

const Profile = () => {
  const state = useSelector(state => state);
  // pasarlo al state de redux para que no tenga delay
  useEffect(() => {
    // En caso de que se actualizen los datos del state mientras estas en el perfil, actualizame el perfil
  }, [state]);

  return (
    <div className="profile__container">
      <div className="card-profile">
        <div className="card-profile__image">
          <img src="" alt=""></img>
        </div>
        <div className="card-profile__header">
          <div className="card-profile__title">
            <h3 className="card-profile__nickname">{state.usernickname}</h3>
            <p className="card-profile__description">{state.description}</p>
          </div>
        </div>
        <div className="card-profile__body">
          <div className="card-profile__column">
            <h2 className="card-profile__count">{state.likes}</h2>
            <h4 className="card-profile__subtitle">Likes</h4>
          </div>
          <div className="card-profile__column">
            <h2 className="card-profile__count">{state.followers}</h2>
            <h4 className="card-profile__subtitle">Followers</h4>
          </div>
          <div className="card-profile__column">
            <h2 className="card-profile__count">{state.following}</h2>
            <h4 className="card-profile__subtitle">Following</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

/*  */
