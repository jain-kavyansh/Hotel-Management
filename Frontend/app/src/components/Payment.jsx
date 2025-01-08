import React, { useState } from 'react';
import './Payment.css';
import room3 from "./room3.jpg";
import room4 from "./room4.jpg";
import room1 from "./room1.webp";  
import room2 from "./room2.webp";

const PaymentPage = () => {

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');

  const roomOptions = [
    { id: 1, name: 'Suite Package', price: 300, image: room3 },
    { id: 2, name: 'Standard Package', price: 150, image: room4 },
    { id: 3, name: 'Deluxe Package', price: 250, image: room1 },   
    { id: 4, name: 'Economy Package', price: 100, image: room2 },  
  ];

  const paymentalert = () => {
    if (!selectedRoom) {
      alert('Please select a room before proceeding with payment.');
      return;
    }
    if (!selectedPaymentOption) {
      alert('Please select a payment option before making the payment.');
      return;
    }

    alert(`Congratulations! Your booking for the ${selectedRoom.name} ($${selectedRoom.price}) is confirmed.`);
  };

  const handleRoomDelete = () => {
    setSelectedRoom(null);  
  };

  return (
    <div className="payment-page">
      <header>
        <h1>Payments</h1>
        <p>Choose a room and payment method</p>
      </header>

      <section className="room-selection">
        <h2>Select Room</h2>
        <div className="room-options">
          {roomOptions.map(room => (
            <label key={room.id} className={`room-option ${selectedRoom?.id === room.id ? 'selected' : ''}`}>
              <input
                type="radio"
                name="room"
                value={room.id}
                checked={selectedRoom?.id === room.id}
                onChange={() => setSelectedRoom(room)}
              />
              <div className="room-image">
                <img src={room.image} alt={room.name} />
              </div>
              <div className="room-info">
                <h3>{room.name}</h3>
                <p>${room.price}</p>
              </div>
            </label>
          ))}
        </div>
      </section>

     
      {selectedRoom && (
        <section className="selected-room">
          <h2>Selected Room</h2>
          <div className="selected-room-info">
            <img src={selectedRoom.image} alt={selectedRoom.name} />
            <div>
              <h3>{selectedRoom.name}</h3>
              <p>${selectedRoom.price}</p>
              <button className="delete-room-button" onClick={handleRoomDelete}>Delete Room</button>
            </div>
          </div>
        </section>
      )}

      
      {selectedRoom && (
        <section className="payment-plans">
          <h2>Payment Methods</h2>
          <div className="payment-options">
            <div
              className={`payment-option ${selectedPaymentOption === 'Credit Card' ? 'selected' : ''}`}
              onClick={() => setSelectedPaymentOption('Credit Card')}
            >
              <span>💳</span> Credit Card
            </div>
            <div
              className={`payment-option ${selectedPaymentOption === 'Mobile Payment' ? 'selected' : ''}`}
              onClick={() => setSelectedPaymentOption('Mobile Payment')}
            >
              <span>📱</span> Mobile Payment
            </div>
            <div
              className={`payment-option ${selectedPaymentOption === 'Cash' ? 'selected' : ''}`}
              onClick={() => setSelectedPaymentOption('Cash')}
            >
              <span>💵</span> Cash
            </div>
          </div>
        </section>
      )}

      
      <div className="actions">
        <button
          onClick={paymentalert}
          className="make-payment-button"
          disabled={!selectedRoom || !selectedPaymentOption}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;