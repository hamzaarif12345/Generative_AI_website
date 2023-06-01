import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Content Creation and Generation ',
    text: 'Generative AI can assist in creating educational content, such as automated essay grading, generating quiz questions, and even creating interactive simulations or virtual learning environments. ',
  },
  {
    title: 'Intelligent Tutoring Systems',
    text: 'Generative AI can power intelligent tutoring systems that provide personalized guidance and support to students. These systems can analyze student performance, identify knowledge gaps, and generate targeted feedback or explanations.',
  },
  {
    title: 'Virtual Assistants and Chatbots',
    text: 'AI-powered virtual assistants and chatbots can assist students with instant answers to questions, provide guidance on study materials, and offer support outside of classroom hours. ',
  },
  {
    title: 'Data Analysis and Predictive Analytics',
    text: 'Generative AI can analyze vast amounts of educational data to identify patterns, trends, and insights.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      {/*<p>Request Early Access to Get Started</p>*/}
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
