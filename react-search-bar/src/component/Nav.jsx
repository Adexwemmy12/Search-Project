import React from 'react'
import Flag from "./../assets/flag.svg"
import Smail from "./../assets/Smail.svg"
import ImagesIcon from "./../assets/Images.svg"
import MainMenuIcon from "./../assets/multiple_squares.svg"
import PersonIcon from "./../assets/profile.svg"
import "./Nav.css"

const Nav = () => {
    const handleClick = (index) => {
        console.log(index + " was clicked.")
    }
  return (
   <>
   <div className="maincontainer">
    <div id="flag">
        <img src={Flag} alt="FlagIcon" />
    </div>
    <div className="nav-items-container">
        <img src={Smail} alt="FlagIcon" className="nav-item" onClick={() => handleClick(1)}/>
        <img src={ImagesIcon} alt="FlagIcon" className="nav-item"  onClick={() => handleClick(2)}/>
        <img src={MainMenuIcon} alt="FlagIcon" className="nav-item"  onClick={() => handleClick(3)}/>
        <img src={PersonIcon} alt="FlagIcon" className="nav-item"  onClick={() => handleClick(4)}/>
    </div>
   </div>
   </>
  )
}

export default Nav