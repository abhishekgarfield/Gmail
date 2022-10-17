import {
  AccessTime,
  Category,
  Create,
  FileCopy,
  Inbox,
  KeyboardArrowDown,
  LabelImportant,
  Send,
  Star,
} from "@material-ui/icons";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setIsHiddden } from "../Reducers/Compose";
import { setemailsdata } from "../Reducers/emaildata";
import { setemaildata, setIsselected } from "../Reducers/showEmail";

const Sidebar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  const user_id = cookies.user_id;
  const dispatch = useDispatch();
  const getformatttedmails = (type) => {
    if (type == "starred" || type == "important" || type == "sent") {
      fetch(`https://gmailgarfield.herokuapp.com/getemails/?type=${type}&user_id=${user_id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch(setemailsdata(data));
        });
    } else {
      getEmails();
    }
  };
  const getEmails = () => {
    fetch(`https://gmailgarfield.herokuapp.com/getinbox/?user_id=${user_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setemailsdata(data));
      });
  };
  const [isSelected, setisselected] = useState(true);
  const chkActive = (e) => {
    var el = document.querySelectorAll(".sidebar-options");
    for (var i = 0; i < el.length; i++) {
      el[i].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="sidebar-container">
      <div
        className="sidebar-Compose-button"
        onClick={() => {
          dispatch(setIsHiddden(true));
        }}
      >
        <Create style={{ marginRight: 8, fontSize: 22 }} />
        <span>Compose</span>
      </div>
      <div
        className="sidebar-options active"
        onClick={(e) => {
          chkActive(e);
          getformatttedmails("inbox");
          dispatch(setemaildata(null));
          dispatch(setIsselected(false));
        }}
      >
        <Inbox style={{ marginRight: 8, fontSize: 18 }} />
        <span>Inbox</span>
      </div>
      <div
        className="sidebar-options"
        onClick={(e) => {
          chkActive(e);
          getformatttedmails("starred");
          dispatch(setemaildata(null));
          dispatch(setIsselected(false));
        }}
      >
        <Star style={{ marginRight: 8, fontSize: 18 }} />
        <span>Starred</span>
      </div>
      <div className="sidebar-options">
        <AccessTime style={{ marginRight: 8, fontSize: 18 }} />
        <span>Snoozed</span>
      </div>
      <div
        className="sidebar-options"
        onClick={(e) => {
          chkActive(e);
          getformatttedmails("important");
          dispatch(setemaildata(null));
          dispatch(setIsselected(false));
        }}
      >
        <LabelImportant style={{ marginRight: 8, fontSize: 18 }} />
        <span>Important</span>
      </div>
      <div
        className="sidebar-options"
        onClick={(e) => {
          chkActive(e);
          getformatttedmails("sent");
          dispatch(setemaildata(null));
          dispatch(setIsselected(false));
        }}
      >
        <Send style={{ marginRight: 8, fontSize: 18 }} />
        <span>Sent</span>
      </div>
      <div className="sidebar-options">
        <FileCopy style={{ marginRight: 8, fontSize: 18 }} />
        <span>Drafts</span>
      </div>
      <div className="sidebar-options">
        <Category style={{ marginRight: 8, fontSize: 18 }} />
        <span>Categories</span>
      </div>
      <div className="sidebar-options">
        <KeyboardArrowDown style={{ marginRight: 8, fontSize: 18 }} />
        <span>More</span>
      </div>
    </div>
  );
};
export default Sidebar;
