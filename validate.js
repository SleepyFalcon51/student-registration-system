'use strict';

function validateForm() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // Add more validation checks for other form fields here 
    
    return true;
}

document.getElementById('myForm').onsubmit = validateForm;