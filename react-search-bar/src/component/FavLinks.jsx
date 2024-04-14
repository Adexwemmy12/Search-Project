import React from 'react'
import Facebook from "./../assets/facebook_icon.png"
import Instagram from "./../assets/instagram_icon.png"
import SearchIcon from "./../assets/search_icon.svg"
import Twitter from "./../assets/twitter_icon.png"
import LinkedIn from "./../assets/linkedin_icon.png"
import FavLink from './FavLink'

const FavLinks = (props) => {
    
    const handleSearchClick = () => {
        props.onClick(); // Call the onClick callback function provided by the parent
    };

    const favouriteLinks = [
        {icon: Facebook, link: "https://facebook.com"},
        {icon: Instagram, link: "https://instagram.com"},
        {icon: SearchIcon, link: ""},
        {icon: Twitter, link: "https://twitter.com"},
        {icon: LinkedIn, link: "https://linkedin.com"}
    ]
  return (
    <>
            <div className="fav-links">
            {favouriteLinks.map((link, index) => (
                <FavLink key={index} icon={link.icon} link={link.link} isMiddle={index == 2 ? true : false } onClick={handleSearchClick}/>
            ))}
            </div>
        </>
  )
}

export default FavLinks