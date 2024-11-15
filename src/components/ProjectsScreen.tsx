import React from 'react' 

// MARK: Image Imports 
import project1 from '../assets/gifs/project-gifs/pacman-project.gif'; 
import project2 from '../assets/gifs/project-gifs/pycryptik-project.gif';

interface ProjectPrompts {
  url: string; 
  imageURL: string; 
  projectName: string;
  projectDescription: string;
  projectTooling: string; 
}; 

const Project: React.FC<ProjectPrompts> = ({url, imageURL, projectName, projectDescription, projectTooling}) => {

  const styling = {
    backgroundImage: `url(${imageURL})`
  }

  const handleClick = () => {
    window.location.href = url
  }

  return (
    <>
      <div className='project-image' style={styling}></div>
      <div className='project-item-body'>
          <h3>{projectName}</h3>
          <p>Description: {projectDescription}</p>
          <p>Tools: {projectTooling}</p>
          <button onClick={handleClick}>Link</button>
      </div>
    </>
  ); 
}

const ProjectComponent = () => {
    return (
        <div className='project-item'>
          <Project 
            url='https://stackblitz.com/edit/typescript-wlj4rh?file=README.md'
            imageURL={project1}
            projectName={'Pac-Man Game'}
            projectDescription={'Recreated pac-man game in react.'}
            projectTooling={'React, TypeScript.'}
          />
          <Project 
            url='https://github.com/luissantanderpro-x/PyCryptik-Compression-and-Encryption-Program'
            imageURL={project2}
            projectName='PyCryptik'
            projectDescription='Made a python tool that compresses files and encrypts them.'
            projectTooling='Python.'
          />
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

