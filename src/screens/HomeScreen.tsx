import React from 'react'; 

import { SlowPrintComponent } from '../components';

type HomeScreenProps = {
    onClickBody: (id: string) => void; 
}; 

const HomeScreen: React.FC<HomeScreenProps> = ({ onClickBody }) => {

    const words = 'Hi there my name is Luis Santander and welcome to my portfolio site.';
    
    return (
      <div className='top-grid-home' onClick={() => onClickBody('home_screen_body')}>
        <div className='top-grid-home-header'>Home</div>
        <div className='top-grid-home-body'>
          <SlowPrintComponent msg={words} interval={300}/>
        </div>
      </div>
    );
}; 

export default HomeScreen