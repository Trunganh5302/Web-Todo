import React from "react";
import Header from "../../Component/header/header";
import Sidebar from "../../Component/sidebar/sidebar";
import Body from "../Body/body";
import '../Home/Homepage.css'

function HomePage() {
  return (
    <>
      <Header />
      <div className="container">   
        <Sidebar />
        <Body />
      </div>
    </>
  );
}

export default HomePage;
