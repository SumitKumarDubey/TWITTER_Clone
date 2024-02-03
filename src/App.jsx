import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/postList-store";
import { Outlet } from "react-router-dom";

const App = ()=>{  

  const [tab, setTab] = useState("home");
  
  return (
    <PostListProvider>
    <div className="main_container">
     <SideBar tab={tab} setTab={setTab}/>
     <div className="content">
     <Header/>
     <Outlet/>
     <Footer/>
     </div>
    </div>
    </PostListProvider>
  )
}

export default App
