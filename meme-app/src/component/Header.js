import React from "react";
import  Troll from "../images/Trollface_non-free.png"
import "../style.css"
function Header(){
    return ( 
       <header className="header">
         <img src={Troll} alt="fas" className="header--image"  />
        <h1 className="header--title">Meme Generator</h1>
        <h4  className="header-project">React Project - 3</h4>
    </header>
    )
}
export default Header