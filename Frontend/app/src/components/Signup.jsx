import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    
    const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
    }

    try {
        const res=await fetch("http://localhost:5001/users/signup",{
            method:"POST",
            headers: {
                "Content-Type": "application/json", 
              },
              body: JSON.stringify(userInfo),
        })
        const result=await res.json()
        if(res.ok){
            alert("Signup Succesfull")
            navigate('/'); 
        }
        else{
            alert(`Error ${result.message}`)
        }
    } catch (error) {
        alert(error.message)
    }
    
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input 
            type="text" 
            id="fullname" 
            placeholder="Enter your full name" 
            {...register('fullname', { 
              required: 'Full name is required',
              minLength: {
                value: 3,
                message: 'Full name must be at least 3 characters'
              }
            })} 
          />
          {errors.fullname && <span className="error-message">{errors.fullname.message}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="text" 
            id="email" 
            placeholder="Enter your email" 
            {...register('email', { 
              required: 'Email is required', 
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Enter a valid email address'
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
                message: 'Password must be at least 6 characters'
              }
            })} 
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>
        
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}



export default Signup;



