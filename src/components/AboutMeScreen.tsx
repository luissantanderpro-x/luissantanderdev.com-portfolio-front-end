import React from 'react'; 

import SlowPrint from '../effects/SlowPrint';

const AboutMeScreen = () => {
    const messages = [
      `My name is Luis Santander and I am a software developer.
      I am a Computer Science Cal Poly Pomona Alumni. My interests and skills are provided down below. 
      So enjoy exploring my website. 
      `,
      `Hobbies: Music Production, Gaming.`,
      `Programming Languages: Python, JavaScript, Java, C, HTML, CSS.`,
      `Frameworks: React, Django, Node.js`
    ]; 

    const messageOutput = messages.map((message, index) => {
        return (
          <div key={index}>
            <SlowPrint msg={message} interval={300}/>
            <h1>--------------</h1>
          </div>
        ); 
    })

    return (
      <div className='top-grid-item-about-me'>
        <div className='top-grid-item-about-me-header'>About Me</div>
        <div className='top-grid-item-about-me-body'>{messageOutput}</div>
      </div>
    );
}

export default AboutMeScreen