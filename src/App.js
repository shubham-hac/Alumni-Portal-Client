import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Events from './pages/Events/Events';
import EventDetails from './pages/EventDetails/EventDetails';
import Jobs from './pages/Jobs/Jobs';
import AlumniDirectory from './pages/AlumniDirectory/AlumniDirectory';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/events" element={<Events />} />
            <Route path="/eventdetails" element={<EventDetails />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/alumnis" element={<AlumniDirectory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
