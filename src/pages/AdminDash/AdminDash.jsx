import React from 'react'
import './AdminDash.css'
import AdminHistoryCard from '../../components/AdminHistoryCard/AdminHistoryCard';
import { Link } from 'react-router-dom';
import { ModerationHistory } from '../../dummyData';
const AdminDash = () => {
    return (
    <div className='admin-dash'>
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
        <div className="action-cards-list">
            <table className="action-cards">
                <tbody>
                {ModerationHistory.map((action) => (
                        <AdminHistoryCard
                            key={action.id}
                            action_type={action.action_type}
                            admin_name={action.admin_name}
                            action_desc={action.action_desc}
                            action_timestamp={action.action_timestamp} />
                ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default AdminDash
