import React from 'react';
import IMG1 from '../../assets/pg.png';
import IMG2 from '../../assets/urbanecosystem.png';
import IMG3 from '../../assets/puroheet.png';
import IMG4 from '../../assets/age_calculator.png';
import IMG5 from '../../assets/weather_app.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'PG-Life',
      img: IMG1,
      description:
        `As a personal project, I created the website "PG-life" focused on Paying Guest
        rooms for students across Indian cities. Developed using HTML, CSS, and
        JavaScript, the website aimed to provide a convenient platform for students to find
        suitable accommodations
        `,
      technologies: 'Bootstrap | CSS | Javascript',
      link: 'https://pgglige.netlify.app/',
    },
    {
      id: 2,
      title: 'UrbanEcoSystem',
      img: IMG2,
      description:
        `As a freelance project, I developed the plant-based e-commerce website
        "UrbanEcosystem," aiming to bring nature closer to urban India. It offers a wide
        range of unique solutions, including plants, pots, and aquariums, to create green
        ecosystems within urban spaces, catering to the needs of individuals seeking a
        nature-centric lifestyle.`,
      technologies: 'Bootstrap | CSS | Javascript',
      link: 'https://urbanecosystem.in/',
    },
    {
      id: 3,
      title: 'Puroheet Website',
      img: IMG3,
      description: `As a freelancer, I created a website called Puroheet, offering online Hindu pujas
      and havans services. The platform allows users to book qualified and experienced
      pandits for various rituals, providing puja samagri and ensuring a satisfying and
      divine puja experience.`,
      technologies: 'JavaScript | React Js | CSS',
      link: 'https://banglapuroheet.netlify.app/',
    },
    {
      id: 4,
      title: 'Age Calculator',
      img: IMG4,
      description:
        `As a personal project, I developed an Age Calculator website using JavaScript. It
        enables users to input their date of birth and accurately calculate their age`,
      technologies: 'JavaScript | CSS | HTML',
      link: 'https://agecalculatorbyrik.netlify.app/',
    },
    {
      id: 5,
      title: 'Weather App',
      img: IMG5,
      description:
        `As a personal project, I developed a Weather App to accurately measure
        temperature in any city. It provides current weather information, including
        conditions, temperature, humidity, wind speed, and also visualizes daily
        temperature and humidity changes.
        `,
      technologies: 'JavaScript | CSS | HTML',
      link: 'https://weatherappbyrik.netlify.app/',
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Work & Projects</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              {/* <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a> */}
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
