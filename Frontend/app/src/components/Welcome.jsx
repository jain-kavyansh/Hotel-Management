import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';
import hotel from './hotel.jpg';

const WelcomePage = () => {
  const navigate = useNavigate();
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

  const redirect = () => {
    navigate("/bookings"); 
  };

  return (
    <div className="welcome-page">
      <header className="header">
        <h1>Hotel Management</h1>
        <p>Welcome {username}</p> {/* Display the username */}
        <p>Enjoy Your Stay!</p>
      </header>

      <section className="rooms-section">
        <div className="rooms-icon">
          <img src={hotel} alt="Rooms" />
          <p>Rooms</p>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product luxury-suite">
          <h3>Luxury Suite</h3>
          <p>$200 per night</p>
          <div className="icons">🍽️ 🍷</div>
        </div>
        <div className="product exquisite-dining">
          <h3>Exquisite Dining</h3>
          <p>Experience gourmet delights</p>
          <div className="icons">🍽️ 🍷</div>
        </div>
      </section>

      <section className="guest-reviews">
        <h2>Guest Reviews</h2>
        <div className="review">
          <h4>Happy Guest</h4>
          <p>Wonderful experience with excellent service</p>
          <span>★★★★★</span>
        </div>
        <div className="review">
          <h4>Satisfied Customer</h4>
          <p>Great value for money, will visit again</p>
          <span>★★★★★</span>
        </div>
      </section>

      <section className="social-posts">
        <h2>Latest Social Posts</h2>
        <div className="post">
          <p>Exploring the city</p>
          <p>Feeling enchanted by the charm of Paris</p>
          <p>Traveler123</p>
        </div>
        <div className="post">
          <p>Delicious food</p>
          <p>Indulging in the flavors of the Big Apple</p>
          <p>FoodieFan</p>
        </div>
      </section>
      <div>
        <button className='next-button' onClick={redirect}>Next</button>
      </div>
    </div>
  );
};

export default WelcomePage;