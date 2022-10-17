import {
  ArrowBack,
  ArrowDropDown,
  CheckBoxOutlineBlank,
  Forward,
  LabelImportant,
  MoreVert,
  Refresh,
  Star,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setemaildata, setIsselected } from "../Reducers/showEmail";

const Email = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.userreducer.user;
  });
  const data = useSelector((state) => {
    return state.showemail.emailData;
  });
  return (
    <div className="feed-container">
      <div className="feed-header-row">
        <ArrowBack
          onClick={() => {
            dispatch(setemaildata(null));
            dispatch(setIsselected(false));
          }}
          style={{ fontSize: 18, padding: 10 }}
        />
        <CheckBoxOutlineBlank style={{ fontSize: 18, padding: 10 }} />
        <Refresh style={{ fontSize: 18, padding: 10 }} />
        <MoreVert style={{ fontSize: 18, padding: 10 }} />
      </div>
      <div className="email-subject">
        {data.subject}
        <LabelImportant style={{ fontSize: 15, paddingLeft: 7 }} />
      </div>
      <div className="email-header">
        <div className="email-profile-pic-container">
          <img src={user.profile_pic} />
        </div>
        <div className="sender-info">
          <div className="sender-email">
            <span>{data.sender_name}</span>
            {`<${user.email}>`}
          </div>
          <div className="to-me">
            <span>
              to me
              <ArrowDropDown style={{ fontSize: 18 }} />
            </span>
          </div>
        </div>
        <div className="email-time-span">{data.timestamp}</div>
        <div className="email-right-options">
          <Star style={{ fontSize: 18, padding: 10 }} />
          <Forward style={{ fontSize: 18, padding: 10 }} />
          <MoreVert style={{ fontSize: 18, padding: 10 }} />
        </div>
      </div>
      <div className="email-message-container">{data.email_content}</div>
    </div>
  );
};
export default Email;
