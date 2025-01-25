import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SlideBar from "./Components/SlideBar";
import { useState } from "react";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import PostListProvider from "./Context/post-list-store";
import Spinners from "./Components/Spinners";
import { Outlet } from "react-router-dom";

function App() {
  const [isSelected, setIsSelected] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <SlideBar isSelected={isSelected} setIsSelected={setIsSelected} />
        <div className="content">
          <Header />
          <Outlet />
          {/* {isSelected === "Home" ? <PostList /> : <CreatePost />} */}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
