import React from 'react'
import {useState} from 'react'
import {useParams} from 'react-router-dom'
import AdminDashNavbar from '../../components/AdminDashNavbar/AdminDashNavbar'
import './ApplicantDetails.css'
import { userApplications } from '../../dummyData'
import DoneIcon from '@mui/icons-material/Done'
import ClearIcon from '@mui/icons-material/Clear'
import DateRangeIcon from '@mui/icons-material/DateRange'
import TagIcon from '@mui/icons-material/Tag'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TimelineIcon from '@mui/icons-material/Timeline';
import SchoolIcon from '@mui/icons-material/School'
import ClassIcon from '@mui/icons-material/Class'
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import BadgeIcon from '@mui/icons-material/Badge'
import CakeIcon from '@mui/icons-material/Cake'
import FemaleIcon from '@mui/icons-material/Female'
import MaleIcon from '@mui/icons-material/Male'
import SummarizeIcon from '@mui/icons-material/Summarize'
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';

const ApplicantDetails=()=>{
    const PF=process.env.REACT_APP_PUBLIC_FOLDER
    const {appnID}=useParams()
    const [application,setApplication]=useState(userApplications[appnID-1])
    return(
        <div className="pending-appn-details">
            <AdminDashNavbar />
            <div className="application-details">
                <div className="main-content">
                    <div className="left-pane">
                        <div className="academic-card">
                            <div className='card-heading'>
                                <SummarizeIcon /> Academic Summary
                            </div>
                            <div className='card-content'>
                                <div><TagIcon/> PID No: EU1192158</div>
                                <div><SchoolIcon/> Course: { application.courseName }</div>
                                <div><ClassIcon /> Branch: { application.branch }</div>
                                <div><TimelineIcon/> {application.passoutYear!=''?`Duration: ${application.joinYear}-${application.passoutYear}`:`Joined: ${application.joinYear}`}</div>
                                <div><AccountBalanceIcon /> Institute: St. John College of Engineering and Management</div>
                            </div>
                        </div>
                        <div className="contact-card">
                            <div className='card-heading'>
                                <ContactsIcon /> Contact Information
                            </div>
                            <div className='card-content'>
                                <div><EmailIcon /> { application.email }</div>
                                <div><PhoneIcon/> { application.phone_no }</div>
                                <div><LocationOnIcon/> { application.address }</div>
                            </div>
                           
                        </div>
                        <div className="misc-card">
                            <div className="card-heading">
                                <InfoIcon /> Other Information
                            </div>
                            <div className='card-content'>
                                <div><i><AlternateEmailIcon />{application.username}</i></div>
                                <div><CakeIcon /> {application.birthdate}</div>
                                <div>{application.gender=='Male'?<MaleIcon />:<FemaleIcon />} {application.gender}</div>
                                <div><BadgeIcon/> {application.role==1?'Alumni':'Student'}</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="profile-pane">
                        <div className="profile-img">
                            <img src={`${PF}images/people/${ application.profile_img }`} />
                        </div>
                        <div className="profile-pane-text">
                            <div className="applicant-name">
                                <h2>{application.name}</h2>
                                </div>
                            <div className="appn-date">
                                <span><DateRangeIcon/>Applied on: {application.appnDate}</span>
                            </div>
                            <div className="action-controls">
                                <button class="btn btn-green"><DoneIcon/>Accept</button>
                                <button class="btn btn-danger"><ClearIcon/>Reject</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ApplicantDetails