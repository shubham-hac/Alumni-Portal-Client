import React,{useState, useEffect} from 'react'
import './Event.css';
import { Link } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from 'axios';

const Event = ({ id, title, desc, eventImage, postDate, scheduleDate, userId }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    useEffect(() => {
      const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/users?userId=${userId}`);
                const data = await response.data;
                console.log(data);
                setUser(data);
                
            } catch (error) {
                console.log(error);
            }
      }
      fetchUser();
    }, []);
    
    return (
        <div className="event">
            <div className="event-top">
                <div className="event-top-left">
                    <Link to='/profile/xyz'>
                        <img src={`${PF}people/${user.profilePicture}`} alt="" className='event-profile-image' />
                    </Link>
                    <Link to='/profile/xyz'>
                        <span className='event-username'>{user.firstName} {user.lastName}</span>
                        <span className='user-type'>| {user.userType === 2 ? "Alumni" : "Admin"}</span>
                    </Link>
                </div>
                <div className="event-top-right">
                    <span className="post-date">{postDate}</span>
                </div>
            </div>
            <div className="event-bottom">
                {eventImage
                    ? <div className="event-image-container">
                        <img src={`${PF}${eventImage}`} alt="" className="event-image" />
                    </div>
                    : ''}
                <div className="event-info">
                    <Link to={`/events/${id}`} className="event-title">
                        {title}
                    </Link>
                    <p className='event-description'>
                        {desc}
                    </p>
                    <span className='event-date'>
                        <EventIcon className='icon' />
                        <span>{scheduleDate}</span>
                    </span>
                    <span className="event-location">
                        <LocationOnIcon className='icon' />
                        <span>Indian Institute of Technology Indore, Khandwa Road, Simrol.-453552. , Indore</span>
                    </span>
                    {/* <button className='btn register-btn'>Register</button> */}
                </div>
            </div>
        </div>
    )
}

export default Event
