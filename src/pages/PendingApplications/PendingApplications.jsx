import React from 'react';
import './PendingApplications.css';
import AdminDashNavbar from '../../components/AdminDashNavbar/AdminDashNavbar';
import ApplicantCard from '../../components/ApplicantCard/ApplicantCard';
import { userApplications } from '../../dummyData.js'
const PendingApplications=()=>{
    return(
        <div className="admin-dash">
            <AdminDashNavbar />
            <div className="applicant-cards">
            {userApplications.map((application)=>(
                <ApplicantCard 
                    key={application.appnID}
                    appnDate={application.appnDate}
                    name={application.name}
                    courseName={application.courseName}
                    branch={application.branch}
                    profile_img={application.profile_img}
                    passoutYear={application.passoutYear}
                />
            ))}
            </div>
        </div>
    )
}

export default PendingApplications