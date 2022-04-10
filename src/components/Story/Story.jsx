import React, { useState } from 'react'
import './Story.css';
import { Link } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Users } from '../../dummyData';


const Story = ({ id, title, desc, storyImg, postDate, userId }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState(Users[userId]);
    const defaultSrc = 'https://res.cloudinary.com/dyyw5veqq/image/upload/v1649517324/AlumniPortal/post1_qvb5wq.jpg';

    return (
        <div className="story">
            <div className="story-top">
                <div className="story-top-left">
                    <Link to='/profile/xyz'>
                        <img src={`assets/images/people/${user.profilePicture}`} alt="" className='event-profile-image' />
                    </Link>
                    <span className='story-username'>{user.name}<span className='user-type'>| Alumni</span></span>
                </div>
                <div className="story-top-right">
                    <span className="post-date">{postDate}</span>
                </div>
            </div>
            <div className="story-bottom">
                {storyImg
                    ? <div className="story-image-container">
                        <img src={`${PF}posts/${storyImg}` || defaultSrc} alt="" className="story-image" />
                    </div>
                    : ''}
                <div className="story-info">
                    <Link to={`/stories/${id}`} className="story-title">
                        {title}
                    </Link>
                    <p className='story-description'>
                        {desc}
                    </p>
                    
                    
                    {/* <button className='btn register-btn'>Register</button> */}
                </div>
            </div>
        </div>
    )
}

export default Story
