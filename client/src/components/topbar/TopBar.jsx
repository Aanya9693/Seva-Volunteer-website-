import "./topbar.css";
import Img from "../../static/profile.jpg"
import logo from "../../static/logo.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { useState } from 'react';

function TopBar() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () =>{
      dispatch({type: "LOGOUT"})
    }
    // const PF = "http://localhost:5000/images/"
    const PF = `https://blog-ea1i.onrender.com/images/`;


    // Assuming you have a state variable to track the menu visibility
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Function to toggle the menu visibility
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
        <div className="topbar">
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
          <i className="sandwich fa-solid fa-bars" onClick={toggleMenu}></i> 
          <div className={`top2 ${menuOpen ? 'showMenu' : ''}`}>
            <div className="topLeft2">
              <img className="logo2" src={logo} alt=""></img>
            </div>
            <div className="topCenter2">
              <ul className="topList2">
                <li className="topListItem2">
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>
                <li className="topListItem2">
                  <Link className="link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="topListItem2">
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
                <li className="topListItem2">
                  <Link className="link" to="/write">
                    Volunteer Opportunities?
                  </Link>
                </li>
                {user && <li className="topListItem" onClick={handleLogout}>Logout</li>}
              </ul>
            </div>
            <div className="topRight2">
              {user ? (
                <Link to="/settings">
                  <img className="topImg" src={PF+user.profilePic} alt="" />
                </Link>
                
              ):(
                <ul className="topList2">
                <li className="topListItem2">
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="topListItem2">
                  <Link className="link" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
              )
            }
            </div>
          </div>
         
        </div>
    );
}

export default TopBar;