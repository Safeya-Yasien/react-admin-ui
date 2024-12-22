import { Link } from "react-router";
import "./navbar.scss";
import { FaBell, FaMagnifyingGlass } from "react-icons/fa6";
import { IoGridOutline, IoScan, IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src="logo.svg" alt="" />
        <span>lamadmin</span>
      </Link>
      <ul className="icons">
        <li>
          <button className="icon">
            <FaMagnifyingGlass />
          </button>
        </li>
        <li>
          <button className="icon">
            <IoGridOutline />
          </button>
        </li>
        <li>
          <button className="icon">
            <IoScan />
          </button>
        </li>
        <li>
          <button className="icon notification">
            <FaBell />
            <span>1</span>
          </button>
        </li>
        <li className="">
          <Link to="/" className="user">
            <img
              src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
            />
            <span>Jane</span>{" "}
          </Link>
        </li>
        <li>
          <button className="icon notification">
            <IoSettingsOutline />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
