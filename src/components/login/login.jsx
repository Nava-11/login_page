import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import "./login.css";

const Login = () => {
    const [action, setAction] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const registerLink = () => setAction(" active");
    const loginLink = () => setAction("");

    // 🔥 Function to handle login with Firebase
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage("Login successful! Redirecting...");
            setTimeout(() => (window.location.href = "profile.html"), 1500); // Redirect after login
        } catch (error) {
            setMessage("Invalid email or password!");
        }
    };

    // 🔥 Function to handle registration with Firebase
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage("Registration successful! You can now log in.");
            setAction(""); // Switch to login view
        } catch (error) {
            setMessage("Error: " + error.message);
        }
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <MdEmail className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forget">
                        <label><input type="checkbox" /> Remember Me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                    {message && <p style={{ color: "red" }}>{message}</p>}
                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form onSubmit={handleRegister}>
                    <h1>Registration</h1>
                    <div className="input-box">
                    <input type="text" placeholder='UserName'required></input>
                    <FaUser className="icon"/>
                </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <MdEmail className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <FaLock className="icon" />
                    </div>
                    <div className="remember-forget">
                        <label><input type="checkbox" /> I agree to the terms and conditions</label>
                    </div>
                    <button type="submit">Register</button>
                    {message && <p style={{ color: "green" }}>{message}</p>}
                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
