import { Error } from "@material-ui/icons";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsloading } from "../Reducers/loaderSlice";

const Authscreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const isloading = useSelector((state) => {
    return state.loader.isloading;
  });
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  const [islogin, setislogin] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    profile_pic: "",
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
   
  };
  const handleSubmit = () => {
    if (
      (!islogin &&
        (user?.email?.length < 1 ||
          user?.name?.length < 1 ||
          user?.password?.length < 1 ||
          user?.profile_pic?.length < 1 ||
          !user)) ||
      (islogin && (user?.email?.length < 1 || user?.password?.length < 1))
    ) {
      return setError(`Fields should not be empty`);
    } else {
      if (
        user.email.match(
          "(^([a-z-A-Z0-9]+)([@]{1})([A-Za-z]*)([.]{1})([a-zA-Z]{2,4}))"
        ) == null
      ) {
        setError("Email should be of type abhishek@gmail.com");
      } else if (!islogin && user.password != user.confirmpassword) {
        setError("Passwords don't match");
      } else {
        setError(null);
        dispatch(setIsloading(true));
        const url = `http://localhost:8000/${islogin ? "signin" : "signup"}`;
        fetch(url, {
          method: "Post",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(user),
        }).then((res) => {
          if (res.status == 403) {
            res.json().then((data) => {
              dispatch(setIsloading(false));
              setError(data);
            });
          }
          if (res.status == 200) {
            res.json().then((data) => {
              setError("");
              dispatch(setIsloading(false));
              setCookie("authToken", data.authToken);
              setCookie("user_id", data.user_id);
              navigation("/home");
              window.location.reload();
            });
          }
        });
      }
    }
  };
  return (
    <div className="authscreen-main-container">
      <div className="mid-container">
        <div className="google-logo">
          <img src="https://i.imgur.com/eKUuaya.png" alt="google logo" />
        </div>
        <div className="authscreen-title">{islogin ? "Sign in" : "Signup"}</div>
        <div className="authscreen-info">
          <span>to continue to Gmail</span>
        </div>
        <div
          className="authscreen-form"
          style={error ? { marginBottom: 0 } : { marginBottom: 20 }}
        >
          {!islogin && (
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={user ? user.name : ""}
              onChange={(e) => handleChange(e)}
            />
          )}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={user ? user.email : ""}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user ? user.password : ""}
            onChange={(e) => handleChange(e)}
          />
          {!islogin && (
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmpassword"
              value={user ? user.confirmpassword : ""}
              onChange={(e) => handleChange(e)}
            />
          )}
          {!islogin && (
            <input
              type="url"
              placeholder="Profile pic"
              name="profile_pic"
              value={user ? user.profile_pic : ""}
              onChange={(e) => handleChange(e)}
            />
          )}
        </div>
        {error && (
          <p className="error-show">
            <Error style={{ fontSize: 18, marginRight: 2 }} />
            {error}
          </p>
        )}
        <div className="authscreen-footer">
          <div className="aithscreen-options">
            <div className="authscreen-question">
              <span className="question-login">
                {islogin
                  ? "Don't have an account?"
                  : "Already having an account?"}
              </span>
              <span
                className="qurstion-button"
                onClick={() => {
                  setislogin(!islogin);
                  setError(null);
                }}
              >
                {islogin ? "Create account" : "Sign in"}
              </span>
            </div>
          </div>
          <div className="authscreen-submit">
            <div className="submit-container" onClick={handleSubmit}>
              {!isloading ? (
                <div> {islogin ? "Signin" : "Sign up"}</div>
              ) : (
                <div className="loader"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Authscreen;
