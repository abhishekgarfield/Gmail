import { useSelector } from "react-redux";
import Extremeside from "../Components/Extremeside";
import Feed from "../Components/Feed";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Homescreen = () => {
  const currentstate = useSelector((state) => {
    return state.hidoptions.hidden;
  });
  return (
    <div className="homepage-container">
      <Extremeside />
      <div className="body-section">
        <Header />
        <div className="feed-section">
          {!currentstate && <Sidebar />}
          <Feed />
        </div>
      </div>
    </div>
  );
};
export default Homescreen;
