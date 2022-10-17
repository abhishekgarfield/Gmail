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

const Sidebar = () => {
  const[cookies,setCookie,removeCookie]=useCookies(`[user]`);
  const user_id=cookies.user_id;
  const dispatch=useDispatch();
  const getformatttedmails=(type)=>{
    if(type=="starred" || type=="important" ||type=="sent" )
    {
      console.log(type);
      fetch(`http://localhost:8000/getemails/?type=${type}&user_id=${user_id}`)
      .then((res)=>{return res.json()}).then((data)=>{
        dispatch(setemailsdata(data));
      })
    }
    else{
      getEmails();
    }

  }
  const getEmails = () => {
    console.log("refresh")
    fetch(`http://localhost:8000/getinbox/?user_id=${user_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setemailsdata(data));
      });
  };
  const [isSelected, setisselected] = useState(true);
  const chkActive = (e) => {
    console.log("helllo");
    var el = document.querySelectorAll(".sidebar-options");
    for (var i = 0; i < el.length; i++) {
      el[i].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-Compose-button" onClick={()=>{
        dispatch(setIsHiddden(true));
        console.log("here");
      }}>
        <Create style={{ marginRight: 8, fontSize: 22 }} />
        <span>Compose</span>
      </div>
      <div className="sidebar-options active" onClick={(e) => {chkActive(e); getformatttedmails("inbox")}}>
        <Inbox style={{ marginRight: 8, fontSize: 18 }} />
        <span>Inbox</span>
      </div>
      <div className="sidebar-options" onClick={(e) => {chkActive(e); getformatttedmails("starred")}}>
        <Star style={{ marginRight: 8, fontSize: 18 }} />
        <span>Starred</span>
      </div>
      <div className="sidebar-options" >
        <AccessTime style={{ marginRight: 8, fontSize: 18 }} />
        <span>Snoozed</span>
      </div>
      <div className="sidebar-options" onClick={(e) => {chkActive(e); getformatttedmails("important")}}>
        <LabelImportant style={{ marginRight: 8, fontSize: 18 }} />
        <span>Important</span>
      </div>
      <div className="sidebar-options"  onClick={(e) => {chkActive(e); getformatttedmails("sent")}}>
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
