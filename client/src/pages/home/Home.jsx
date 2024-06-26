import "./home.css";
import Header from '../../components/header/Header';
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/siderbar/Sidebar";
import { useEffect, useState } from "react";
import {useLocation} from "react-router";
import axios from "axios";

function Home() {
    //USE STATE HOOK, intial state will be empty array
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    // console.log(location);
    useEffect(()=>{
        const fetchPosts = async()=>{
            const res = await axios.get("https://seva-kappa.vercel.app/posts" + search)
            setPosts(res.data)
        }
        fetchPosts()
    },[search])
    return (
        <>
            <Header/>
            <div className="home" >
                <Posts posts={posts}/>
                <Sidebar/>
            </div>
        </>
    );
}

export default Home;