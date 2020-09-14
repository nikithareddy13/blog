import React from 'react';
import './styles.css';

const Navbar =(props) =>{
    return(
        <div className="navbar">
            <ul className="navbarMenu">
            <li><a href="#"> Home</a></li>
            <li><a href="#"> About us</a></li>
            <li><a href="#"> Posts</a></li>
            <li><a href="#"> contact us</a></li>
            </ul>
            <div className="search">
                <input type="text" placeholder="search" />
                <img alt="search" src = {require("../../assets/icons/search-32.png")}></img>
            </div>
        </div>
    )
}
export default Navbar;