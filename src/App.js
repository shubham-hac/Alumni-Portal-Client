import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {useContext, useState, useEffect,} from 'react'

import AnimatedRoutes from './AnimatedRoutes';
import ScrollToTop from './utils/ScrollToTop';
import { AuthContext } from './context/AuthContext';
import { loginCall } from './apiCalls';

function App() {
  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  useEffect(async () => {
    // console.log(localStorage.getItem('login'));
      if(localStorage.getItem('login') === 'true'){
        await loginCall({email: localStorage.getItem('user_email'), password: localStorage.getItem('user_passwd')}, dispatch);
      }
  }, [])
  
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
