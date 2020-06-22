/* React imports */
import React, { Component } from 'react';

/* custom imports */
import content from '../assets/content.json';
import profile from '../img/eiffeltower_selfie.png';
import '../styles/about.scss';

class About extends Component {
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
