import { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        'service_yourServiceID',
        'template_yourTemplateID',
        formData,
        'user_yourUserID'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setStatus('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error);
          setStatus('Oops! Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Leave a Reply</h2>
        <p className="contact-subtitle">
          Your email address will not be published. Required fields are marked *
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Write Comments"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit Comment
          </button>
        </form>

        <p className="contact-note">Feel free to contact me anytime</p>

        <div className="contact-cards">
          <div className="card">
            <h3>Email</h3>
            <p>
              <a href="mailto:ishali8055@gmail.com">ishali8055@gmail.com</a>
            </p>
          </div>
          <div className="card">
            <h3>Phone</h3>
            <p>81262 51215</p>
          </div>
          <div className="card">
            <h3>Address</h3>
            <p>Delhi</p>
          </div>
        </div>

        {status && <p className="status-message">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
