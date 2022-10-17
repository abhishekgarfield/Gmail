import {
  CheckBoxOutlineBlank,
  Inbox,
  LocalOffer,
  More,
  MoreVert,
  People,
  Refresh,
} from "@material-ui/icons";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setemailsdata } from "../Reducers/emaildata";
import Emailrow from "./Emailrow";


const Feed = () => {
  const[cookies,setCookie,removeCookie]=useCookies(`[user]`);

  const user_id =cookies.user_id;
  const emails =useSelector((state)=>{
    return state.emails.emails
  })
  const dispatch=useDispatch();
  const getEmails = () => {
    fetch(`http://localhost:8000/getinbox/?user_id=${user_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setemailsdata(data));
      });
  };
   
  const chkActive = (e) => {
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
        <Refresh style={{ fontSize: 18, padding: 10 }} onClick={()=>{
          getEmails();
        }}/>
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
