import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || nickname === "") {
      alert("Fill the field correctly");
      return;
    }

    let config = { username, nickname };

    localStorage.setItem("config", JSON.stringify(config));
    onLogin(config);
  };

  return (
    <div className="content">
      <div style={{ width: "300px", margin: "100px auto" }}>
        <h3 className="title has-text-centered">LOGIN</h3>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="Nickname"
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
          </div>

          <button className="button is-info is-fullwidth">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
