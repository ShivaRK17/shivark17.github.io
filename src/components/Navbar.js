import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

import {FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = ()=>{
        setClick(!click)
    }

    const [color, setColor] = useState(false)
    const changeColor = ()=> {
        if(window.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener("scroll",changeColor)

    return (<>
        <div className={`header ${color?"header-bg":""}`}>
            <NavLink to='/'><h1>Shiva Rama Krishna</h1></NavLink>
            <ul className={click?`nav-menu active`:`nav-menu`}>
                <li><NavLink onClick={handleClick} to='/'>Home</NavLink></li>
                <li><NavLink onClick={handleClick} to='/about'>About</NavLink></li>
                <li><NavLink onClick={handleClick} to='/projects'>Projects</NavLink></li>
                <li><NavLink onClick={handleClick} to='/contact'>Contact</NavLink></li>
                <li><NavLink onClick={handleClick} to='/blog'>Blog</NavLink></li>
            </ul>
            <div onClick={handleClick} className="ham">
                {click?<FaTimes size={20} style={{color:'white'}}/>:<FaBars size={20} style={{color:'white'}}/>}
            </div>
        </div>
    </>
    )
}

export default Navbar   