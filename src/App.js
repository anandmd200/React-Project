import React from "react";
import ReactDOM from "react-dom/client";

const Profile = ({ scientist }) => {
  console.log(scientist);
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

const Header = () => {
  return (
    <div>
      <h1>Scientist List </h1>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Scientist List Footer</h1>
    </div>
  );
};

const Layout = () => {
  const scientistList = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
      accomplishment: "spaceflight calculations",
      imageId: "https://i.imgur.com/MK3eW3As.jpg",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
      accomplishment: "discovery of Arctic ozone hole",
      imageId: "https://i.imgur.com/mynHUSa.jpg",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
      accomplishment: "electromagnetism theory",
      imageId: "https://i.imgur.com/bE7W1ji.jpg",
    },
    {
      id: 3,
      name: "Percy Lavon Julian",
      profession: "chemist",
      accomplishment:
        "pioneering cortisone drugs, steroids and birth control pills",
      imageId: "https://i.imgur.com/IOjWm71.jpg",
    },
    {
      id: 4,
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
      accomplishment: "white dwarf star mass calculations",
      imageId: "https://i.imgur.com/lrWQx8l.jpg",
    },
  ];

  const ProfileComponents = scientistList.map((ele) => (
    <Profile scientist={ele} />
  ));

  console.log(ProfileComponents);

  return (
    <div>
      <Header />
      <section id="body">{ProfileComponents}</section>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
