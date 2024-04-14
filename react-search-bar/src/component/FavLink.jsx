import React from 'react'
import "./FavLink.css"

function FavLink(props) {

    const handleClick = () => {
        props.onClick(); // Call the onClick callback function provided by the parent
    };

  return (
    <>
    {
    props.isMiddle ? 
        <img src={props.icon} alt='Icon' className='middleStyles' onClick={handleClick}/>
    :
    <a href={props.link} className='commonStyles'>
        <img src={props.icon} alt='Icon'/>
    </a>
}
    </>
  )
}

export default FavLink