import React, {ReactNode, useState} from 'react';

import nimrod_image from './images/nimrod.jpg'; 
import tv_static_image from './images/tv_static.jpg';

// MARK: - Components 

import HomeScreen from './components/HomeScreen';
import ProjectsScreen from './components/ProjectsScreen';
import AboutMeScreen from './components/AboutMeScreen';
import CommandShellComponent from './components/CommandShell';
import SlowPrint from './effects/SlowPrint';


// Write new Component Here Before Modularizing it. 

interface FormData {
    name: string, 
    email: string, 
    message: string
}

function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


const ContactMeScreen = () => {

    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '', 
      message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; 

        if (name == 'email') {
          console.log(isValidEmail(value)); 
        }

        setFormData({
          ...formData,
          [name]: value
        }); 
    }

    // TODO: Work on Handling Form Submission. 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        
    }

    const handleRedirect = () => {
      window.location.href = 'https://www.linkedin.com/in/luissantanderpro/'; 
    }

    const handleResumeDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1jHBZ2CK-SdIg5xGcW-fP-TSyC919-sP3';
        link.download = 'Luis Santander Resume.pdf'; // Filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
      <div className='contact-screen'>
        <h1>Contact Me</h1>
          <form className='contact-screen-body' onSubmit={handleSubmit}>
            <label htmlFor="name" className='item1'>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='item2'
            />
            <label htmlFor="email" className='item3'>Email:</label>
            <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='item4'
            />
            <label 
              htmlFor="message"
              className='item5'>
                Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='item6'
            />
            <button type="submit">Submit</button>
            <div className='item8'>
              <button onClick={handleResumeDownload}>📑Resume</button>
              <button onClick={handleRedirect}>👔Linkedln</button>
            </div>
            </form>
      </div>
    ); 
}

// MARK: - App 

interface ComponentsDictionary {
  [key: string]: ReactNode; 
}

const App = () => {

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
          setInputField(''); 
      }
  }

  const handleClick = (e: any) => {
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
                  <div className='menu-grid-item'>
                      <div className='icon'>🧑</div>
                      <button id='about_me' onClick={(e) => handleClick(e)}>About Me</button>
                  </div>
                  <div className='menu-grid-item'>
                      <div className='icon'>🧑</div>
                      <button id='contact_me' onClick={(e) => handleClick(e)}>Contact Me</button>
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
