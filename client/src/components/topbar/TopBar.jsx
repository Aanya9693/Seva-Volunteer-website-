import "./topbar.css";
import Img from "../../static/profile.jpg"
import logo from "../../static/logo.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
function TopBar() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () =>{
      dispatch({type: "LOGOUT"})
    }
    const PF = "http://localhost:5000/images/"

    return (
        <div className='top' >
           <div className="topLeft">
              <img className="logo" src={logo} alt=""></img>
           </div>
           <div className="topCenter">
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/contact">
                Contact
              </Link>
            </li>
              <li className="topListItem">
                <Link className="link" to="/write">
                  Volunteer Opportunities?
                </Link>
              </li>
              {user && <li className="topListItem" onClick={handleLogout}>Logout</li>}
            </ul>
           </div>
            <div className="topRight">
              {user ? (
                <Link to="/settings">
                  <img className="topImg" src={PF+user.profilePic} alt="" />
                </Link>
                
              ):(
                <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
              )
            }
              <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    );
}

export default TopBar;