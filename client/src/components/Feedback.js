// src/components/FeedbackForm.js
import React, { useState } from 'react';
import Modal from './Modal';

const FeedbackForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage('Thank you for your feedback!');
        console.log('Success:', data);
      } else {
        setResponseMessage('Failed to send feedback. Please try again.');
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
      console.error('Error:', error);
    }

    setFormData({ name: '', email: '', message: '' });
    setShowModal(false);
  };

  return (
    <div>
      <button className="btn btn-secondary btn-center btn-feedback btn-lg" onClick={() => setShowModal(true)}>
        Give Feedback
      </button>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <h2>Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              className="form-control" 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </Modal>
    </div>
  );
};

export default FeedbackForm;
