import React, { useState } from 'react'
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <div className='navbar'>
            <div className="navbarLeft">
                <button className='btn hamburgurBtn' onClick={() => setShowLinks(!showLinks)} >
                    <MenuIcon sx={{ fontSize: 30 }} className='hamburgerIcon' />
                </button>
                <h2 className="logo">
                    SJCEM
                </h2>
            </div>
            <div className="navbarCenter" >
                <ul className="navbar-links" id={showLinks ? '' : 'hidden'}>
                    <li className='navbar-link'>
                        <NavLink to='/' activeclassname='active'>
                            Home
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/events' activeclassname='active'>
                            Events
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/stories' activeclassname='active'>
                            Stories
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/jobs' activeclassname='active'>
                            Jobs
                        </NavLink>
                    </li>
                    <li className='navbar-link'>
                        <NavLink to='/alumnis' activeclassname='active'>
                            Alumnis
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbarRight">
                <Link to='/profile'>
                    <img src="assets/images/no-avatar.png" alt="" className='navbar-profile-img' />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
