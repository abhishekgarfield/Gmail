import {
  AttachFile,
  Close,
  Edit,
  EmojiEmotions,
  Error,
  HelpOutline,
  Image,
  LinkOffOutlined,
  Lock,
  Minimize,
  MoreVert,
  OpenInNewSharp,
  TextFormat,
} from "@material-ui/icons";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setIsHiddden } from "../Reducers/Compose";
import { setIssent } from "../Reducers/sentconfirmation";

const Composemessage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const user = useSelector((state) => {
    return state.userreducer.user;
  });
  const [email, setEmail] = useState({
    sender_user_id: user.user_id,
    recievers_user_id: "",
    recievers_email: "",
    sender_name: user.name,
    email_content: "",
    subject: "",
    timestamp: new Date().toDateString(),
  });
  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    if (
      email?.subject?.length < 1 ||
      email?.recievers_email?.length < 1 ||
      email?.email_content?.length < 1 ||
      !email
    ) {
      return setError(`Fields should not be empty`);
    } else {
      setError(null);
      const url = `https://gmailgarfield.herokuapp.com/sendemail`;
      fetch(url, {
        method: "Post",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(email),
      }).then((res) => {
        if (res.status == 403) {
          res.json().then((data) => {
            setError(data);
          });
        }
        if (res.status == 200) {
          res.json().then((data) => {
            setError("");
            dispatch(setIssent(true));
            dispatch(setIsHiddden(false));
          });
        }
      });
    }
  };

  return (
    <div className="composemessage-container">
      <div className="composemessage-header">
        <span>New message</span>
        <div className="composemessage-header-right-option">
          <Minimize
            style={{ fontSize: 18, padding: 3 }}
            onClick={() => {
              const messagebox = document.getElementsByClassName(
                "composemessage-container"
              );
              messagebox[0].classList.toggle("minimize");
              messagebox[0].classList.remove("maximize");
            }}
          />
          <OpenInNewSharp
            style={{ fontSize: 18, padding: 3 }}
            onClick={() => {
              const messagebox = document.getElementsByClassName(
                "composemessage-container"
              );
              messagebox[0].classList.toggle("maximize");
              messagebox[0].classList.remove("minimize");
            }}
          />
          <Close
            style={{ fontSize: 18, padding: 3 }}
            onClick={() => {
              dispatch(setIsHiddden(false));
            }}
          />
        </div>
      </div>
      <div className="composemessage-form">
        <input
          type="text"
          placeholder="Email to"
          name="recievers_email"
          value={email.recievers_email}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          type="text"
          placeholder="Subject"
          name="subject"
          value={email.subject}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <textarea
          name="email_content"
          value={email.email_content}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      {error && (
        <p className="error-show">
          <Error style={{ fontSize: 18, marginRight: 2, marginLeft: 17 }} />
          {error}
        </p>
      )}
      <div className="composemessage-footer">
        <div
          className="sendemail"
          onClick={() => {
            handleSubmit();
          }}
        >
          Send
        </div>
        <TextFormat
          style={{
            fontSize: 18,
            padding: 5,
            backgroundColor: "lightgray",
            marginLeft: 5,
            borderRadius: 5,
          }}
        />
        <AttachFile style={{ fontSize: 18, padding: 5 }} />
        <LinkOffOutlined style={{ fontSize: 18, padding: 5 }} />
        <EmojiEmotions style={{ fontSize: 18, padding: 5 }} />
        <Image style={{ fontSize: 18, padding: 5 }} />
        <Lock style={{ fontSize: 18, padding: 5 }} />
        <Edit style={{ fontSize: 18, padding: 5 }} />
        <MoreVert style={{ fontSize: 18, padding: 5 }} />
      </div>
    </div>
  );
};
export default Composemessage;
