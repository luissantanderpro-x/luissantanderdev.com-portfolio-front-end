import React from 'react'; 

import SlowPrint from '../effects/SlowPrint';

const AboutMeScreen = () => {
    const messages = [
      `My name is Luis Santander and I am a software developer.
      I am 32 years old and I graduated from Cal Poly Pomona with my Bachelors of Science in Computer Science.
      `,
      `Hobbies: Music Production, Gaming.`,
      `Programming Languages: Python, JavaScript, Java, C, HTML, CSS.`,
      `Frameworks: React, Django, Node.js`
    ]; 

    const messageOutput = messages.map((message, index) => {
        return (
          <div key={index}>
            <SlowPrint words={message.split(' ')} interval={300}/>
            <h1>--------------</h1>
          </div>
        ); 
    })

    return (
      <div className='top-grid-display'>
        <h1>About me</h1>
        {messageOutput}
      </div>
    );
}

export default AboutMeScreen