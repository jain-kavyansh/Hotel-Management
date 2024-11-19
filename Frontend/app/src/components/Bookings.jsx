import React, { useEffect, useState } from 'react';
import './Booking.css';
import { useNavigate } from 'react-router-dom';
import room1 from './room1.webp';
import room2 from './room2.webp';

const BookingPage = () => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  const [username, setUsername] = useState('Guest'); 

  useEffect(() => {

    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      setUsername(parsedUser.user?.fullname || 'Guest'); 
    } else {
      console.error("User data not found in localStorage");
    }
  }, []);

  const handleGuestSelect = (num) => {
    setGuests(num);
  };

  const redirect = () => {
    if (!checkInDate || !checkOutDate) {
      alert('Please enter both check-in and check-out dates before proceeding.');
      return;
    }
    navigate('/payment');
  };

  return (
    <div className="booking-page">
      <h1>Welcome {username}</h1>
      <p>Book your stay with us!</p>

      <div className="date-picker">
        <label>Check-in Date</label>
        <input 
          type="date" 
          value={checkInDate} 
          onChange={(e) => setCheckInDate(e.target.value)} 
          placeholder="Select Date"
        />
        <small>Please select your arrival date</small>
      </div>

      <div className="date-picker">
        <label>Check-out Date</label>
        <input 
          type="date" 
          value={checkOutDate} 
          onChange={(e) => setCheckOutDate(e.target.value)} 
          placeholder="Select Date"
        />
        <small>Please select your departure date</small>
      </div>

      <div className="guest-selector">
        <label>Number of Guests</label>
        <div className="guest-buttons">
          {[1, 2, 3, 4].map((num) => (
            <button 
              key={num} 
              className={guests === num ? 'active' : ''} 
              onClick={() => handleGuestSelect(num)}
            >
              {num} Guest{num > 1 ? 's' : ''}
            </button>
          ))}
        </div>
        <small>Select the number of guests</small>
      </div>

      <div className="available-rooms">
        <h2>Available Rooms</h2>
        <div className="room">
          <span className="room-tag">Free Wi-Fi</span>
          <div className="room-image"><img src={room1} alt="" /></div>
          <div className="room-info">
            <h3>Deluxe Suite</h3>
            <p>From $200/night</p>
          </div>
        </div>
        <div className="room">
          <span className="room-tag">Breakfast Included</span>
          <div className="room-image"><img src={room2} alt="" /></div>
          <div className="room-info">
            <h3>Executive Room</h3>
            <p>From $150/night</p>
          </div>
        </div>
      </div>

      <div className="actions">
        <button onClick={redirect} className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default BookingPage;