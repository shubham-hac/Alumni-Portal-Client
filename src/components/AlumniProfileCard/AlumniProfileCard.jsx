import React, { useState } from 'react'
import './AlumniProfileCard.css';
import EmailIcon from '@mui/icons-material/Email';
import { Tooltip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { Link } from 'react-router-dom';

const AlumniProfileCard = ({ id, firstName, lastName, course, branch, desc, profilePicture }) => {
    const [following, setFollowing] = useState(false);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="alumni-profile">
            <div className="alumni-profile-image">
                <img src={`${profilePicture || 'no-avatar.png'}`} alt="" />
                <Tooltip title="message-alumni">
                        <button className="msg-button" >
                            <EmailIcon />
                        </button>
                    </Tooltip>
            </div>
            <div className="alumni-profile-text">
                <div className="alumni-name">
                    <Link to={`/profile/${id}`}>
                        <span>{firstName} {lastName}</span>
                    </Link>
                    
                    
                    <span className='alumni-course'>{course}, {branch}</span>
                </div>
                
                <p className='alumni-description'>{desc || `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus possimus inventore quidem 
`}</p>
            </div>

            {following
                ? (<button className="add-button btn btn-green" onClick={() => setFollowing(!following)} >
                    <DoneIcon className='icon' />
                    <span>Following</span>
                </button>)
                : (<button className="add-button btn btn-primary-light" onClick={() => setFollowing(!following)}>
                    +Add to Network
                </button>)
            }
        </div>
    )
}

export default AlumniProfileCard
