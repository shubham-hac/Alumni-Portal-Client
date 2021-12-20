import React from 'react'
import './Job.css';

const Job = ({jobProfile, company,userId, profilePicture, location, deadline, salary, linkClicks}) => {
    return (
        <div className="job">
            <div className="job-top">
                <div className="job-top-left">
                    <span className="job-profile">{jobProfile}</span>
                    <span className='pipe'>|</span>
                    <span className="job-company">{company}</span>
                </div>
                <div className="job-top-right">
                    <span className="post-date">
                        22 mins ago
                    </span>
                </div>
            </div>
            <div className="job-center">
                <div className="location">
                    <span className="job-info">Location</span>
                    <span className="job-info-value">{location}</span>
                </div>
                <div className="deadline">
                    <span className="job-info">Deadline</span>
                    <span className="job-info-value">{deadline}</span>
                </div>
                <div className="salary">
                    <span className="job-info">Salary</span>
                    <span className="job-info-value">{salary}</span>
                </div>
                <div className="link-clicks">
                    <span className="job-info">Link Clicks</span>
                    <span className="job-info-value">{linkClicks}</span>
                </div>
            </div>
            <div className="job-bottom">
                <div className="job-bottom-left">
                    <img src={`assets/images/people/${profilePicture}`} alt="" className='job-profile-image' />
                    <span>{userId}</span>
                </div>
                <div className="job-bottom-right">
                    <button className="btn btn-primary">
                        View
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Job
