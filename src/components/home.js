/* React imports */
import React from 'react';

/* third-party imports */
import Particles from 'react-particles-js';

/* custom imports */
import '../styles/home.scss';

const particlesOpt = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 700,
      },
    },
    color: {
      value: '#FFFFFF', // '#00693e',
    },
    shape: {
      type: 'circle',
    },
    opacity: {
      value: 0.3,
    },
    size: {
      value: 5,
      random: true,
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#FFFFFF', // '#00693e',
      opacity: 0.3,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onclick: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  retina_detect: true,
};

const Home = (props) => {
  return (
    <div id="home" className="homeContainer">
      <div className="homeContent">
        <div className="name">Stephen Crowe</div>
        <div className="name">{'Dartmouth \'20'}</div>
      </div>
      <Particles params={particlesOpt} className="particles" />
    </div>
  );
};

export default Home;
