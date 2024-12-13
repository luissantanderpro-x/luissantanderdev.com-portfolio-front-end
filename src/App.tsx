import React, { ReactNode, useCallback, useEffect, useState } from 'react';

import nimrod_image from './images/nimrod.jpg'; 
import tv_static_image from './images/tv_static.jpg';

// MARK: - Screens

import HomeScreen from './screens/HomeScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import AboutMeScreen from './screens/AboutMeScreen';
import ContactMeScreen from './screens/ContactMeScreen';
import ProfessionalLinksScreen from './screens/ProfessionalLinksScreen';

// MARK: Components 

import CommandShellComponent from './components/CommandShellComponent';
import { ComponentFactory } from './utils';

// MARK: - App 

interface ComponentsDictionary {
  [key: string]: ReactNode; 
}



const InteractiveShellResponses: Record<string, string> = {
    home_screen_body: 'I see you pressed the home section...'
}

const App = () => {

  const [shellPrompts, setShellPrompts] = useState<JSX.Element[]>(() => {
    return [
      ComponentFactory.createComponent('shell_prompt', {
          shell_key: '0',
          caller_name: 'nimrod.ai',
          caller_message: 'hi there' 
      })
    ]; 
  }); 

  const onClickSectionChatBotResponseTrigger = useCallback((id: string) => {

      setShellPrompts((prevShellPrompts) => {

          const newShellPromptComponent = ComponentFactory.createComponent('shell_prompt', {
              shell_key: '' + prevShellPrompts.length,
              caller_name: 'nimrod.ai',
              caller_message: InteractiveShellResponses[id]
          })

          return [...prevShellPrompts, newShellPromptComponent]; 
      });

  }, []); 

  // MARK: App State 

  const [screen, setScreen] = useState<ReactNode>(<HomeScreen onClickBody={onClickSectionChatBotResponseTrigger}/>);
  const [inputField, setInputField] = useState<string>('')

  const [currentScreen, setCurrentScreen] = useState(() => {
      return sessionStorage.getItem('currentScreen') || 'home'; 
  });

  // MARK: App Functions 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputField(e.target.value) 
  }

  // TODO: When Pressing Enter This Piece of Code will talk to the backend. 
  //       Will interact with the AI Model that I am working on. 
  const handleKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
          setInputField(''); 
      }
  }

  useEffect(() => {
      sessionStorage.setItem('currentScreen', currentScreen); 
  }, [currentScreen, shellPrompts]); 

  // TODO: Trigger the Command Shell When Clicking Elements throughout the Site 
  //       From Child Elements within menu components. 
  const test_function = (msg: string) => {
      console.log('Parent Function: ', msg); 
  }

  const menuComponents: ComponentsDictionary = {
    home: <HomeScreen onClickBody={onClickSectionChatBotResponseTrigger}/>, 
    projects: <ProjectsScreen test_function={test_function}/>,
    about_me: <AboutMeScreen />,
    contact_me: <ContactMeScreen />,
    professional_links: <ProfessionalLinksScreen />
  }; 

  const handleClick = (e: any) => {
      setCurrentScreen(e.target.id); 
      setScreen(menuComponents[e.target.id]);
      
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
        case 'professional_links':
          response = "Here are Luis's resume and Linkedln."
          break;
        default:
          response = '';  
      }; 

      const shellPromptComponent = ComponentFactory.createComponent('shell_prompt', {
          shell_key: '' + shellPrompts.length,
          caller_name: 'nimrod.ai',
          caller_message: response
      }); 

      setShellPrompts([...shellPrompts, shellPromptComponent]);
  }; 
  
  return (
    <div className="container">

        <div className="header">
                <button 
                  id='home' 
                  className='header-buttons'
                  onClick={(e) => handleClick(e)}
                  >
                    🏠 Home
                </button>
                <button 
                  id='contact_me' 
                  className='header-buttons'
                  onClick={(e) => handleClick(e)}>
                    🤙 Contact Me
                </button>
        </div>

        <div className="top-grid">
            <div className="top-grid-item">
                <div className="top-grid-item-picture">
                    <img className='top-grid-item-picture-base-image' src={nimrod_image} alt="codec screen"/>
                    <img className='top-grid-item-picture-overlay-image' src={tv_static_image} alt="static screen" />
                </div> 
            </div>
            <div className="top-grid-item">
                {screen}
            </div>
        </div>

        <div className="bottom-grid">
            <div className="grid-item">
                <div className='menu-grid-container'>
                  <div className='menu-grid-item'>
                      <div className='menu-grid-item-icon'>⚙️</div>
                      <button id='projects' onClick={(e) => handleClick(e)}>Projects</button>
                  </div>
                  <div className='menu-grid-item'>
                      <div className='menu-grid-item-icon'>🧑</div>
                      <button id='about_me' onClick={(e) => handleClick(e)}>About Me</button>
                  </div>
                  <div className='menu-grid-item'>
                      <div className='menu-grid-item-icon'>📧</div>
                      <button id='contact_me' onClick={(e) => handleClick(e)}>Contact Me</button>
                  </div>
                  <div className='menu-grid-item'>
                      <div className='menu-grid-item-icon'>👔</div>
                      <button id='professional_links' onClick={(e) => handleClick(e)}>Resume</button>
                  </div>
                </div>
            </div>
            <div className="grid-item">
                <CommandShellComponent shellPrompts={shellPrompts}/> 
            </div>
        </div>

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
