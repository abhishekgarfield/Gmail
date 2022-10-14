import { useState } from "react";
import { useSelector } from "react-redux";

const Authscreen = () => {
  const [islogin, Setislogin] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  console.log(user);
  return (
    <div className="authscreen-main-container">
      <div className="mid-container">
        <div className="google-logo">
          <img src="https://i.imgur.com/eKUuaya.png" />
        </div>
        <div className="authscreen-title">{islogin ? "Sign in" : "Signup"}</div>
        <div className="authscreen-info">
          <span>to continue to Gmail</span>
        </div>
        <div className="authscreen-form">
          {!islogin && <input type="text" placeholder="Name" name="name" />}
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          {!islogin && (
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmpassword"
            />
          )}

          {!islogin && (
            <input type="url" placeholder="Profile pic" name="profile_pic" />
          )}
        </div>
        {error && <p>{error}</p>}
        <div className="authscreen-footer">
          <div className="aithscreen-options">
            <div className="authscreen-question">
              <span className="question-login">
                {islogin
                  ? "Don't have an account?"
                  : "Already having an account?"}
              </span>
              <span className="qurstion-button">
                {islogin ? "Create account" : "Sign in"}
              </span>
            </div>
          </div>
          <div className="authscreen-submit">
            <input type="button" value={islogin ? "Signin" : "Sign up"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Authscreen;
