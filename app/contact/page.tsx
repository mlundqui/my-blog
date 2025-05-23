'use client';

import { useState } from 'react';
import styles from './contact.module.css';
//import Navbar from 'app/components/Navbar';

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      // Check for non-OK responses
      if (!response.ok) {
        const errorResponse = await response.json(); // Parse error message
        throw new Error(errorResponse.error || 'Failed to submit the form');
      }
  
      // Parse the JSON response
      const result = await response.json();
      setSuccessMessage(result.message || 'Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset the form
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message); // Access the error message safely
      } else {
        console.error('An unexpected error occurred.');
      }
    }
  };

  return (
    
    <div className={styles.container}>
      
      
      <h1 className={styles.heading}>Contact Me</h1>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder="Name"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          placeholder="Email"
          className={styles.input}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          placeholder="Message"
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>

      <center><img
              src="/email.gif"
              alt="Service 1"
              style={{ width: '400px', maxWidth: '600px', height: 'auto', borderRadius: '8px' }}
            /></center>

      {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}