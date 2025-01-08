import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';
import logo from '../assets/Logo.png';
import illustration from '../assets/illustration-image.png';

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z" fill="#4285F4"/>
    <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z" fill="#34A853"/>
    <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
    <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.4921 3.29117 17.2155 7.59375 17.8907V11.6016H5.30859V9H7.59375V7.01719C7.59375 4.76156 8.93754 3.51562 10.9932 3.51562C11.9776 3.51562 13.0078 3.69141 13.0078 3.69141V5.90625H11.8729C10.7549 5.90625 10.4062 6.60006 10.4062 7.3125V9H12.9023L12.5033 11.6016H10.4062V17.8907C14.7088 17.2155 18 13.4921 18 9Z" fill="#1877F2"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.6667 3.33334H3.33334C2.41667 3.33334 1.67501 4.08334 1.67501 5L1.66667 15C1.66667 15.9167 2.41667 16.6667 3.33334 16.6667H16.6667C17.5833 16.6667 18.3333 15.9167 18.3333 15V5C18.3333 4.08334 17.5833 3.33334 16.6667 3.33334ZM16.6667 15H3.33334V6.66667L10 10.8333L16.6667 6.66667V15ZM10 9.16667L3.33334 5H16.6667L10 9.16667Z" fill="currentColor"/>
  </svg>
);

const PasswordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6.66666H14.1667V5C14.1667 2.70001 12.3 0.833344 10 0.833344C7.70001 0.833344 5.83334 2.70001 5.83334 5V6.66666H5.00001C4.08334 6.66666 3.33334 7.41666 3.33334 8.33333V16.6667C3.33334 17.5833 4.08334 18.3333 5.00001 18.3333H15C15.9167 18.3333 16.6667 17.5833 16.6667 16.6667V8.33333C16.6667 7.41666 15.9167 6.66666 15 6.66666ZM10 14.1667C9.08334 14.1667 8.33334 13.4167 8.33334 12.5C8.33334 11.5833 9.08334 10.8333 10 10.8333C10.9167 10.8333 11.6667 11.5833 11.6667 12.5C11.6667 13.4167 10.9167 14.1667 10 14.1667ZM7.50001 6.66666V5C7.50001 3.61666 8.61668 2.5 10 2.5C11.3833 2.5 12.5 3.61666 12.5 5V6.66666H7.50001Z" fill="currentColor"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4.16666C3.33334 4.16666 1.66667 10 1.66667 10C1.66667 10 3.33334 15.8333 10 15.8333C16.6667 15.8333 18.3333 10 18.3333 10C18.3333 10 16.6667 4.16666 10 4.16666ZM10 13.3333C8.16667 13.3333 6.66667 11.8333 6.66667 10C6.66667 8.16666 8.16667 6.66666 10 6.66666C11.8333 6.66666 13.3333 8.16666 13.3333 10C13.3333 11.8333 11.8333 13.3333 10 13.3333ZM10 8.33333C9.08334 8.33333 8.33334 9.08333 8.33334 10C8.33334 10.9167 9.08334 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10C11.6667 9.08333 10.9167 8.33333 10 8.33333Z" fill="currentColor"/>
  </svg>
);

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Check if both fields are filled
    const isFormValid = email.trim() !== '' && password.trim() !== '';

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'https://elysiantestbackpy-bcegckecarbvawh4.israelcentral-01.azurewebsites.net/api/login',
                { email, password }
            );
            
            // If login is successful, call Node endpoint
            if (response.status === 200) {
                try {
                    const nodeResponse = await axios.post(
                        'https://elysiannodeservertest-caajgchqdngsb7bw.israelcentral-01.azurewebsites.net/getRandomMessage'
                    );
                    console.log('Random welcome message:', nodeResponse.data.message);
                    
                    // Show welcome message
                    alert(nodeResponse.data.message);
                    
                } catch (nodeError) {
                    console.error('Error getting welcome message:', nodeError);
                    alert('Could not fetch welcome message');
                }
            }
        } catch (error) {
            console.error('Login error:', error);
            alert(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="login-container">
            <div className="form-background">
                
                {/* Left Side - Illustration Panel */}
                <div className="illustration-panel">
                    <img src={logo} alt="Logo" className="logo" />
                    <div className="illustration-content">
                        <img src={illustration} alt="Illustration" className="illustration" />
                        <h1 className="welcome-title">Welcome aboard my friend</h1>
                        <p className="welcome-subtitle">Just a couple of clicks and we start</p>
                    </div>
                </div>

                {/* Right Side - Form Panel */}
                <div className="form-panel">
                    <div className="form-content">
                        <h2 className="login-title">Log in</h2>
                        <div className="input-group">
                            <div className="input-wrapper">
                                <span className="input-icon-left">
                                    <EmailIcon />
                                </span>
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="input-field"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="input-wrapper">
                                <span className="input-icon-left">
                                    <PasswordIcon />
                                </span>
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Password" 
                                    className="input-field"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span 
                                    className="input-icon-right" 
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <EyeIcon />
                                </span>
                            </div>
                            <div className="forgot-password">Forgot password?</div>
                        </div>
                        <button 
                            className="login-btn" 
                            disabled={!isFormValid}
                            onClick={handleLogin}
                        >
                            Log in
                        </button>
                        
                        <div className="divider">
                            <span className="line"></span>
                            <span className="or">Or</span>
                            <span className="line"></span>
                        </div>
                        
                        <div className="social-login">
                            <button className="social-btn google">
                                <GoogleIcon />
                                Google
                            </button>
                            <button className="social-btn facebook">
                                <FacebookIcon />
                                Facebook
                            </button>
                        </div>
                        
                        <div className="signup-prompt">
                            <span> Have no account yet?</span>
                            <button className="signup-link">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
