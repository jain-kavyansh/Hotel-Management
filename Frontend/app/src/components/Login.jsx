
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
  
    try {
      const res = await fetch("http://localhost:5001/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
  
      const result = await res.json();
      console.log(result);  
  
      if (res.ok) {
        
        if (result && result.user) {
          localStorage.setItem("user", JSON.stringify(result.user)); 
          alert("Login Successful");
          navigate('/welcome');
        } else {
          setErrorMessage("User information not found in response.");
        }
      } else {
        setErrorMessage(result.message || "Error during login");
      }
    } catch (error) {
      setErrorMessage("Error during login");
    }
  };
  
  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h2>Hotel Management System</h2>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            id="email" 
            placeholder="Enter your Email" 
            {...register('email', { 
              required: 'Email is required', 
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address',
              }
            })} 
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password" 
            {...register('password', { 
              required: 'Password is required', 
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              }
            })} 
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>
        
        <button type="submit" className="login-button">Login</button>
      </form>
      
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p className="signup-text">Don’t have an account?</p>
      <button onClick={handleSignup} className="signin-button">Sign Up</button>
    </div>
  );
}

export default Login;
