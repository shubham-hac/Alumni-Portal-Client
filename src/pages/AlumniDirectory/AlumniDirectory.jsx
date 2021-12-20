import React from 'react'
import AlumniProfileCard from '../../components/AlumniProfileCard/AlumniProfileCard';
// import Categories from '../../components/Categories/Categories';
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
                    <li>
                        <select name="" id="">
                            <option value="">Select Course</option>
                        </select>
                    </li>
                </ul>
            </div>
            <div className="alumni-list">
                <div className="member-count">
                    <span>1728 Members in Community</span>
                </div>
                <div className="alumni-profiles">
                    {Users.filter( (user) => {
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
