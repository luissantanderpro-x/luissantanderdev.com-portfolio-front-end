import React, {ReactNode, useState} from 'react';

import nimrod_image from './images/nimrod.jpg'; 
import tv_static_image from './images/tv_static.jpg';

// MARK: - Components 

import HomeScreen from './components/HomeScreen';
import ProjectsScreen from './components/ProjectsScreen';
import SlowPrint from './effects/SlowPrint';

interface ComponentsDictionary {
  [key: string]: ReactNode; 
}

// MARK: - App 

const App = () => {

  const menuComponents: ComponentsDictionary = {
    home: HomeScreen(),
    projects: ProjectsScreen(), 
  }


  const [screen, setScreen] = useState(menuComponents['home']);
  const [shellPrompts, setShellPrompts] = useState<JSX.Element[]>([])

  const handleClick = (e: any) => {
    // console.log(e.target.id); 
    setScreen(menuComponents[e.target.id])

    switch (e.target.id) {
      case 'projects':
        const projects_shell = (
          <div className='command-shell-item'>
            <div>nimrod.ai: </div>
            <SlowPrint words={['you', 'are']} interval={400}/>
          </div>
        );
        setShellPrompts([...shellPrompts, projects_shell])
        break; 
    }
  }

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
                    <div className='command-shell-item'>
                        <div>nimrod.ai: </div>
                        <SlowPrint words={['hi', 'there', 'my', 'name']} interval={400}/>
                    </div>
                    {shellPrompts}
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
