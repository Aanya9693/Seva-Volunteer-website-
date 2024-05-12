import "./home.css";
import Header from '../../components/header/Header';
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/siderbar/Sidebar";
import { useEffect, useState } from "react";
import {useLocation} from "react-router";
import axios from "axios";
const express = require("express");

const app=express();
const dotenv=require("dotenv");
dotenv.config();

function Home() {
//   const api=axios.create({baseURL:"https://blog-ea1i.onrender.com/api/"})

    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    // console.log(location);

    useEffect(()=>{
        const fetchPosts = async()=>{
            const apiUrl = process.env.process.env.REMOTE || 'http://localhost:3000';
                const res = await axios.get(`${apiUrl}/posts${search}`);
            // const res = await axios.get("http://localhost:3000/posts" + search)
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