import { CheckBoxOutlineBlank, LabelImportant, Star } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { setemaildata, setIsselected } from "../Reducers/showEmail";
const Emailrow = ({ email }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="email-card"
      onClick={() => {
        dispatch(setemaildata(email));
        dispatch(setIsselected(true));
      }}
    >
      <div className="starters">
        <CheckBoxOutlineBlank style={{ marginRight: 15, fontSize: 18 }} />
        <Star style={{ marginRight: 15, fontSize: 18 }} />
        <LabelImportant style={{ marginRight: 15, fontSize: 18 }} />
      </div>
      <div className="sender-name">{email.sender_name}</div>
      <div className="email-content">
        <span>{`${email.subject}`}</span>
        <span
          className="content"
          style={{ fontWeight: 400 }}
        >{`-${email.email_content}`}</span>
      </div>
      <div className="time-stamp">{email.timestamp}</div>
    </div>
  );
};
export default Emailrow;
