import React, { useState, useEffect } from 'react';
import './Register.css';
// import { courses } from '../../dummyData';
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState({});
    const [branches, setBranches] = useState([]);
    const [selectedBranch, setSelectedBranch] = useState(null);
    const [selectedRole, setSelectedRole] = useState(1);
    const [admissionYear, setAdmissionYear] = useState(null);

    useEffect(() => {
      const fetchCourses = async () => {
            const response = await axios.get('http://localhost:5000/courses/all');
            // console.log(response.data);
            setCourses(response.data);
      }
      fetchCourses();
    }, []);
    
    const updateCourse = async (e) => {
        try {
            setBranches([]);
            const response = await axios.get(`http://localhost:5000/courses/${e.target.value}`);
            setSelectedCourse(response.data);
            setBranches(response.data.branches);
            setSelectedBranch(null);
        } catch (error) {
            console.log(error)
        }
    }

    const firstName = useRef();
    const lastName = useRef();
    const email  = useRef();
    const mobile = useRef();
    const pid = useRef();
    const course = selectedCourse.courseName;
    const username = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(selectedCourse.branches == null)
            setSelectedBranch(null);
        const newUser = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            pid: pid.current.value,
            role: selectedRole,
            course: course,
            branch: selectedBranch,
            admissionYear: admissionYear,
            username: username.current.value,
            password: password.current.value
        }
        console.log(newUser)
    }
    return (
        <div className="register">
            <div className="sign-up">
                <div className="side-img">
                    <img src={`${PF}/images/register.svg`} alt="" className='image1' />
                    <p>Already signed up?
                        <Link to="/login">
                            Login
                        </Link>
                    </p>
                </div>

                <div className="form-div">
                    <form action="" className="form" autoComplete='off' id="form" onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        <div className="name">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" ref={firstName} required />
                            </div>

                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" ref={lastName} required />
                            </div>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" ref={email} placeholder="eg. xyz@gmail.com" />
                        </div>
                        <div className="Mobile-No">
                            <label htmlFor="Mobile-No">Mobile No.</label>
                            <input type="tel" name="Mobile-No" id="Mobile-No" ref={mobile} placeholder="" />
                        </div>
                        <div className="PID">
                            <label htmlFor="PID">PID</label>
                            <input type="number" name="PID" id="PID" ref={pid} placeholder="eg. 1192066" />
                        </div>

                        <div className="role">
                            <label htmlFor="role">Role</label>
                            <select name="role" id="role" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                                <option value="alumni">Alumni</option>
                                <option value="student">Student</option>
                            </select>
                        </div>
                        <div className='course'>
                            <label htmlFor="course">Course</label>
                            <select name='course' onChange={updateCourse} required >
                                <option value="none" selected disabled hidden>Select Course</option>
                                {courses.map(course => (
                                    <option key={course._id} value={course._id}>{course.courseName}</option>
                                ))}
                            </select>
                        </div>
                        {branches
                            ? (
                                <div className='branch'>
                                    <label htmlFor="branch">Branch</label>
                                    <select name='branch' onChange={(e) => setSelectedBranch(e.target.value)} className="filter-option">
                                        <option value="none" selected disabled hidden>Select Branch</option>
                                        {branches.map(branch => (
                                            <option key={branch} value={branch}>{branch}</option>
                                        ))}
                                    </select>
                                </div>
                            )
                            : ' '}
                        <div className="batch">
                            <label htmlFor="batch">Admission Year</label>
                            <select name="batch" id="" onChange={(e) => setAdmissionYear(e.target.value)}>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                            </select>
                        </div>
                        <div className='username'>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" ref={username} placeholder="eg. dishant21" />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" ref={password} />
                        </div>
                        <div className='email'>
                            <label htmlFor="email">Confirm Password</label>
                            <input type="password" name="password2" id="password2" />
                        </div>
                        <label htmlFor="form" id="error"></label>
                        <div className="button-container">
                            <button type="submit" className="btn btn-primary" id="submit">Sign Up</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Register;
