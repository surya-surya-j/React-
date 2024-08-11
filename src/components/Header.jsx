import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnname] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="ul">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Contuct Us</li>
          <li>
            <Link to={"groccery"}>Groccery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "login" ? setBtnname("logout") : setBtnname("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
