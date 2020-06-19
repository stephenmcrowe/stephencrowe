import React from 'react';

import About from './about';
import Experience from './experience';
import Footer from './footer';
import Home from './home';
import Navbar from './navbar';
import Portfolio from './portfolio';
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
