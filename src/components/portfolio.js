/* eslint-disable react/no-danger */
import React, { Component } from 'react';

import svgs from '../img';
import content from '../assets/content.json';
import '../styles/portfolio.scss';


class Portfolio extends Component {
  renderPortfolio = () => {
    return content.portfolio.map((data) => {
      const Icon = svgs[data.logo];
      const markup = { __html: data.content };
      return (
        <div key={data.key} className="card">
          <div className="cardLogo">
            <Icon />
          </div>
          <div className="cardBody" dangerouslySetInnerHTML={markup} />
        </div>
      );
    });
  }

  render() {
    return (
      <section id="portfolio">
        <div className="title">
          <div>Portfolio</div>
        </div>
        <div className="portfolioContainer">
          {this.renderPortfolio()}
        </div>
      </section>
    );
  }
}

export default Portfolio;
