import React, { useContext, useState } from 'react'
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

    const {user} = useContext(AuthContext);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [showLinks, setShowLinks] = useState(false);
    const [navActive, setNavActive] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    window.onscroll = () => {
        if(window.scrollY > 120)
            setNavActive(true);
        else
            setNavActive(false);
    }

    return (
        <div className={`navbar ${navActive ? 'navbar-active' : ''}`}>
            <div className="navbarLeft">
                <button className='btn hamburgurBtn' onClick={() => {
                    setShowLinks(!showLinks);
                    setShowOptions(false);
                    }} >
                    <MenuIcon sx={{ fontSize: 30 }} className='hamburgerIcon' />
                </button>
                <h2 className="logo">
                    SJCEM
                </h2>
            </div>
            <div className="navbarCenter" >
                <ul className="navbar-links" id={showLinks ? 'hidden' : ''}>
                    <li className='navbar-link'>
                        <NavLink to='/' activeclassname='active' onClick={() => setShowLinks(!showLinks)} >
                            Home
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/events' activeclassname='active' onClick={() => setShowLinks(!showLinks)}>
                            Events
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/stories' activeclassname='active' onClick={() => setShowLinks(!showLinks)}>
                            Stories
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/jobs' activeclassname='active' onClick={() => setShowLinks(!showLinks)}>
                            Jobs
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/alumnis' activeclassname='active' onClick={() => setShowLinks(!showLinks)}>
                            Alumnis
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbarRight">
                <div className={`profile-options ${showOptions ? 'show-options' : ''}`}>
                    <ul>
                        <li>
                            <Link to='/profile/xyz' onClick={() => setShowOptions(false)}>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to='/login' className=''>
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
                <div onClick={() => {
                    setShowLinks(false)
                    setShowOptions(!showOptions)
                    }}>
                    <img src={user ? `${PF}images/people/${user.profilePicture}` : `${PF}images/people/no-avatar.png`} alt="" className='navbar-profile-img' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
