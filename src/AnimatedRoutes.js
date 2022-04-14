import React from 'react'
import {
    Routes,
    Route,
    Navigate,
    useLocation
} from "react-router-dom";
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Events from './pages/Events/Events';
import EventDetails from './pages/EventDetails/EventDetails';
import Jobs from './pages/Jobs/Jobs';
import AlumniDirectory from './pages/AlumniDirectory/AlumniDirectory';
import JobDetails from './pages/JobDetails/JobDetails';
import AdminDash from './pages/AdminDash/AdminDash';
import PendingApplications from './pages/PendingApplications/PendingApplications';
import ApplicantDetails from './pages/ApplicantDetails/ApplicantDetails'
import Stories from './pages/Stories/Stories';
import StoryDetails from './pages/StoryDetails/StoryDetails';
import Register from './components/Register/Register';
import SkeletonLoading from './components/SkeletonLoading/SkeletonLoading';
import Login from './components/Login/Login';

import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import ProjectShowcase from './pages/ProjectShowcase/ProjectShowcase';
import Settings from './pages/Settings/Settings';
import AddEvent from './components/AddEvent/AddEvent';

const AnimatedRoutes = () => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    return (
        <Routes location={location} key={location.pathname}>
            {/* <Route path="/" element={user ? <Home /> : <Login />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/profile/:userId" element={user ? <Profile /> : <Login />} />
            <Route path="/events" element={user ? <Events /> : <Login />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:storyId" element={<StoryDetails />} />
            <Route path="/projects" element={<ProjectShowcase />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="jobs/:jobId" element={<JobDetails />} />
            <Route path="/alumnis" element={<AlumniDirectory />} />
            <Route path="/admin-dash" element={<AdminDash />} />
            <Route path="/admin-dash/pending" element={<PendingApplications />} />
            <Route path="/admin-dash/applications/:appnID" element={<ApplicantDetails />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/skeleton" element={<SkeletonLoading />} />
            <Route path='/addEvent' element={<AddEvent />} />
        </Routes>
    )
}

export default AnimatedRoutes