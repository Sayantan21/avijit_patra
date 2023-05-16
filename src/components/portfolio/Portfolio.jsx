import React from 'react';
import IMG1 from '../../assets/Certificate/mindtree.png';
import IMG2 from '../../assets/Certificate/upgrad.png';
import IMG3 from '../../assets/Certificate/certificate-Become-A-Certified-Web-Developer-From-Scratch.jpg';
// import IMG4 from '../../assets/Certificate';
import IMG5 from '../../assets/Certificate/tcs_ion.png';
import IMG6 from '../../assets/Certificate/internshala.png';
import IMG7 from '../../assets/Certificate/sap.png';
import IMG8 from '../../assets/Certificate/service_now.png';
import IMG9 from '../../assets/Certificate/micro_service.png';

import certificate1 from '../../assets/Certificate/Avijit_Patra_SAP_Certificate.pdf'
import certificate2 from '../../assets/Certificate/Avijit_TCS_all_in_one.pdf'
import certificate3 from '../../assets/Certificate/ServiceNowCSA.pdf'
import certificate4 from '../../assets/Certificate/micro_certificate_virtual_agent.pdf'
import certificate5 from '../../assets/Certificate/upGrad_Javascript.pdf'
import certificate6 from '../../assets/Certificate/Web Development Training - Certificate of Completion (1).pdf'
import certificate7 from '../../assets/Certificate/Certificate_secure_innovation.pdf'
import certificate8 from '../../assets/Certificate/codedamn-internet_things-certificates.pdf'

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'ServiceNow System Administrator(CSA)',
      img: IMG8,
      description:
        'BookStore app that allows users to store books and update progress',
      technologies: 'React | Redux | Ruby on Rails',
      link: certificate3,
      github: 'https://github.com/Meri-MG/bookstore---react',
    },
    {
      id: 2,
      title: 'Micro Certificate on Virtual Agent (ServiceNow)',
      img: IMG9,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | Redux',
      link: certificate4,
      github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 3,
      title: 'Data Structure & Algorithm (Upgrad)',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | Webpack',
      link: certificate5,
      github: 'https://github.com/Meri-MG/To-Do-List',
    },
    {
      id: 4,
      title: 'Digital India for AI (Intel)',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design',
      technologies: 'JavaScript | CSS',
      link: certificate8,
      github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: 'TCS iON Career Edge-Young Professional (TCS iON)',
      img: IMG5,
      description:
        'Fully responsive interactive website built based on Adobe XD design',
      technologies: 'JavaScript | CSS',
      link: certificate2,
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'SAP (Techno India University)',
      img: IMG7,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: certificate1,
      github: 'https://github.com/lukinoo/math-resource',
    },
    {
      id: 7,
      title: 'Web Development (Internshala)',
      img: IMG6,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: certificate6,
      github: 'https://github.com/lukinoo/math-resource',
    },
    {
      id: 8,
      title: 'Mindtree - Secure Delivery for Infrastructure Security Learning Path (2022)',
      img: IMG1,
      description:
        'Real-world group project which is still in progress and will provide educational platform for future young developers',
      technologies: 'JavaScript | Scss | Python',
      link: certificate7,
      github: 'https://github.com/lukinoo/math-resource',
    },
  ];

  return (
    <section id="portfolio2">
      <h5>My Certification</h5>
      <h2>Certificate</h2>

      <div className="container portfolio__container2">
        {soloProjects.map((pro) => (
          <article className="portfolio__item2" key={pro.id}>
            <div className="portfolio__item-image2">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
             <a href={pro.link} target='_blank'> <h3>{pro.title}</h3></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
