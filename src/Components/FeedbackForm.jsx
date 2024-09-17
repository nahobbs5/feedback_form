import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    //Data initialzied with empty strings
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
    });
    //update form data as users input info
    const handleChange = (event) => {
        //extract name and value of input field from event object
        //target property refers to DOM element that triggered event
        const {name, value} = event.target;
        //update form data state using setFormData function and
        //spread operator (the "..."" one) to copy one array into another
        setFormData({
                ...formData,
                [name]: value

         });
     };
    const handleSubmit = (event) => {
        event.preventDefaut();
        //Capture user details
        //this  "${}" syntax is used to embed the value of a string (ES6 feature)
        const confirmationMessage = `
            Name: ${formData.name}
            Email: ${formData.email}
            Feedback: ${formData.feedback}
            `;
        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
        if (isConfirmed) {
            console.log('Submitting feedback:', formData);
            setFormData({
                name: '',
                email: '',
                feedback: ''
            });
            alert('Thank you for your valuable feedback');
        }
    };
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
            type='text'
            name='name'
            placeholder='Your name'
            value={formData.name}
            onChange={handleChange}/>
        <input 
            type='email'
            name='email'
            placeholder='Your Email'
            value={formData.email}
            onChange={handleChange}/>
        <textarea
            name='feedback'
            placeholder='Your Feedback'
            value={formData.feedback}
            onChange={handleChange}
        ></textarea>
        <button type='submit'>Submit Feedback</button>

        
      </form>
    </>
  );
};

export default FeedbackForm;
