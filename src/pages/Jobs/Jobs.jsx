import React from 'react'
import Categories from '../../components/Categories/Categories';
import Job from '../../components/Job/Job';
import './Jobs.css';
import { jobs } from '../../dummyData';

const Jobs = () => {
    return (
        <div className='jobs'>
            <div className="job-categories-container">
                <Categories jobs />
            </div>
            <div className="jobs-container">
                {jobs.map(job => (
                    <Job 
                    key={job.id}
                    jobProfile={job.jobProfile} 
                    company={job.company} 
                    userId={job.userId}
                    profilePicture={job.profilePicture}
                    location={job.location}
                    deadline={job.deadline}
                    salary={job.salary}
                    linkClicks={job.linkClicks} />
                ))}
            </div>
        </div>
    )
}

export default Jobs
