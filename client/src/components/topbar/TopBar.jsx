import "./topbar.css";
import Img from "../../static/profile.jpg"
import { Link } from "react-router-dom";
function TopBar() {
    const user=false;
    return (
        <div className='top' >
           <div className="topLeft">
           <i className="topIcon fa-brands fa-square-facebook"></i>
           <i className="topIcon fa-brands fa-square-twitter"></i>
           <i className="topIcon fa-brands fa-square-pinterest"></i>
           <i className="topIcon fa-brands fa-square-instagram"></i>
           </div>
           <div className="topCenter">
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/">
                  HOME
                </Link>
              </li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">
                <Link className="link" to="/write">
                  WRITE
                </Link>
              </li>
              {user && <li className="topListItem">LOGOUT</li>}
            </ul>
           </div>
            <div className="topRight">
              {user ? (
                <img className="topImg" src={Img} alt="" />
                
              ):(
                <ul className="topList">
                <li className="topListItem">
                  <Link className="link" to="/login">
                    LOGIN
                  </Link>
                </li>
                <li className="topListItem">
                  <Link className="link" to="/register">
                    REGISTER
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