import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <p>
            I'm always open to new opportunities and collaborations. Feel free to reach out to me if you have any questions or would like to connect!
          </p>
          <ul className="contact-links">
            <li>
              <a href="mailto:your.email@example.com">
                <i className="fas fa-envelope"></i> Email
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yourprofile/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            {/* Add other contact links here (e.g., GitHub, Twitter) */}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;