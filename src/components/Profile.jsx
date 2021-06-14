import React from "react";

const Profile = (props) => {
  const { profile } = props;
  return (
    profile && (
      <div className="main-container">
        <h3 className="page-title">Profile</h3>
        <div className="profile-container" key={profile.email}>
          <img
            className="profile-image"
            src={profile.avatarImage}
            alt="profile image"
          ></img>
          <div>
            <div>
              <span className="label">First name</span>
              <span className="value">{profile.firstName}</span>
            </div>
            <div>
              <span className="label">Last name</span>
              <span className="value">{profile.lastName}</span>
            </div>
            <div>
              <span className="label">Phone</span>
              <span className="value">{profile.phone}</span>
            </div>
            <div>
              <span className="label">Email</span>
              <span className="value">{profile.email}</span>
            </div>
            <div>
              <span className="label">Bio</span>
              <span className="value">{profile.bio}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
