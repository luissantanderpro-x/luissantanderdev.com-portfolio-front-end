import React from 'react' 

// MARK: Image Imports 
import project1 from '../assets/gifs/project-gifs/pacman-project.gif'; 
import project2 from '../assets/gifs/project-gifs/pycryptik-project.gif';
import project3 from '../assets/gifs/project-gifs/prism-project.gif'; 
import project4 from '../assets/gifs/project-gifs/loanpro-project.gif'; 
import project5 from '../assets/gifs/project-gifs/verisk-project.gif'; 

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
  };

  const handleClick = () => {
    window.location.href = url
  };

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

// MARK: Project Component

const projects = [
  { 
    url: 'https://stackblitz.com/edit/typescript-wlj4rh?file=README.md', 
    image_url: project1, 
    name: 'Pac-Man Game',
    description: 'Recreated pac-man game in react.',
    tooling: 'React, TypeScript'
  },
  {
    url: 'https://github.com/luissantanderpro-x/PyCryptik-Compression-and-Encryption-Program',
    image_url: project2,
    name: 'PyCryptik',
    description: 'Made a python tool that compresses files and encrypts them.',
    tooling: 'Python'
  }, 
  {
    url: 'https://stackblitz.com/edit/typescript-wyhdoq?file=index.ts',
    image_url: project3,
    name: 'ThreeJS Prism',
    description: 'Made a 3D Prism with a cube spinning inside of it while rotating the entire plane.',
    tooling: 'JavaScript, ThreeJS'
  },
  {
    url: 'https://stackblitz.com/edit/react-ts-dnw4z2?file=README.md',
    image_url: project4,
    name: 'Loanpro Full Stack App',
    description: 'Did take home project challenge from this small SaaS company. It is a calculator that does calculations in an amazon AWS backend.',
    tooling: 'TypeScript, React, Amazon AWS Lambda, Python, Node.js.'
  },
  {
    url: 'https://stackblitz.com/edit/angular-ivy-dpju9n?file=src%2Fmain.ts',
    image_url: project5,
    name: 'Verisk Bank Login',
    description: 'Worked on a Angular banking login app for the company Verisk',
    tooling: 'JavaScript, AngularJS, Authentication' 
  }
]; 

const ProjectComponent = () => {

    const projects_elements = projects.map((project) => {
        return <Project 
          url={project.name}
          imageURL={project.image_url}
          projectName={project.name}
          projectDescription={project.description}
          projectTooling={project.tooling}
        />
    }); 

    return (
        <div className='project-item'>
          {projects_elements}
        </div>
    );
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

