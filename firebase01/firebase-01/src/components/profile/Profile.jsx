import React, { useState, useEffect } from "react";
// para state de redux
import { useSelector } from "react-redux";
import { firestore } from "firebase";

const Profile = () => {
  const state = useSelector(state => state);
  const [profileData, setProfileData] = useState({});
  // pasarlo al state de redux para que no tenga delay
  useEffect(() => {
    const fillProfile = uid => {
      firestore()
        .collection("users")
        .get()
        .then(snapshot => {
          const newProfileData = snapshot.docs
            .filter(data => data.id === uid)[0]
            .data();
          setProfileData({
            ...profileData,
            nickname: newProfileData.nickname,
            description: newProfileData.description,
            likes: newProfileData.likes,
            followers: newProfileData.followers,
            following: newProfileData.following
          });
        });
    };
    fillProfile(state.userid);
  }, [profileData, state.userid]);

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
