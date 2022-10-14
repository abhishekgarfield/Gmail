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

const Sidebar = () => {
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
      <div className="sidebar-Compose-button">
        <Create style={{ marginRight: 8, fontSize: 22 }} />
        <span>Compose</span>
      </div>
      <div className="sidebar-options active" onClick={(e) => chkActive(e)}>
        <Inbox style={{ marginRight: 8, fontSize: 18 }} />
        <span>Inbox</span>
      </div>
      <div className="sidebar-options" onClick={(e) => chkActive(e)}>
        <Star style={{ marginRight: 8, fontSize: 18 }} />
        <span>Starred</span>
      </div>
      <div className="sidebar-options" onClick={(e) => chkActive(e)}>
        <AccessTime style={{ marginRight: 8, fontSize: 18 }} />
        <span>Snoozed</span>
      </div>
      <div className="sidebar-options">
        <LabelImportant style={{ marginRight: 8, fontSize: 18 }} />
        <span>Important</span>
      </div>
      <div className="sidebar-options">
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
