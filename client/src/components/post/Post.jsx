import "./post.css";
import Img from "../../static/seva.png"
import { Link } from "react-router-dom";
function Post({post}) {
    const PF = "https://seva-65j0.onrender.com/images/";
    return (
        <div className='post'>
        {post.photo ? (
            <img
                className="postImg"
                src={PF + post.photo}
                alt=""
            />
        ) : (
            <img
                className="postImg"
                src={Img}
                alt="Default"
            />
        )}

            <div className="postInfo">
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                
                <div className="postCats">
                    {Array.isArray(post.categories) && post.categories.map(c => (
                        <span className="postCat" key={c._id}>
                            {c.name}
                        </span>
                    ))}
                </div>

                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
            </div>
            <p className="postDesc">
               {post.desc}
            </p>
        </div>
    );
}

export default Post;