import React from "react";

export default function Navbar(){
  return(
    <nav>
      <div className="left">
        <img src={require("../assets/reactjs-icon.png")} alt="icon" />
        <h4>React Facts</h4>
      </div>
      <div className="right">
        <h5>React Course - Project 1</h5>
      </div>
    </nav>
  )
}