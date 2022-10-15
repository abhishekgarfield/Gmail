import { ArrowDropDown, ArrowLeft, ArrowLeftOutlined, CheckBoxOutlineBlank, Forward, MoreVert, Refresh, Star, TuneRounded, TurnedInNot } from "@material-ui/icons";
import { useSelector } from "react-redux";

const Email = () => {
   const user= {"user_id":"8a2fb039-dc1e-49b1-824f-50ccda763f0a","name":"abhishek","email":"abhishek23@gmail.com","password":"$2b$10$SyE3e25i0g0s6Qq3Mf9kTOPZCNox.XtWBf.urN5x35ybOi4xq/XD6","profile_pic":"https://upload.wikimedia.org/wikipedia/commons/a/a3/Vidhyut_%26_Arhaan_at_the_launch_of_%27Big_RTL_Thrill%27_channel.jpg"}
  const data = useSelector((state) => {
    return state.showemail.emailData;
  });
  return (
    <div className="feed-container">
      <div className="feed-header-row">
        <ArrowLeft style={{ fontSize: 18, padding: 10 }} />
        <CheckBoxOutlineBlank style={{ fontSize: 18, padding: 10 }} />
        <Refresh style={{ fontSize: 18, padding: 10 }} />
        <MoreVert style={{ fontSize: 18, padding: 10 }} />
      </div>
      <div className="email-header">
        <div className="email-profile-pic-container">
        <img src={user.profile_pic}/>
        </div>
        <div className="sender-info">
            <div className="sender-email">
                <span>{user.name}</span>
                {`<${user.email}>`}
            </div>
            <div className="to-me">
                <span>to me<ArrowDropDown/></span>
            </div>
        </div>
        <div className="email-time-span">
            {data.timespan}
        </div>
        <div className="email-right-options">
            <Star/>
            <Forward/>
            <MoreVert/>
        </div>
      </div>
    </div>
  );
};
export default Email;
