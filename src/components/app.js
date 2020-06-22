/* React imports */
import React from 'react';

/* custom imports */
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Experience from './experience';
import Portfolio from './portfolio';
import Footer from './footer';
import '../styles/stylesheet.scss';

const App = (props) => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
