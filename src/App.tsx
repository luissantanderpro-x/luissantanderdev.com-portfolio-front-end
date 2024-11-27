import React, {ReactNode, useEffect, useState} from 'react';

import nimrod_image from './images/nimrod.jpg'; 
import tv_static_image from './images/tv_static.jpg';

// MARK: - Components 

import HomeScreen from './components/HomeScreen';
import ProjectsScreen from './components/ProjectsScreen';
import AboutMeScreen from './components/AboutMeScreen';
import CommandShellComponent from './components/CommandShell';
import ContactMeScreen from './components/ContactMeScreen';
import SlowPrint from './effects/SlowPrint';


// MARK: New Component 

// MARK: - App 

interface ComponentsDictionary {
  [key: string]: ReactNode; 
}

const menuComponents: ComponentsDictionary = {
  home: <HomeScreen />, 
  projects: <ProjectsScreen />,
  about_me: <AboutMeScreen />,
  contact_me: <ContactMeScreen />
}; 

const initial_prompt = (
  <div className='command-shell-item' key='0'>
      <div>nimrod.ai:</div>
      <SlowPrint msg={'hi there'} interval={400} />
  </div>
);

// MARK: App Main


const App = () => {

  // MARK: State 

  const [currentScreen, setCurrentScreen] = useState(() => {
      return sessionStorage.getItem('currentScreen') || 'home'; 
  });

  const [shellPrompts, setShellPrompts] = useState<JSX.Element[]>([initial_prompt]); 
  const [screen, setScreen] = useState(menuComponents[currentScreen]);
  const [inputField, setInputField] = useState<string>('')

  // This changes the state as the client talks to the Model which will change the state. 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputField(e.target.value) 
  }

  // TODO: When Pressing Enter This Piece of Code will talk to the backend. 
  //       Will interact with the AI Model that I am working in. 
  const handleKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
          setInputField(''); 
      }
  }

  useEffect(() => {
      sessionStorage.setItem('currentScreen', currentScreen); 
  }, [currentScreen, shellPrompts]); 

  const handleClick = (e: any) => {
    setCurrentScreen(e.target.id)
    setScreen(menuComponents[e.target.id])

    let response = ''; 

    switch (e.target.id) {
      case 'home': 
        response = 'Back to the home screen';
        break; 
      case 'projects':
        response = 'you chose projects I see. do you have a question about one of them in particular?';
        break; 
      case 'about_me':
        response = 'you chose about me so what would you like to learn about Luis Santander?'; 
        break; 
      case 'contact_me':
        response = 'you wish to contact Luis please fill out the form.'; 
        break; 
      default:
        response = '';  
    }; 

    const projects_shell = (
      <div className='command-shell-item' key={'' + shellPrompts.length}>
        <div>nimrod.ai: </div>
        <SlowPrint msg={response} interval={400}/>
      </div>
    );

    setShellPrompts([...shellPrompts, projects_shell]);
  }; 

  return (
    <div className="container">
        {/* <!-- Header Section --> */}
        <div className="header">
            <div className="header-buttons">
                <button id='home' onClick={(e) => handleClick(e)}>🏠</button>
                <button id='contact_me' onClick={(e) => handleClick(e)}>🤙 Contact Me</button>
            </div>
        </div>

        {/* MARK: Top Grid */}
        {/* <div className="top-grid">

            <div className="top-grid-item">
                <div className="picture-container">
                    <img className='base-image' src={nimrod_image} alt="codec screen"/>
                    <img className='overlay-image' src={tv_static_image} alt="static screen" />
                </div>
            </div>

            <div className="top-grid-item">
                {screen}
            </div>

        </div> */}

        {/* <!-- Main Grid Section --> */}
        {/* <div className="grid">

            <div className="grid-item">
                <div className='menu-grid-container'>
                  <div className='menu-grid-item'>
                      <div className='icon'>⚙️</div>
                      <button id='projects' onClick={(e) => handleClick(e)}>Projects</button>
                  </div>
                  <div className='menu-grid-item'>
                      <div className='icon'>🧑</div>
                      <button id='about_me' onClick={(e) => handleClick(e)}>About Me</button>
                  </div>
                  <div className='menu-grid-item'>
                      <div className='icon'>📧</div>
                      <button id='contact_me' onClick={(e) => handleClick(e)}>Contact Me</button>
                  </div>
                </div>
            </div>
            
            <div className="grid-item">
              <CommandShellComponent shellPrompts={shellPrompts}/> 
            </div>
            
        </div> */}

        {/* <div className="footer">
            <input 
              className='footer-input' 
              type='text' 
              value={inputField}
              placeholder='Type Something if you wish to talk to nimrod.ai....'
              onChange={handleInputChange}
              onKeyDown={handleKeyPressed}
              />
            <p>luissantanderdev.com @ all rights reserved.</p>
        </div> */}
    </div>
  ); 
}

export default App;
