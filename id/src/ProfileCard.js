// ProfileCard.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./portfilecard.css";

const ProfileCard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setUser(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="container">
      {user && (
        <div className="outer-card">
        <div className="profile-card">
          <div className="profile-picture-container">
            <img
              className="profile-picture"
              src={user.picture.medium}
              alt={user.name.first}
            />
          </div>
          <div className="profile-info">
            <div className="profile-name">Name: {`${user.name.first} ${user.name.last}`}</div>
            <p className="profile-email">
            Gender: {user.gender}
            </p>
              <p className="profile-email">

              Phone: {user.phone}
              </p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
