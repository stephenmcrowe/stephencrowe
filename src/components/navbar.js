/* React imports */
import React, { Component } from 'react';

/* third-party imports */
import { Link } from 'react-scroll';
// import { animateScroll as scroll } from 'react-scroll';

/* custom imports */
import '../styles/navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navStyle: 'navTop',
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const navStyleNew = window.scrollY < 600 ? 'navTop' : 'nav';
      const { navStyle } = this.state;
      if (navStyle !== navStyleNew) {
        this.setState({ navStyle: navStyleNew });
      }
    });
  }

  render() {
    const { navStyle } = this.state;
    return (
      <nav className={navStyle}>
        <div className="navHome">
          <Link to="home" smooth className="navLink">Stephen Crowe</Link>
        </div>
        <div className="navLinkContainer">
          <Link to="about" smooth offset={-63} className="navLink">About</Link>
          <Link to="experience"
            smooth
            offset={-63}
            className="navLink"
          >
            Experience
          </Link>
          <Link
            to="portfolio"
            smooth
            offset={-63}
            className="navLink"
          >
            Portfolio
          </Link>
          {/* <Link to="contact" smooth className="navLink">Contact</Link> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;
