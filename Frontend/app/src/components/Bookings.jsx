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
      console.error('User data not found in localStorage');
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

      
      <div className="amenities">
        <h2>Our Facilities</h2>
        <div className="facility">
          <span className="facility-icon">🏊</span>
          <p>Swimming Pool</p>
        </div>
        <div className="facility">
          <span className="facility-icon">💪</span>
          <p>Fitness Center</p>
        </div>
        <div className="facility">
          <span className="facility-icon">🍽️</span>
          <p>Restaurant & Bar</p>
        </div>
        <div className="facility">
          <span className="facility-icon">🧖</span>
          <p>Spa & Wellness</p>
        </div>
        <div className="facility">
          <span className="facility-icon">🌳</span>
          <p>Beautiful Gardens</p>
        </div>
      </div>


      <div className="packages">
        <h2>Special Packages</h2>
        <div className="package">
          <h3>Weekend Getaway</h3>
          <p>Enjoy a relaxing weekend with discounted rates. Includes breakfast for 2!</p>
          <button onClick={() => alert('Package selected: Weekend Getaway')}>Select</button>
        </div>
        <div className="package">
          <h3>Romantic Escape</h3>
          <p>Get away with your loved one. Includes a couples spa and candlelight dinner!</p>
          <button onClick={() => alert('Package selected: Romantic Escape')}>Select</button>
        </div>
        <div className="package">
          <h3>Family Fun</h3>
          <p>Special rates for families. Includes free kids’ activities and meals!</p>
          <button onClick={() => alert('Package selected: Family Fun')}>Select</button>
        </div>
      </div>

      <div className="actions">
        <button onClick={redirect} className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default BookingPage;
