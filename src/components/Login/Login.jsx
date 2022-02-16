import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import './Login.css'
import axios from 'axios';

const Login = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [selectedRole, setSelectedRole] = useState(1);

    const email  = useRef();
    const username = useRef();
    const password = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: email.current.value,
            password: password.current.value
        }
        try {
            const response = await axios.post(`http://localhost:5000/auth/login`, user);
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <div className="login">
            <div className="sign-in">
                <div className="side-img">
                    <img src={`${PF}/images/register.svg`} alt="" className='image1' />
                    <p>Don't have an account ? 
                        <Link to="/register">
                            Signup
                        </Link> 
                    </p>
                </div>

                <div className="form-div">
                    <form action="" className="form" autoComplete='off' id="login-form" onSubmit={handleSubmit}>
                        <h2>Sign In</h2>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" ref={email} placeholder="eg. xyz@gmail.com" />
                        </div>
                        {/* <div className="role">
                            <label htmlFor="role">Role</label>
                            <select name="role" id="role" value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                                <option value="alumni">Alumni</option>
                                <option value="student">Student</option>
                            </select>
                        </div> */}
                        {/* <div className='username'>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" ref={username} required />
                        </div> */}
                        <div className='password'>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" ref={password} required />
                        </div>
                        <label htmlFor="form" id="error"></label>
                        <div className="button-container">
                            <button type="submit" className="btn btn-primary" id="submit">Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login