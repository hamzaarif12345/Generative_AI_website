import React from 'react';
import people from '../../assets/people.png';
import possibilityImage from '../../assets/possibility.png';
import ai from '../../assets/ai.png';
import Hamza from '../../assets/Hamza.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Generative AI</h1>
      <p>Unleash the Creative Power: Experience the Magic of Generative AI, where algorithms come alive to create infinite possibilities of art, music, and imagination.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={possibilityImage} />
    </div>
  </div>
);

export default Header;
