import React from "react";
import Profile from "./Profile";
import scientistList from "../constants/constant";
import cardStyle from "../styles/cardStyle";

const Body = ({ num }) => {
  let ProfileListItems = [];
  for (let i = 0; i < scientistList.length; i++) {
    ProfileListItems.push(
      <li style={cardStyle.li} key={i}>
        <Profile scientist={scientistList[i]} />
      </li>
    );
  }

  console.log("all profiles", ProfileListItems);

  return (
    <div>
      <h1>This is a collection of Profiles</h1>
      <ul style={cardStyle.ul}>{ProfileListItems}</ul>
    </div>
  );
};

export default Body;
