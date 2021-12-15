import React from 'react'
import Categories from '../../components/Categories/Categories';
import Job from '../../components/Job/Job';
import './Jobs.css';

const Jobs = () => {
    return (
        <div className='jobs'>
            <div className="job-categories-container">
                <Categories jobs />
            </div>
            <div className="jobs-container">
                <Job />
                <Job />
                <Job />
                <Job />
            </div>
        </div>
    )
}

export default Jobs
