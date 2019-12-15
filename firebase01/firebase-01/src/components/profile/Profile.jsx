import React, { useState, useEffect } from "react";
// para state de redux
import { useSelector } from "react-redux";
import firestoreActions from "../../hooks/firebase/firestoreActions";

const Profile = () => {
  const state = useSelector(state => state);
  // autocompletado de perfil
  const [, ReadUserProfile] = firestoreActions();

  const [profileData, setProfileData] = useState({
    nickname: "",
    description: "",
    likes: 0,
    followers: 0,
    following: 0
  });

  useEffect(() => {
    const ask = async () => {
      const res = await ReadUserProfile(state.userid);
      console.log(res);
    };

    ask();
  }, [ReadUserProfile, state.userid]);

  return (
    <div className="profile__container">
      <div className="card-profile">
        <div className="card-profile__image">
          <img src="" alt=""></img>
        </div>
        <div className="card-profile__header">
          <div className="card-profile__title">
            <h3 className="card-profile__nickname">{profileData.nickname}</h3>
            <p className="card-profile__description">
              {profileData.description}
            </p>
          </div>
        </div>
        <div className="card-profile__body">
          <div className="card-profile__column">
            <h2 className="card-profile__count">{profileData.likes}</h2>
            <h4 className="card-profile__subtitle">Likes</h4>
          </div>
          <div className="card-profile__column">
            <h2 className="card-profile__count">{profileData.followers}</h2>
            <h4 className="card-profile__subtitle">Followers</h4>
          </div>
          <div className="card-profile__column">
            <h2 className="card-profile__count">{profileData.following}</h2>
            <h4 className="card-profile__subtitle">Following</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

/* 

 return () => {
      setProfileData({
        ...profileData,
        nickname: readData.nickname,
        description: readData.description,
        likes: readData.likes,
        followers: readData.followers,
        following: readData.following
      });
    };
*/
