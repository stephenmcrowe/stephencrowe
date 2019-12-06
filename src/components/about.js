import React, { Component } from 'react';
import content from '../assets/content.json';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import profile from '../img/eiffeltower_selfie.png';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(content);
  }

  renderContent = () => {
    return content.about.map((ele) => {
      return (
        <div key={ele.key} className="aboutParagraph">
          {ele.content}
        </div>
      );
    });
  }

  render() {
    return (
      <div id="about" className="aboutpage">
        <div className="aboutHeader">
          <div>About</div>
        </div>
        <div className="aboutContent">
          <div className="profile">
            <img src={profile} alt="Profile" />
          </div>
          <div className="information">
            {this.renderContent()}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
