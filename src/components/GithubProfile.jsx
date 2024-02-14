import React, { useEffect, useState } from "react";
import User from "./User";
import "./styles.css";

const GithubProfile = () => {
  const [userName, setUserName] = useState("gurusharan-gs");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = () => {
    fetchGithubUserData();
  };

  const fetchGithubUserData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      if (data) {
        setUserData(data);
        setLoading(false);
        setUserName("");
      }
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  console.log(userData);

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }
  if (err) {
    return <h1>Something want wrong...</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-name"
          placeholder="Search GitHub Profile.."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      <div>{userData !== null ? <User user={userData} /> : null}</div>
    </div>
  );
};

export default GithubProfile;
