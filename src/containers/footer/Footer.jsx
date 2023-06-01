import React from 'react';
import gpt3Logo from '../../logo.svg';
import i5 from '../../assets/i5.jpg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p><a href="https://chat.openai.com/">Try ChatGPT 3</a></p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={i5} alt="gpt3_logo" />
        {/*<p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>*/}
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href ="https://in.linkedin.com/in/hamza-arif-390001222">Linkedin</a></p>
        <p><a href ="https://github.com/hamzaarif12345">Github</a></p>
        {/*<p>Counters</p>
        <p>Contact</p>*/}
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Developer</h4>
        <p>Hamza Arif </p>
        <p><a href="https://hamzaarif12345.github.io/sample2/portfolio.html">Website</a> </p>
        {/*<p>Privacy Policy</p>
        <p>Contact</p>*/}
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>hamza81611@gmail.com</p>
        <p>8755160374</p>
        {/*<p>info@payme.net</p>*/}
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
