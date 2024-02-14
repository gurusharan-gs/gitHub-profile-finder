import React from "react";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
    bio,
    location,
    blog,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div className="name-profile">
        <div>
          <img src={avatar_url} alt={name} className="avatar" />
        </div>
        <div className="name-container">
          <a target="_blank" href={`https://github.com/${login}`}>
            {name || login}
          </a>
          <p>{`user joined on ${createdDate.getDate()} ${createdDate.toLocaleString(
            "en-us",
            { month: "short" }
          )} ${createdDate.getFullYear()}`}</p>
        </div>
      </div>

      <div className="main-info">
        <div>
          <div className="info">
            <h3>Followers</h3>
            <p>{followers}</p>
          </div>
          <div className="info">
            <h3>Following</h3>
            <p>{following}</p>
          </div>
          <div className="info">
            <h3>Public Repos</h3>
            <p>{public_repos}</p>
          </div>
        </div>

        <div className="main-info-bio">
          <div className="info-bio">
            <h3>Bio</h3>
            <p>{bio}</p>
          </div>
          <div className="info-bio">
            <h3>Location</h3>
            <p>{location}</p>
          </div>
          <div className="info-bio">
            <h3>Portfolio</h3>
            <a target="_blank" className="btn" href={blog}>
              Click Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
