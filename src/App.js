import { useCookies } from "react-cookie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authscreen from "./Pages/Authscreen";
import Homescreen from "./Pages/Homepage";
import { Provider } from "react-redux";
import Store from "./store";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(`[user]`);
  const authToken = false; //cookies.authToken;
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authscreen />} />
          {authToken && <Route path="/home" element={<Homescreen />} />}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
