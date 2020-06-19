/* eslint-disable max-len */
import React, { Component } from 'react';
import content from '../assets/content.json';
import '../styles/portfolio.scss';


class Portfolio extends Component {
  renderPortfolio = () => {
    return content.portfolio.map((data) => {
      return (
        <div key={data.key} className="card">
          <div className="cardLogo">
            <img src={data.logo} alt="" />
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
