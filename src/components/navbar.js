/* React imports */
import React, { Component } from 'react';

/* third-party imports */
import { Link } from 'react-scroll';

/* custom imports */
import hamburger from '../img/hamburger.svg';
import closeIcon from '../img/close.svg';
import '../styles/navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerOpen: false,
      navStyle: 'navTop',
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const navStyleNew = window.scrollY < 500 ? 'navTop' : 'nav';
      const { navStyle } = this.state;
      if (navStyle !== navStyleNew) {
        this.setState({ navStyle: navStyleNew });
      }
    });
  }

  toggleHamburger = (event) => {
    const { hamburgerOpen } = this.state;
    this.setState({ hamburgerOpen: !hamburgerOpen });
  }

  render() {
    const { hamburgerOpen, navStyle } = this.state;
    return (
      <nav className={navStyle}>
        <div className="navHome">
          <Link to="home" smooth className="navLink">Stephen Crowe</Link>
          <button
            type="button"
            aria-label="Menu"
            id="hamburger"
            onClick={this.toggleHamburger}
          >
            <img src={hamburgerOpen ? closeIcon : hamburger} alt="" />
          </button>
        </div>
        <div className={hamburgerOpen ? 'navLinkContainer'
          : 'navLinkContainer hide'}
        >
          <Link to="about"
            smooth
            offset={-63}
            className="navLink"
            onClick={this.toggleHamburger}
          >
            About
          </Link>
          <Link to="experience"
            smooth
            offset={-63}
            className="navLink"
            onClick={this.toggleHamburger}
          >
            Experience
          </Link>
          <Link
            to="portfolio"
            smooth
            offset={-63}
            className="navLink"
            onClick={this.toggleHamburger}
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
