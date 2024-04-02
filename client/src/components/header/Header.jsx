import "./header.css";
import Img from "../../static/seva2.webp"
function Header() {
    return (
        <div className="header" >
           <div className="headerTitles">
                <span className="headerTitleSm" style={{color:"#444"}}>Helping Hands</span>
                <span className="headerTitleLg">Seva</span>
            </div>

            <div className="headerDetail">
                <div className="headerDesc">
                    <p className="">Volunteer With <span  style={{color:"#ff5533"}}>Seva</span></p>
                </div>
                <div className="headerDesc2">
                    <i className="fa-solid fa-quote-left"></i>
                    <p className="">
                    It's a portal for volunteers to connect with
                    the nonprofits, and in a way,
                    it's its own search engine specifically for
                    volunteer opportunities.
                    </p>
                    <i className="fa-solid fa-quote-right"></i>
                </div>
                <img
                    className="headerImg"
                    src={Img}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Header;