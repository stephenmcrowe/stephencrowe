/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { Component } from 'react';

import svgs from '../img';
import content from '../assets/content.json';
import '../styles/footer.scss';


class Footer extends Component {
  renderLogos = () => {
    return content.footer.map((ele) => {
      const Icon = svgs[ele.logo];
      return <a href={ele.link} key={ele.link}><Icon /></a>;
    });
  };

  render() {
    return (
      <footer id="footer">
        <div id="icons-container">
          {this.renderLogos()}
          {/* <Github className="svg" /> */}
        </div>
        <div id="contact-container">
          &#169; 2020 Stephen Crowe | crowe.stephen.m@gmail.com
        </div>
        <div id="icon-sources-container">
          {'Icons made by '}
          <a href="http://www.freepik.com/" title="Freepik">Freepik</a>
          {' from '}
          <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
