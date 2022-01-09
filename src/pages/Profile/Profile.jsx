import React from 'react'
import './Profile.css';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkIcon from '@mui/icons-material/Link';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EditIcon from '@mui/icons-material/Edit';
import CakeIcon from '@mui/icons-material/Cake';
import FemaleIcon from '@mui/icons-material/Female';

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="profile">
            <div className="profile-cover">
                <img src={`${PF}images/people/cover3.png`} alt="" className="cover-image" />
            </div>
            <div className="profile-info">
                <div className="profile-info-left">
                    <div className="basic-info">
                        <div className="profile-image-container">
                            <img src={`${PF}images/people/person2.jpg`} alt="" className="profile-image" />
                            <button className='btn profile-edit-btn'><EditIcon /></button>
                        </div>
                        <h3>YASH PATIL</h3>
                        <div className="course-info">
                            <span className="batch">Class of 2018</span>
                            <span className="department">B. Tech., Mechanical Engineering</span>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-top">
                            <span className='card-title'>
                                <InfoIcon className='icon' />
                                <span>Contact Information</span>
                            </span>
                            <button className='btn btn-green-light'>
                                <EditIcon className='icon' />
                                Edit
                            </button>
                        </div>
                        <div className="contact-info-bottom">
                            <div className='card-info'>
                                <MailIcon className="icon" />
                                <span className="email value">yashpatil04@gmail.com</span>
                            </div>
                            <div className='card-info'>
                                <LocalPhoneIcon className="icon" />
                                <span className="phone value">8007847008</span>
                            </div>
                            <div className='card-info'>
                                <LinkIcon className="icon" />
                                <span className="profile-link value">http://report.aldel.org/menu.php</span>
                            </div>
                            <div className='card-info'>
                                <LocationOnIcon className="icon" />
                                <span className="address value">Add Address</span>
                            </div >
                        </div>

                    </div>

                    <div className="other-info">
                        <div className="other-info-top">
                            <span className='card-title'>
                                <InfoIcon className='icon' />
                                <span>Other Information</span>
                            </span>
                            <button className='btn btn-green-light'>
                                <EditIcon className='icon' />
                                Edit
                            </button>
                        </div>
                        <div className="other-info-bottom">
                            <div>
                                <CakeIcon className='icon' />
                                <span className="birth-date value">21st Jan 2001</span>
                            </div>
                            <div>
                                <FemaleIcon className='icon' />
                                <span className="gender value">Female</span>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="profile-info-right">
                    <div className="summary">
                        <div className="summary-top">
                            <span className='card-title'>
                                <SummarizeIcon className='icon' />
                                <span>Summary</span>
                            </span>
                            <button className='btn btn-green-light'>+ Add</button>
                        </div>
                        <div className="summary-bottom">
                            <span>+Use summary to share what you do, your achievements or the opportunities you're looking for</span>
                        </div>
                    </div>
                    <div className="education">
                        <div className="edu-top">
                            <span className='card-title'>
                                <SchoolIcon className='icon' />
                                <span>Education</span>
                            </span>
                            <button className='btn btn-green-light'>+ Add Education</button>
                        </div>
                        <div className="edu-bottom">
                            <h4>St. John college of engineering and management</h4>
                            <span>B. Tech., Mechanical Engineering</span>
                            <span>2013-2018</span>
                        </div>
                    </div>

                    <div className="work-experience">
                        <div className="work-exp-top">
                            <span className='card-title'>
                                <WorkIcon className='icon' />
                                <span>Work Experience</span>
                            </span>
                            <span><button className='btn btn-green-light'>+ Add Experience</button></span>
                        </div>
                        <div className="work-exp-bottom">
                            <span> +Share your work history to enhance your networking potential</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile
