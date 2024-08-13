import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnname] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store  using a selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 lg:bg-green-300">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <Link className="px-4" to={"/"}>
            Home
          </Link>
          <Link className="px-4" to={"/about"}>
            About Us
          </Link>
          <Link className="px-4" to={"/contact"}>
            Contuct Us
          </Link>
          <li className="px-4">
            <Link to={"groccery"}>Groccery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to={'/cart'}>Cart- ({cartItems.length}) items</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "login" ? setBtnname("logout") : setBtnname("login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
