import {
  Apps,
  HelpOutline,
  Person,
  Search,
  Settings,
  Tune,
} from "@material-ui/icons";

const Header = () => {
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
        <HelpOutline style={{ padding: 20 ,color:"#202124af"}} />
        <Settings style={{ padding: 20,color:"#202124af", }} />
        <Apps style={{ padding: 20,color:"#202124af", }}  />
        <Person style={{ padding: 20 ,color:"#202124af",}} />
      </div>
    </div>
  );
};
export default Header;
