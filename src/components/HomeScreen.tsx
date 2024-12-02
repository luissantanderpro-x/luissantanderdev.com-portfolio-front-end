import React from 'react'; 

import SlowPrint from '../effects/SlowPrint';

const HomeScreen = () => {
    const words = 'Hi there my name is Luis Santander and welcome to my portfolio site.';
    return (
      <div className='top-grid-home'>
        <div className='top-grid-home-header'>Home</div>
        <div className='top-grid-home-body'>
          <SlowPrint msg={words} interval={300}/>
        </div>
      </div>
    );

  }

  export default HomeScreen