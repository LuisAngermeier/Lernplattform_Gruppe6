import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faReddit, faTelegram, faSnapchat, faGoogle, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/App.css';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024, LernApp. All rights reserved.</p>
      <div className="social-icons">
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/LuisAngermeier/Lernplattform_Gruppe6" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faReddit} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faSnapchat} />
        </a>
        <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
