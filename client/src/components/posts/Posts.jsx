import Post from "../post/Post";
import "./posts.css";
// console.log("posts: ", Post);

function Posts({ posts = [] }) {
    return (
        <div className="posts">
            {Array.isArray(posts) && posts.map((p, i) => (
                <Post post={p} key={i} />
            ))}
        </div>
    );
}

export default Posts;