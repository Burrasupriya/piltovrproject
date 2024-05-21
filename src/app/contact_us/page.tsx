import React from 'react';

export default function Contact() {
  return (
    <div style={{ backgroundColor: 'bisque', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      <p style={{ fontSize: '18px', textAlign: 'center' }}>
        We&apos;d love to hear from you! Feel free to reach out with any questions, comments, or concerns.
      </p>
      <div style={{ textAlign: 'center' }}>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Phone: +1 123-456-7890</p>
        <p>Email: info@example.com</p>
      </div>
      <form style={{ margin: '20px auto', maxWidth: '400px' }}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" style={{ width: '100%', marginBottom: '10px' }} /><br />
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" style={{ width: '100%', marginBottom: '10px' }} /><br />
        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" rows={4} style={{ width: '100%', marginBottom: '10px' }}></textarea><br />
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}
