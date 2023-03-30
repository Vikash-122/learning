import React from "react";
import Info from "./Info";

export default function Main(){
  return(
    <div id="main">
      <img src={require("../assets/rectangle 90.png")} alt="img" />
      <Info/>
    </div>
  )
}