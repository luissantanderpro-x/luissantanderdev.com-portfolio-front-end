import React from 'react' 

// MARK: Image Imports 
import project1 from '../assets/gifs/project-gifs/pacman-project.gif'; 


const ProjectComponent = () => {

    const styling = {
      backgroundImage: `url(${project1})`
    }

    const handleClick = () => {
      window.location.href = 'https://stackblitz.com/edit/typescript-wlj4rh?file=README.md'
    }


    return (
      <div className='project-item'>
        <div className='project-image' style={styling}></div>
        <div className='project-item-body'>
            <h3>Pac Man</h3>
            <p>Description: Recreated pac man in react.js and css.</p>
            <button onClick={handleClick}>Link</button>
        </div>
      </div>
    )
}


const ProjectsScreen = () => {

    return (
      <div className='top-grid-right-display'>
        <h1>Projects</h1> 
        <div className='top-grid-right-display-body'>
            <ProjectComponent /> 
        </div>
      </div>
    ); 
}; 

export default ProjectsScreen; 

