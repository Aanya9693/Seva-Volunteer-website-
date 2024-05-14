import Post from "../post/Post";
import "./posts.css";

function Posts({posts}) {
    // Check if posts is an array before mapping over it
    if (!Array.isArray(posts)) {
        console.error("Posts is not an array:", posts);
        return null; // or handle the error in another way
    }

    return (
        <div className="posts">
            {posts.map((p, i) => (
                <Post post={p} key={i}/>
            ))}
        </div>
    );
}


export default Posts;