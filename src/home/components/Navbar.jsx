import React from 'react'
import {NavLink} from "react-router-dom";
import {AiOutlineSearch} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
import {useSliderContext} from "../../context/sliderContext";
import "./Navbar.css";

function Navbar() {
    const {slideClose, slideOpen, slide} = useSliderContext();
    return (
        <header>
            <nav>
                <ul>
                    <li className="logo">
                        <GiHamburgerMenu className="hamburger" 
                        onClick={()=> slide? slideClose(): slideOpen()}/>
                        nullBrains<span>.</span>
                        </li>
                    <li className="nav-item">
                        {navItem.map(item=> <NavLink to={item.link} key={item.id}>{item.name}</NavLink>)}
                        <AiOutlineSearch className="search-icon"/>
                    </li>
                    <li>
                        <button className="signin">Sign In</button>
                        <button className="signup">Sign Up</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar

const navItem = [{id: 1, name: "home", link: "/"}, {id: 2, name: "features", link: "/features"}, {id: 3, name: "blog", link: "/blog"}, {id: 4, name:"contact", link: "/contact"} ]
