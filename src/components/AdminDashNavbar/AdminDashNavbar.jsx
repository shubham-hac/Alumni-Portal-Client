import React from 'react';
import './AdminDashNavbar.css';
import { NavLink , Link } from 'react-router-dom';
//TODO: ADD NavLinks and TURN THIS INTO A PROPER NAVBAR
const AdminDashNavbar=()=>{
    return(
        <div className='admin-actions'>
            <h3>Administrative Actions</h3>
            <ul className='categories'>
                <Link to='/admin-dash/'>
                        <li className='category category-active'>
                            <span>Recent Activity</span>
                            <span>(15)</span>
                        </li>
                </Link>
                <Link to='/admin-dash/pending'>
                        <li className='category'>
                            <span>Pending Applications</span>
                            <span>(23)</span>
                        </li>
                </Link>
                <Link to='/admin-dash/users'>
                        <li className='category'>
                            <span>Manage Users</span>
                            <span>(18)</span>
                        </li>
                </Link>
            </ul>
        </div>
    )
}
export default AdminDashNavbar