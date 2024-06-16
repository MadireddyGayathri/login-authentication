// script.js

import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase-config.js';

const loginContainer = document.getElementById('login-container');
const signupContainer = document.getElementById('signup-container');

const showLogin = document.getElementById('show-login');
const showSignup = document.getElementById('show-signup');

// Show login form and hide signup form
showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginContainer.style.display = 'block';
    signupContainer.style.display = 'none';
});

// Show signup form and hide login form
showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    signupContainer.style.display = 'block';
    loginContainer.style.display = 'none';
});

// Registration form handling
document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration successful!");
        // Optionally: Automatically log in after signup
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login after registration successful!");
    } catch (error) {
        document.getElementById('signup-error').textContent = error.message;
    }
});

// Login form handling
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
    } catch (error) {
        document.getElementById('login-error').textContent = error.message;
    }
});
