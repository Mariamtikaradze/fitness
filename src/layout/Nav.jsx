import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import icon from "../assets/button_icon.svg"
export const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} />
      </div>

      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/coaching">Online Coaching</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>

          <li>
            <button className="consult">Book A Consult <img src={icon} /> </button>
          </li>
          
        </ul>
      </div>
    </div>
  );
};
