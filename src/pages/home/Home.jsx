import "./home.css";
import Header from '../../header/Header';
import Posts from "../../posts/Posts";
import Sidebar from "../../siderbar/Sidebar";

function Home() {
    return (
        <>
            <Header/>
            <div className="home" >
                <Posts/>
                <Sidebar/>
            </div>
        </>
    );
}

export default Home;