
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

import Welcome from './components/Welcome';

import Payment from './components/Payment';
import BookingPage from './components/Bookings';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bookings" element={<BookingPage />} />

        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
 
        <Route path="/payment" element={<Payment />} />

      </Routes>
    </Router>
  );
}

export default App;