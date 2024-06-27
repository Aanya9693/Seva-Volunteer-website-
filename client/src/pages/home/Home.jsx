import "./home.css";
import Header from '../../components/header/Header';
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/siderbar/Sidebar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("https://seva-kappa.vercel.app/posts" + search);
                console.log("Fetched posts:", res.data[0]); // Log the response data
                if (Array.isArray(res.data)) {
                    setPosts(res.data);
                } else {
                    console.error("Fetched data is not an array:", res.data);
                    setPosts([]); // Ensure posts is set to an empty array if data is not as expected
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
                setPosts([]); // Set posts to an empty array in case of error
            }
        };
        fetchPosts();
    }, [search]);

    return (
        <>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    );
}

export default Home;
