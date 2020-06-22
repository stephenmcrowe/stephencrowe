/* React imports */
import React, { Component } from 'react';

/* custom imports */
import svgs from '../img';
import content from '../assets/content.json';
import '../styles/experience.scss';

class Experience extends Component {
  renderCards = () => {
    return content.experience.map((data) => {
      const Icon = svgs[data.logo];
      return (
        <div key={data.key} className={`${data.style} card`}>
          <div className="cardHeader">
            <div className="cardLogo">
              <Icon />
            </div>
            <h2 className="cardTitle">
              <span className="cardDate">{data.date}</span>
              {data.title}
            </h2>
          </div>
          <div className="cardBody">
            {data.content}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section id="experience">
        <div className="title">
          <div>What I&apos;ve been up to</div>
        </div>
        <div className="cardContainer">
          {this.renderCards()}
        </div>
      </section>
    );
  }
}

export default Experience;
