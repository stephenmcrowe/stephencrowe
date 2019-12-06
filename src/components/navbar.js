import React, { Component } from 'react';
import { Link } from 'react-scroll';
// import { animateScroll as scroll } from 'react-scroll';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <nav>
        <div className="navHome">
          <Link to="home" className="navLink">Stephen Crowe</Link>
        </div>
        <div className="navLinkContainer">
          <Link to="about" className="navLink">About</Link>
          <Link to="experience" className="navLink">Experience</Link>
          <Link to="portfolio" className="navLink">Portfolio</Link>
          <Link to="contact" className="navLink">Contact</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
