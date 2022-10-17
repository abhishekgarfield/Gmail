import { Apps, HelpOutline, Search, Settings, Tune } from "@material-ui/icons";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  const [isSelected, setisselected] = useState(false);
  const user = useSelector((state) => {
    return state.userreducer.user;
  });
  return (
    <div className="header">
      <div className="header-logo-container">
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
          alt="gmail logo"
        />
      </div>
      <div className="search-container">
        <Search />
        <form>
          <input type="text" placeholder="Search in mail" />
        </form>
        <Tune />
      </div>
      <div className="extra-options">
        <HelpOutline style={{ padding: 20, color: "#202124af" }} />
        <Settings style={{ padding: 20, color: "#202124af" }} />
        <Apps style={{ padding: 20, color: "#202124af" }} />
        <img
          src={user?.profile_pic}
          style={{ height: 35, width: 35, borderRadius: 50, padding: 20 }}
          onClick={() => {
            setisselected(!isSelected);
          }}
        />
        {isSelected && (
          <div className="logout-container">
            <div
              className="logout"
              onClick={() => {
                removeCookie("authToken", cookies.authToken);
                removeCookie("user_id", cookies.user_id);
                navigate("/");
                window.location.reload();
              }}
            >
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
