import { Link } from "@material-ui/core";
import {
  AttachFile,
  Close,
  Edit,
  EmojiEmotions,
  EmojiEmotionsRounded,
  ExpandMore,
  ExposurePlus1,
  Image,
  LinkOffOutlined,
  Lock,
  Maximize,
  Minimize,
  MoreVert,
  OpenInNewSharp,
  TextFormat,
} from "@material-ui/icons";

import { useDispatch } from "react-redux";
import { setIsHiddden } from "../Reducers/Compose";

const Composemessage = () => {
  const minimizer = document.getElementsByClassName("maximize");
  console.log(minimizer);
  /* minimizer?.addEventListener(onclick,*/
  const dispatch = useDispatch();
  return (
    <div className="composemessage-container">
      <div className="composemessage-header">
        <span>New message</span>
        <div className="composemessage-header-right-option">
          <Minimize style={{ fontSize: 18, padding: 3 }} onClick={()=>{
            console.log("dsdaHJDVgadsva")
              
              const messagebox = document.getElementsByClassName(
                "composemessage-container"
              );
              messagebox[0].classList.toggle("minimize");
              messagebox[0].classList.remove("maximize")
          }}/>
          <OpenInNewSharp
            style={{ fontSize: 18, padding: 3 }}
            onClick={() => {
              const messagebox = document.getElementsByClassName(
                "composemessage-container"
              );
              messagebox[0].classList.toggle("maximize");
              messagebox[0].classList.remove("minimize")
              console.log("in emisma");
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
        <input type="text" placeholder="Email to" name="sender-email" />
        <input type="text" placeholder="Subject" name="subject" />
        <textarea name="email" />
      </div>
      <div className="composemessage-footer">
        <div className="sendemail">Send</div>
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
