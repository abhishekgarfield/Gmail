import {
  CheckBoxOutlineBlank,
  Inbox,
  LocalOffer,
  More,
  MoreVert,
  People,
  Refresh,
} from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setemaildata, setIsselected } from "../Reducers/showEmail";
import Emailrow from "./Emailrow";
const getEmails =()=>{
  
}
const emails = [
  {
    sender_user_id: 1,
    recievers_user_id: 2,
    sender_name: "Abhishek",
    email_content: "hi abhishek how r uh ? hi abhishek how r uh  hi abhishek how r uh  hi abhishek how r uh hi abhishek how r uh  r uh ? hi abhishek how r uh  hi abhishek how r uh  hi abhishek how r uh hi abhishek how r uh",
    subject: "hi buddy  ",
    timestamp: new Date().toDateString(),
  },
  {
    sender_user_id: 1,
    recievers_user_id: 2,
    sender_name: "abhishek",
    email_content: "hi abhishek how r uh ?",
    subject: "hi buddy",
    timestamp: new Date().toDateString(),
  },
  {
    sender_user_id: 1,
    recievers_user_id: 2,
    sender_name: "abhishek",
    email_content: "hi abhishek how r uh ?",
    subject: "hi buddy",
    timestamp: new Date().toDateString(),
  },
  {
    sender_user_id: 1,
    recievers_user_id: 2,
    sender_name: "abhishek",
    email_content: "hi abhishek how r uh ?",
    subject: "hi buddy",
    timestamp: new Date().toDateString(),
  },
];
const Feed = () => {
    const dispatch=useDispatch();
  const chkActive = (e) => {
    console.log("helllo");
    var el = document.querySelectorAll(".feed-email-headers-options");
    for (var i = 0; i < el.length; i++) {
      el[i].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="feed-container">
        
      <div className="feed-header-row">
        <CheckBoxOutlineBlank style={{ fontSize: 18, padding: 10 }} />
        <Refresh style={{ fontSize: 18, padding: 10 }} />
        <MoreVert style={{ fontSize: 18, padding: 10 }} />
      </div>
      <div className="email-container">
        <div className="feed-email-headers">
          <div
            className="feed-email-headers-options active"
            onClick={(e) => chkActive(e)}
          >
            <Inbox style={{ marginRight: 15, fontSize: 18 }} />
            <span>Primary</span>
          </div>
          <div
            className="feed-email-headers-options"
            onClick={(e) => chkActive(e)}
          >
            <LocalOffer style={{ marginRight: 15, fontSize: 18 }} />
            <span>Promotions</span>
          </div>
          <div
            className="feed-email-headers-options"
            onClick={(e) => chkActive(e)}
          >
            <People style={{ marginRight: 15, fontSize: 18 }} />
            <span>Social</span>
          </div>
        </div>
        {emails?.map((data, index) => {
         return <Emailrow key={index} email={data} />;
        })}
      </div>
    </div>
  );
};
export default Feed;
