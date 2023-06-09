import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/avijit_patra_image.jpeg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Certificate</h5>
              <small>30+ Completed Certificate</small>
            </article>
          </div>
          <p>I am a dedicated software engineer with 2 years of experience, currently employed at Mindtree in the ServiceNow Cloud Domain. Holding a Certified System Administrator (CSA) certification and micro-certificates in ServiceNow, I excel in ITSM, ITIL, ServiceNow System Administration, and ServiceNow Developer roles. Proficient in web technologies like HTML, CSS, Javascript, and NodeJS, I have successfully delivered website projects as a freelancer. Continuously expanding my skill set, I am also venturing into Android development, gaining practical experience through training and personal projects.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro