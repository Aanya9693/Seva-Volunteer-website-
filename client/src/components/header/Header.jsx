import "./header.css";
import Img from "../../static/seva2.jpg"
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
                    <i class="fa-solid fa-quote-left"></i>
                    <p className="">
                    It's a portal for volunteers to connect with
                    the nonprofits, and in a way,
                    it's its own search engine specifically for
                    volunteer opportunities.
                    </p>
                    <i class="fa-solid fa-quote-right"></i>
                </div>
                <img
                    className="headerImg"
                    src="https://res.cloudinary.com/dktp1ybbx/image/upload/f_auto,q_auto:low/v1569622508/Homepage/nonprofits-hero-low_2x.jpg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Header;