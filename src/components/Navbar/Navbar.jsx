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
import { logoutCall } from '../../apiCalls';
import { useNavigate } from 'react-router';


const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [showLinks, setShowLinks] = useState(false);
    const [navActive, setNavActive] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const defaultSrc = 'https://res.cloudinary.com/dyyw5veqq/image/upload/v1649520852/AlumniPortal/no-avatar_xadk4e.png';
    const navigate = useNavigate();
    
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

    const logout = () => {
        logoutCall(dispatch);
        setAnchorEl(null);
        navigate('/');
    }

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
                        <NavLink to='/projects' activeclassname='active' onClick={() => setShowLinks(!showLinks)}>
                            Project Showcase
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
                    {user
                        ?((() => { //Only show the admin-dash link if the user is an admin:
                            if(user.userType === 3) {
                                return <li className='navbar-link'>
                                    <NavLink to='/admin-dash' activeclassname='active' onClick={() => setShowLinks(!showLinks)}>
                                        Admin Dash
                                    </NavLink>
                                </li>
                            }
                            })()
                        ):''}
                </ul>
            </div>
            <div className="navbarRight">

                {user
                    ? (
                        <div >
                            <img src={user ? `${user.profilePicture}` : defaultSrc}
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
                                <div className='profile-options'>
                                    {/* <div>
                                        <img src={user ? `${PF}people/${user.profilePicture}` : `${PF}images/people/no-avatar.png`}
                                            alt=""
                                            className='profile-image'
                                        />
                                    </div> */}
                                    <ul>
                                        <li>
                                            <NavLink to={`/profile/${user._id}`} onClick={handleClose}>
                                                <PersonIcon className='icon' />
                                                My Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <Link to='/profile/xyz' onClick={handleClose}>
                                                <NotificationsIcon className='icon' />
                                                Notifications
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/settings' onClick={handleClose}>
                                                <SettingsIcon className='icon' />
                                                Settings
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/login' className='' onClick={logout}>
                                                <LogoutIcon className='icon' />
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
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
