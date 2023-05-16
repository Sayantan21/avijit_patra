import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import './footer.css';

const Footer = () => {

  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <a href="#home" className="footer__logo">Avijit Patra</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#certification">Certification</a></li>
        <li><a href="#workandproject">Work & Project</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/avijit-patra-15143a200/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://github.com/avijit18" target="_blank" rel="noreferrer" ><FaGithub /></a>
        <a href="https://www.instagram.com/__rik07__/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Avijit.patrA {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
