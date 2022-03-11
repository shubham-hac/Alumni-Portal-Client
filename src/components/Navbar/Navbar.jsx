import React, { useContext, useState } from 'react'
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { Popover, Tooltip, Typography } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {

    const { user } = useContext(AuthContext);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [showLinks, setShowLinks] = useState(false);
    const [navActive, setNavActive] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 120)
            setNavActive(true);
        else
            setNavActive(false);
    }
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
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
                {/* <div className={`profile-options ${showOptions ? 'show-options' : ''}`}>
                    <ul>
                        <li>
                            <Link to='/profile/xyz' onClick={() => setShowOptions(false)}>
                                <PersonIcon className='icon' />
                                My Profile
                            </Link>
                        </li>
                        <li>
                            <Link to='/profile/xyz' onClick={() => setShowOptions(false)}>
                                <NotificationsIcon className='icon' />
                                Notifications
                            </Link>
                        </li>
                        <li>
                            <Link to='/profile/xyz' onClick={() => setShowOptions(false)}>
                                <SettingsIcon className='icon' />
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link to='/login' className=''>
                                <LogoutIcon className='icon' />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div> */}
                {user
                    ? (
                        <div >
                            <img src={user ? `${PF}people/${user.profilePicture}` : `${PF}images/people/no-avatar.png`}
                                alt=""
                                className='navbar-profile-img'
                                onClick={handleClick}
                            />
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >
                                <Typography className='profile-options'>
                                    <ul>
                                        <li>
                                            <Link to='/profile/xyz' onClick={handleClose}>
                                                <PersonIcon className='icon' />
                                                My Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/profile/xyz' onClick={handleClose}>
                                                <NotificationsIcon className='icon' />
                                                Notifications
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/profile/xyz' onClick={handleClose}>
                                                <SettingsIcon className='icon' />
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/login' className='' onClick={handleClose}>
                                                <LogoutIcon className='icon' />
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </Typography>
                            </Popover>
                        </div>
                    )
                    : (
                        <Link to="login">
                            <button className='btn btn-primary-light'>Login/Register</button>
                        </Link>
                    )}
            </div>
        </div>
    )
}

export default Navbar
