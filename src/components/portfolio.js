/* eslint-disable react/no-danger */
/* React imports */
import React, { Component } from 'react';

/* third-party imports */
import ReactMarkdown from 'react-markdown';

/* custom imports */
import svgs from '../img';
import content from '../assets/content.json';
import '../styles/portfolio.scss';


class Portfolio extends Component {
  renderPortfolio = () => {
    return content.portfolio.map((data) => {
      const Icon = svgs[data.logo];
      return (
        <div key={data.key} className="card">
          <div className="cardLogo">
            <Icon />
          </div>
          <ReactMarkdown source={data.content} />
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
