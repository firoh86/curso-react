import React from "react";

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="card-profile">
        <div className="card-profile__image">
          <img src="" alt=""></img>
        </div>
        <div className="card-profile__header">
          <div className="card-profile__title">
            <h3 className="card-profile__nickname">Firoh</h3>
            <p className="card-profile__description">Breve descripcion</p>
          </div>
        </div>
        <div className="card-profile__body">
          <div className="card-profile__column">
            <h2 className="card-profile__count">12</h2>
            <h4 className="card-profile__subtitle">Likes</h4>
          </div>
          <div className="card-profile__column">
            <h2 className="card-profile__count">14</h2>
            <h4 className="card-profile__subtitle">Followers</h4>
          </div>
          <div className="card-profile__column">
            <h2 className="card-profile__count">18</h2>
            <h4 className="card-profile__subtitle">Following</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
