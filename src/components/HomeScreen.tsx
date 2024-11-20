import React from 'react'; 

import SlowPrint from '../effects/SlowPrint';

const HomeScreen = () => {
    const words = 'Hi there my name is Luis Santander and welcome to my projects portfolio site.';
    return (
      <div className='top-grid-display'>
        <h1>Home</h1>
        <SlowPrint msg={words} interval={300}/>
      </div>
    );

  }

  export default HomeScreen