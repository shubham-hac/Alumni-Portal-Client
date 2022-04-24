import React, { useState, useEffect, useContext } from 'react'
import AlumniProfileCard from '../../components/AlumniProfileCard/AlumniProfileCard';
import './AlumniDirectory.css';
import { userApplications, Users } from '../../dummyData';
import { Link } from 'react-router-dom';
import { courses } from '../../dummyData';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PersonIcon from '@mui/icons-material/Person';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const AlumniDirectory = () => {
    const [selectedCourse, setSelectedCourse] = useState({});
    const [branches, setBranches] = useState([]);
    const [filterDisabled, setFilterDisabled] = useState(true);
    const [alumnis, setAlumnis] = useState([]);

    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchAlumnis = async () => {
            const res = await axios.get(`http://localhost:5000/users/alumnis?course=B.E`);
            console.log(res.data);
            setAlumnis(res.data);
        }
        fetchAlumnis();
    }, [])

    const updateCourse = (e) => {
        setSelectedCourse(courses[e.target.value - 1]);
        setBranches(courses[e.target.value - 1].branches);
        setFilterDisabled(false);
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
                            <option value="none" selected disabled hidden>Select Course</option>
                            {courses.map(course => (
                                <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
                            ))}
                        </select>

                        {branches
                            ? (
                                <select className="filter-option">
                                    {branches.map(branch => (
                                        <option key={branch} value={branch}>{branch}</option>
                                    ))}
                                </select>
                            ) : ''}
                    </div>
                    <button className={`btn btn-secondary ${filterDisabled ? 'btn-disabled' : ''}`} type='submit' disabled={filterDisabled}>
                        <FilterAltIcon />
                        Filter
                    </button>
                </form>

            </div>
            <div className="alumni-list">
                <div className="member-count">
                    <PersonIcon className='icon' />
                    <span>1728 Members in Community</span>
                </div>
                <div className="alumni-profiles">
                    {alumnis.filter((alumni) => {
                        return alumni._id !== user._id
                    }).map(alumni => (
                        <AlumniProfileCard
                            key={alumni._id}
                            id={alumni._id}
                            firstName={alumni.firstName}
                            lastName={alumni.lastName}
                            course={alumni.course}
                            branch={alumni.branch}
                            desc={alumni.desc}
                            profilePicture={alumni.profilePicture} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AlumniDirectory
