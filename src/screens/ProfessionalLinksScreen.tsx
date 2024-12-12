import React from 'react'; 
import { PROFESSIONAL_LINKS } from '../config/webUrls';


const ProfessionalLinksScreen = () => {

    const handleRedirect = (url: string) => {
      window.location.href = url; 
    }

    const handleResumeDownload = (url: string) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Luis Santander Resume.pdf'; // Filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
      <div className='professional-links-screen'>
          <div className='professional-links-screen-header'>Professional Links</div>
          <div className='professional-links-screen-body'>
            <div>
                <button onClick={() => handleResumeDownload(PROFESSIONAL_LINKS.google_resume)}>📑Resume</button>
                <button onClick={() => handleRedirect(PROFESSIONAL_LINKS.linkedin)}>👔LinkedIn</button>
            </div>
            <div>
                <button onClick={() => handleRedirect(PROFESSIONAL_LINKS.github)}>😼GitHub</button>
            </div>
          </div>
      </div>
    ); 
}

export default ProfessionalLinksScreen