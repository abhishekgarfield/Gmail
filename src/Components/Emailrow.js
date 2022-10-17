import {
  CheckBoxOutlineBlank,
  LabelImportant,
  Star,
  StarBorder,
} from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setemaildata, setIsselected } from "../Reducers/showEmail";
import { addUser } from "../Reducers/userSlice";
const Emailrow = ({ email }) => {
  const user = useSelector((state) => {
    return state.userreducer.user;
  });
  const user_id = user?.user_id;
  const dispatch = useDispatch();
  const addtype = (type) => {
    fetch(
      `http://localhost:8000/addtype/?type=${type}&user_id=${user_id}&message_id=${email.id}`
    )
      .then((res) => {
        {
          return res.json();
        }
      })
      .then((data) => {
        getUser();
      });
  };
  const getUser = () => {
    fetch(`http://localhost:8000/getuser/?user_id=${user_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(addUser(data));
      });
  };
  return (
    <div
      className="email-card"
      onClick={(e) => {
        if (
          e.target.classList.contains("sender-name") ||
          e.target.classList.contains("email-content") ||
          e.target.classList.contains("time-stamp") ||
          e.target.classList.contains("content")
        ) {
          dispatch(setemaildata(email));
          dispatch(setIsselected(true));
        }
      }}
    >
      <div className="starters">
        <CheckBoxOutlineBlank style={{ marginRight: 5, fontSize: 18 }} />
        <Star
          style={
            user?.starred.length > 0 &&
            user.starred.some(({ message_id }) => {
              return message_id == email.id;
            })
              ? { marginRight: 5, fontSize: 18, color: "#e5c06a" }
              : { marginRight: 5, fontSize: 18 }
          }
          onClick={(e) => {
            e.target.style.color = "#e5c06a";
            addtype("star");
          }}
        />
        <LabelImportant
          style={
            user?.important?.length > 0 &&
            user.important.some(({ message_id }) => {
              return message_id == email.id;
            })
              ? { marginRight: 5, fontSize: 18, color: "#e5c06a" }
              : { marginRight: 5, fontSize: 18 }
          }
          onClick={(e) => {
            e.target.style.color = "#e5c06a";
            addtype("important");
          }}
        />
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
