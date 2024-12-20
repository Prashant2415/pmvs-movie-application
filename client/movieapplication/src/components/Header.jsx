import React from 'react';
import logo from "../images/logo.png"
import "../index.css"
const Header = () => {
    const headerData = [
        {
            id:1,
            headerTitle: "Home",
            headerLink: "/",
        },
        {
            id:2,
            headerTitle: "Movies",
            headerLink: "/movies",
        },
        {
            id:3,
            headerTitle: "Favorite",
            headerLink: "/favorite",
        },
    ]
  return (
    <div className='header-container'>
        <div className="logo">
            <img className='logo-image' src={logo} alt="logo" />
        </div>
        <div className="header-link-container">
        {
            headerData.map((hd,index)=>{
                return(
                    <a className='header-links' target='_self' href={hd.headerLink} key={hd.id} aria-label={`Header menu ${hd.headerTitle}`}>{hd.headerTitle}</a>
                )
            })
        }
        </div>
        <div className="search-container">
            <input className='search-bar' type="text" placeholder='Search'/>
        </div>
    </div>
  )
}

export default Header
