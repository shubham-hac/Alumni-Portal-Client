import React from 'react';
import './ApplicantCard.css';
import { Link } from 'react-router-dom';
import TimelineIcon from '@mui/icons-material/Timeline';
import SchoolIcon from '@mui/icons-material/School';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ClassIcon from '@mui/icons-material/Class';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BadgeIcon from '@mui/icons-material/Badge'
const ApplicantCard=({appnID,appnDate,name,courseName,branch,role,joinYear,passoutYear,profile_img})=>{
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return(
        <div className="applicant-card">
            <div className="applicant-profile-image">
                <img src={`${PF}images/people/${profile_img}`} alt="" />
            </div>
            <div className="applicant-details">
                <div className="applicant-name">
                    <h3>{name}</h3>
                </div>
                <p className='applicant-data'>
                    <ul>
                        <li><DateRangeIcon/> Applied on: {appnDate}</li>
                        <li><SchoolIcon /> Course: {courseName}</li>
                        <li><ClassIcon /> Branch: {branch}</li>
                        <li><BadgeIcon /> Role: {role==1?'Alumni':'Student'}</li>
                        <li><TimelineIcon /> {passoutYear!=''?`Duration: ${joinYear}-${passoutYear}`:`Joined: ${joinYear}`}</li>
                    </ul>
                </p>
            </div>
            <Link to={`/admin-dash/applications/${appnID}`} className="appn-link">
                <button className="view-button btn btn-primary-light">
                    <RemoveRedEyeIcon className='icon' />
                    View Application
                </button>
            </Link>
        </div>
    )
}
export default ApplicantCard