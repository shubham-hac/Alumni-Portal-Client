import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
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

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={user ? <Home /> : <Login />} />
            <Route path="/profile/:profileId" element={user ? <Profile /> : <Login />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetails />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:storyId" element={<StoryDetails />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="jobs/:jobId" element={<JobDetails />} />
            <Route path="/alumnis" element={<AlumniDirectory />} />
	          <Route path="/admin-dash" element={<AdminDash />}  />
            <Route path="/admin-dash/pending" element={<PendingApplications />}  />
            <Route path="/admin-dash/applications/:appnID" element={<ApplicantDetails/>}/>
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/skeleton" element={<SkeletonLoading />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
