// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
// import Signup from './components/Signup';
import Welcome from './components/Welcome';
// import Facilities from './components/Facilities';
// import RoomBooking from './components/RoomBooking';
import Payment from './components/Payment';
import BookingPage from './components/Bookings';
import Signup from './components/Signup';
// import BookingConfirmation from './components/BookingConfirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/bookings" element={<BookingPage />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/facilities" element={<Facilities />} /> */}
        {/* <Route path="/room-booking" element={<RoomBooking />} /> */}
        <Route path="/payment" element={<Payment />} />
        {/* <Route path="/confirmation" element={<BookingConfirmation />} /> */}
      </Routes>
    </Router>
  );
}

export default App;