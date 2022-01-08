import React from 'react'
import AlumniProfileCard from '../../components/AlumniProfileCard/AlumniProfileCard';
import './AlumniDirectory.css';
import { Users } from '../../dummyData';
import { Link } from 'react-router-dom';

const AlumniDirectory = () => {
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
                <form action="" className='filter-alumnis'>
                    <h3 className='filter-heading'>Filter</h3>
                    <div className='filter-options'>
                        <select className="filter-option">
                            <option value="">Select Course</option>
                            <option value="">B.Tech</option>
                        </select>
                        <select className="filter-option">
                            <option value="">Select Batch</option>
                            <option value="">2019</option>
                        </select>
                    </div>
                    <button className='btn btn-secondary' type='submit'>filter</button>
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
