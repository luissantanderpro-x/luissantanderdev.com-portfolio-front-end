import React, {ReactNode, useState, useEffect} from 'react';

import nimrod_image from './images/nimrod.jpg'; 
import tv_static_image from './images/tv_static.jpg';

interface ComponentsDictionary {
  [key: string]: ReactNode; 
}


const SlowPrint = (words: string[]) => {
    const [displayWords, setDisplayedWords] = useState('')
}



const App = () => {



  const home_screen = () => {

    return (
      <div className='top-grid-display'>
        <h1>Home</h1>
        <h1>Hi there my name is Luis Santander and welcome to my projects portfolio site.</h1>
      </div>
    );

  }


  const projects_screen = (
    <div>
      <h1>Projects</h1>
      <div className="icon">📁</div>
    </div>

  );

  const menuComponents: ComponentsDictionary = {
    home: home_screen(),
    projects: projects_screen
  }


  const [screen, setScreen] = useState(menuComponents['home']);


  const handleClick = (e: any) => {
    console.log(e.target.id); 
    setScreen(menuComponents[e.target.id])
  }

  console.log(screen)
  // print(currentScreen)
  return (
    <div className="container">
        {/* <!-- Header Section --> */}
        <div className="header">
            <div className="header-buttons">
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>

        {/* <!-- Top Grid Section --> */}
        <div className="top-grid">
            {/* <!-- Grid Items --> */}

            <div className="top-grid-item">
                <div className="picture-container">
                    <img className='base-image' src={nimrod_image} alt="codec screen"/>
                    <img className='overlay-image' src={tv_static_image} alt="static screen" />
                </div>
            </div>

            <div className="top-grid-item">
                {screen}
            </div>

        </div>

        {/* <!-- Main Grid Section --> */}
        <div className="grid">
            {/* <!-- Grid Items --> */}

            <div className="grid-item">
                <div className='menu-grid-container'>
                  <div className='menu-grid-item'>
                      <div className='icon'>⚙️</div>
                      <button id='projects' onClick={(e) => handleClick(e)}>Projects</button>
                  </div>
                </div>
            </div>

            <div className="grid-item">

                <div className="command-shell">
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                    <p className="command-shell-text">nimrod ai: welcome to luis santanders website</p>
                </div>

            </div>
            
        </div>

        {/* <!-- Footer Section --> */}
        <div className="footer">
            <p>luissantanderdev.com @ all rights reserved.</p>
        </div>
    </div>
  ); 
}

export default App;
