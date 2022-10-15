import { useSelector } from "react-redux";
import Email from "../Components/Email";
import Extremeside from "../Components/Extremeside";
import Feed from "../Components/Feed";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Homescreen = () => {
  const currentstate = useSelector((state) => {
    return state.hidoptions.hidden;
  });
  const showEmail = useSelector((state) => {
    return state.showemail.isSelected;
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
    </div>
  );
};
export default Homescreen;
