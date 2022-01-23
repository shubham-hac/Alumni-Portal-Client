import React from 'react';
import './ApplicantCard.css';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import SchoolIcon from '@mui/icons-material/School';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ClassIcon from '@mui/icons-material/Class';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const ApplicantCard=({key,appnDate,name,courseName,branch,passoutYear,profile_img})=>{
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
                        <li><ClassIcon/> Branch: {branch}</li>
                        <li><FlightTakeoffIcon /> Passout Year: {passoutYear}</li>
                    </ul>
                </p>
            </div>
            <button className="view-button btn btn-primary-light">
                <RemoveRedEyeIcon className='icon' />
                <span>View Application</span>
            </button>
        </div>
    )
}
export default ApplicantCard