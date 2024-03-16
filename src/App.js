import Home from "./pages/home/Home";
import TopBar from "./topbar/TopBar";

function App() {
  return (
    //we can not use multiple element inside a componet so use <>
    <>
    <TopBar/>
    <Home/>
    </>
  )
}

export default App;
