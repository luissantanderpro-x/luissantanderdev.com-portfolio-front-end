import React, {ReactNode, useState} from 'react';

import nimrod_image from './images/nimrod.jpg'; 
import tv_static_image from './images/tv_static.jpg';

// MARK: - Components 

import HomeScreen from './components/HomeScreen';
import ProjectsScreen from './components/ProjectsScreen';
import CommandShellComponent from './components/CommandShell';
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

  const initial_prompt = (
    <div className='command-shell-item' key='0'>
        <div>nimrod.ai:</div>
        <SlowPrint words={['hi', 'there']} interval={400} />
    </div>
  )

  // MARK: State 

  const [screen, setScreen] = useState(menuComponents['home']);
  const [shellPrompts, setShellPrompts] = useState<JSX.Element[]>([initial_prompt])
  const [inputField, setInputField] = useState<string>('')


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Do Something
      setInputField(e.target.value) 
  }

  const handleKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
          // Do Something 
          console.log(inputField); 

          setInputField(''); 
      }
  }

  const handleClick = (e: any) => {
    // console.log(e.target.id); 
    setScreen(menuComponents[e.target.id])

    let response = ''; 
    let words = [] 

    switch (e.target.id) {
      case 'projects':
        response = 'you chose projects I see. do you have a question about one of them in particular?';
        words = response.split(' '); 

        const projects_shell = (
          <div className='command-shell-item' key={'' + shellPrompts.length}>
            <div>nimrod.ai: </div>
            <SlowPrint words={words} interval={400}/>
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

        {/* MARK: Top Grid */}
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
                  {/* <div className='menu-grid-item'>
                      <div className='icon'>⚙️</div>
                      <button id='blog' onClick={(e) => handleClick(e)}>Blog</button>
                  </div> */}
                  <div className='menu-grid-item'>
                      <div className='icon'>⚙️</div>
                      <button id='about-me' onClick={(e) => handleClick(e)}>About Me</button>
                  </div>
                </div>
            </div>
            
            <div className="grid-item">
              <CommandShellComponent shellPrompts={shellPrompts}/> 
            </div>
            
        </div>

        {/* MARK: Footer */}
        <div className="footer">
            <input 
              className='footer-input' 
              type='text' 
              value={inputField}
              placeholder='Type Something if you wish to talk to nimrod.ai....'
              onChange={handleInputChange}
              onKeyDown={handleKeyPressed}
              />
            <p>luissantanderdev.com @ all rights reserved.</p>
        </div>
    </div>
  ); 
}

export default App;
