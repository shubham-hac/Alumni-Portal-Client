import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";


import AnimatedRoutes from './AnimatedRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
