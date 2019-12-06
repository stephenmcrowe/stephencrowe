import React from 'react';
// import Counter from '../containers/counter';
// import Controls from '../containers/controls';
import About from './about';
import Navbar from './navbar';
import Home from './home';
import '../styles/style.scss';

const App = (props) => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default App;
// ReactDOM.render(<App />, document.getElementById('main'));
