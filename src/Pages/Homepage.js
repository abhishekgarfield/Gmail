import { useSelector } from "react-redux";
import Email from "../Components/Email";
import Extremeside from "../Components/Extremeside";
import Feed from "../Components/Feed";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Composemessage from "../Components/Composemessage";

const Homescreen = () => {
  const currentstate = useSelector((state) => {
    return state.hidoptions.hidden;
  });
  const showEmail = useSelector((state) => {
    return state.showemail.isSelected;
  });
  const showCompose = useSelector((state) => {
    return state.composemessage.hidden;
  });
  console.log(showEmail);
  return (
    <div className="homepage-container">
      <Extremeside />
      <div className="body-section">
        <Header />
        <div className="feed-section">
          {!currentstate && <Sidebar />}
          {!showEmail && <Feed />}
          {showEmail && <Email />}
        </div>
      </div>
      {showCompose && <Composemessage />}
    </div>
  );
};
export default Homescreen;
