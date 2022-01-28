import React, { useState, useEffect } from 'react';
import './Register.css';
import { courses } from '../../dummyData';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const Register = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [selectedCourse, setSelectedCourse] = useState(courses[0].courseId);
    const [branches, setBranches] = useState([]);

    const updateCourse = (e) => {
        setSelectedCourse(courses[e.target.value - 1]);
        setBranches(courses[e.target.value - 1].branches);
        
        // console.log(selectedCourse);
    }
    const checkCourse = (e) => {
        e.preventDefault();
        console.log(selectedCourse);
    }
    return (
        <div className="register">
            <div className="sign-up">
                <div className="side-img">
                    <img src={`${PF}/images/register.svg`} alt="" className='image1' />
                    <p>Already signed up? <a href="">Login</a> </p>
                </div>

                <div className="form-div">
                    <form action="" className="form" autoComplete='off' id="form" onSubmit={checkCourse}>
                        <h2>Sign Up</h2>
                        <div className="name">
                            <div>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" required />
                            </div>

                            <div>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" required />
                            </div>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="eg. xyz@gmail.com" />
                        </div>
                        <div className="Mobile-No">
                            <label htmlFor="email">Mobile No.</label>
                            <input type="number" name="Mobile-No" id="Mobile-No" placeholder="" />
                        </div>
                        <div className="PID">
                            <label htmlFor="PID">PID</label>
                            <input type="number" name="PID" id="PID" placeholder="eg. 1192066" />
                        </div>

                        <div className="role">
                            <label htmlFor="role">Role</label>
                            <select name="role" id="">
                                <option value="alumni">Alumni</option>
                                <option value="student">Student</option>
                            </select>
                        </div>
                        <div className='course'>
                            <label htmlFor="course">Course</label>
                            <select name='course' value={selectedCourse.courseId} onChange={updateCourse} required >
                                <option value="none" selected disabled hidden>Select Course</option>
                                {courses.map(course => (
                                    <option key={course.courseId} value={course.courseId}>{course.courseName}</option>
                                ))}
                            </select>
                        </div>
                        {branches
                            ? (
                                <div className='branch'>
                                    <label htmlFor="branch">Branch</label>
                                    <select name='branch' className="filter-option">
                                        {branches.map(branch => (
                                            <option key={branch} value={branch}>{branch}</option>
                                        ))}
                                    </select>
                                </div>
                            )
                            : ' '}
                        <div className="batch">
                            <label htmlFor="batch">Admission Year</label>
                            <select name="batch" id="">
                                <option value="">2016</option>
                                <option value="">2017</option>
                                <option value="">2018</option>
                                <option value="">2019</option>
                                <option value="">2020</option>
                            </select>
                        </div>
                        <div className='username'>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="eg. dishant21" />
                        </div>
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
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
