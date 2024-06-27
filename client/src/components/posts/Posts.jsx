import PropTypes from "prop-types";
import Post from "../post/Post";
import "./posts.css";

function Posts({ posts }) {
    console.log("Posts component received posts:", posts); // Log the posts received by the component
    return (
        <div className="posts">
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
}

Posts.propTypes = {
    posts: PropTypes.array.isRequired,
};

export default Posts;
