import React from 'react';
import logo from "../images/logo.png"
import "../index.css"
import { Link } from 'react-router-dom';
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
                    <Link className='header-links' to={hd.headerLink} aria-label={`Header menu ${hd.headerTitle}`}>{hd.headerTitle}</Link>
                )
            })
        }
        </div>
    </div>
  )
}

export default Header
