/* eslint-disable max-len */
import React, { Component } from 'react';
import content from '../assets/content.json';
import '../styles/experience.scss';


class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderCards = () => {
    return content.experience.map((data) => {
      return (
        <div key={data.key} className={`${data.style} card`}>
          <div className="cardHeader">
            <div className="cardLogo">
              <img src={data.logo} alt="" />
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
