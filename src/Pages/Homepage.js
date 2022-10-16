import { useDispatch, useSelector } from "react-redux";
import Email from "../Components/Email";
import Extremeside from "../Components/Extremeside";
import Feed from "../Components/Feed";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Composemessage from "../Components/Composemessage";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { addUser } from "../Reducers/userSlice";
import { setIssent } from "../Reducers/sentconfirmation";
import { Close } from "@material-ui/icons";

const Homescreen = () => {
  const dispatch = useDispatch();
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  const user_id = cookies.user_id;
  const getUser = () => {
    fetch(`http://localhost:8000/getuser/?user_id=${user_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(addUser(data));
      });
  };
  const currentstate = useSelector((state) => {
    return state.hidoptions.hidden;
  });
  const showEmail = useSelector((state) => {
    return state.showemail.isSelected;
  });
  const showCompose = useSelector((state) => {
    return state.composemessage.hidden;
  });
  const sentconfirmation = useSelector((state) => {
    return state.sent.sent;
  });
  setTimeout(() => {
    console.log("in timer");
    dispatch(setIssent(false));
  }, 2000);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="homepage-container">
      <Extremeside />
      <div className="body-section">
        <Header />
        <div className="feed-section">
          {!currentstate && <Sidebar />}
          {!showEmail && <Feed />}
          {showEmail && <Email />}
        </div>
      </div>
      {showCompose && <Composemessage />}
      {sentconfirmation && (
        <div className="messaege-concet">
          Message sent
          <Close
            style={{ padding: 5, fontSize: 16 }}
            onClick={() => {
              dispatch(setIssent(false));
            }}
          />
        </div>
      )}
    </div>
  );
};
export default Homescreen;
