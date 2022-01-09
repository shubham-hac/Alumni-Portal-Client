import React, { useState } from 'react'
import './AlumniProfileCard.css';
import EmailIcon from '@mui/icons-material/Email';
import { Tooltip } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';

const AlumniProfileCard = ({ name, desc, profilePicture }) => {
    const [following, setFollowing] = useState(false);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="alumni-profile">
            <div className="alumni-profile-image">
                <img src={`${PF}images/people/${profilePicture || 'no-avatar.png'}`} alt="" />
            </div>
            <div className="alumni-profile-text">
                <div className="alumni-name">
                    <h3>{name}</h3>
                    <Tooltip title="message alumni">
                        <button className="msg-button" >
                            <EmailIcon />
                        </button>
                    </Tooltip>
                </div>
                <p className='alumni-description'>{desc}</p>
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
