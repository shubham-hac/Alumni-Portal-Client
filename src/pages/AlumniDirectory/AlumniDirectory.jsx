import React, { useState, useEffect } from 'react'
import AlumniProfileCard from '../../components/AlumniProfileCard/AlumniProfileCard';
import './AlumniDirectory.css';
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';
import { courses } from '../../dummyData';

const AlumniDirectory = () => {
    const [selectedCourse, setSelectedCourse] = useState(courses[0].courseId);
    const [branches, setBranches] = useState(courses[0].branches);

    const updateCourse =  (e) => {
        setSelectedCourse(courses[e.target.value-1]);
        setBranches(courses[e.target.value-1].branches);
        // console.log(selectedCourse);
    }
    const checkCourse = (e) => {
        e.preventDefault();
        console.log(selectedCourse);
    }
    return (
        <div className='alumni-directory'>
            <div className="alumni-categories">
                <h3>Alumni Categories</h3>
                <ul className='categories'>
                    <Link to='/events'>
                        <li className='category category-active'>
                            <span>All Alumnis</span>
                            <span>(300)</span>
                        </li>
                    </Link>
                    <Link to='/events/past'>
                        <li className='category'>
                            <span>Top Alumnis</span>
                            <span>(23)</span>
                        </li>
                    </Link>
                    <Link to='/events/upcoming'>
                        <li className='category'>
                            <span>Most Active</span>
                            <span>(18)</span>
                        </li>
                    </Link>
                </ul>
                <form action="" className='filter-alumnis' onSubmit={checkCourse}>
                    <h3 className='filter-heading'>Filter</h3>
                    <div className='filter-options'>

                        <select className="filter-option" value={selectedCourse.courseId} onChange={updateCourse} >
                            {/* <option value="">Select Course</option> */}
                            {courses.map(course => (
                                <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
                            ))}
                        </select>

                        <select className="filter-option">
                            {branches.map(branch => (
                                <option key={branch} value={branch}>{branch}</option>
                            ))}
                        </select>
                    </div>
                    <button className='btn btn-secondary' type='submit'>Filter</button>
                </form>

            </div>
            <div className="alumni-list">
                <div className="member-count">
                    <span>1728 Members in Community</span>
                </div>
                <div className="alumni-profiles">
                    {Users.filter((user) => {
                        return user.alumni;
                    }).map(alumni => (
                        <AlumniProfileCard
                            key={alumni.id}
                            name={alumni.name}
                            desc={alumni.desc}
                            profilePicture={alumni.profilePicture} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AlumniDirectory
