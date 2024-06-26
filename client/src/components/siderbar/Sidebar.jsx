/* eslint-disable array-callback-return */
import "./sidebar.css";
import photo from "../../static/helping.jpg"
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Sidebar() {
//   const api=axios.create({baseURL:"https://blog-ea1i.onrender.com/api/"})

    const [cats, setCats] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const getCats = async()=>{
            try{
                const res = await axios.get("/categories");
                setCats(res.data);
                setLoading(false);
                // console.log(res.data);
            }catch(err){
                console.error("Error fetching categories:", err);
                setLoading(false);
            }
        };
        getCats();
    },[])
    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">More people.<br/>More impact.</span>
                <img
                    className="sidebarimg"
                    src={photo}
                    alt=""
                />
                <p>
                VolunteerMatch is the most effective way to recruit highly qualified volunteers for your nonprofit. We match you with people who are passionate about and committed to your cause, and who can help when and where you need them.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {Array.isArray(cats) && cats.map((c, i) => (
                        <Link to={`/?cat=${c.name}`} className="link" key={i}>
                            <li className="sidebarListItem">
                                {c.name}
                            </li>
                        </Link>
                    ))}
                </ul>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;