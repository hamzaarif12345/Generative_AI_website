import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Generative AI" text="Generative AI refers to a branch of artificial intelligence that focuses on creating models and algorithms capable of generating new and original content, such as images, music, text, or even entire virtual worlds, based on patterns and examples learned from training data. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="These chatbots can understand user queries, interpret context, and generate relevant and contextually appropriate responses, providing a more interactive and personalized conversational experience. " />
      <Feature title="Knowledgebase" text="It contains a vast collection of structured or unstructured data, including text, images, audio, or any other relevant content, which is used to train and improve generative AI models." />
      <Feature title="Education" text="Generative AI can help create personalized learning experiences by adapting content and curriculum to individual students' needs and learning styles. " />
    </div>
  </div>
);

export default WhatGPT3;
