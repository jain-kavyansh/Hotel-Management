import React, { useState } from 'react';
import './Payment.css';
import room3 from "./room3.jpg"
import room4 from "./room4.jpg"

const PaymentPage = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');

  const paymentalert = () => {
    if (!selectedPaymentOption) {
      alert('Please select a payment option before making the payment.');
      return;
    }
   alert("Congratulations Your booking is confirmed")
  };

  return (
    <div className="payment-page">
      <header>
        <h1>Payments</h1>
        <p>Payment Methods</p>
      </header>

      <section className="payment-plans">
        <h2>Featured Payment Plans</h2>
        <div className="plan">
          <span className="plan-tag">Best Seller</span>
          <div className="plan-image"><img src={room3}alt="" /></div>
          <div className="plan-info">
            <h3>Suite Package</h3>
            <p>$300</p>
          </div>
        </div>
        <div className="plan">
          <div className="plan-image"><img src={room4}alt="" /></div>
          <div className="plan-info">
            <h3>Standard Package</h3>
            <p>$150</p>
          </div>
        </div>
      </section>

      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <div className="review">
          <p><strong>Emily S.</strong> <span>★★★★★</span></p>
          <p>Great service and easy payment process</p>
        </div>
        <div className="review">
          <p><strong>James L.</strong> <span>★★★★★</span></p>
          <p>Convenient payment options provided</p>
        </div>
      </section>

      <section className="payment-options">
        <h2>Payment Options</h2>
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
      </section>

      <div className="actions">
        <button onClick={paymentalert} className="make-payment-button">Make Payment</button>
        {/* <button className="add-payment-method-button">Add Payment Method</button> */}
      </div>
    </div>
  );
};

export default PaymentPage;