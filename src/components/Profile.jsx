import React from "react";

const Profile = ({ scientist }) => {
  return (
    <div>
      <img src={scientist.imageId} alt="image of scientist" />
      <h3>{scientist.name}</h3>
      <p>
        <strong>Accomplishment: </strong> {scientist.accomplishment}
      </p>
      <p>
        <strong>Profession: </strong> {scientist.profession}
      </p>
    </div>
  );
};

export default Profile;
