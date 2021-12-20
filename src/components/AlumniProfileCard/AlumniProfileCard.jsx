import React from 'react'
import './AlumniProfileCard.css';
import EmailIcon from '@mui/icons-material/Email';

const AlumniProfileCard = ({ name, desc, profilePicture }) => {
    return (
        <div className="alumni-profile">
            <div className="alumni-profile-image">
                <img src={`assets/images/people/${profilePicture}`} alt="" />
            </div>
            <div className="alumni-profile-text">
                <div className="alumni-name">
                    <h3>{name}</h3>
                    <button className="msg-button" >
                        <EmailIcon />
                    </button>
                </div>
                <p className='alumni-description'>{desc}</p>
            </div>

            <button className="add-button btn btn-primary">
                +Add to Network
            </button>

        </div>
    )
}

export default AlumniProfileCard
