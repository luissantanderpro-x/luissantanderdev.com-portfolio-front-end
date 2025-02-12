import React from 'react'; 
import { WEB_URLS } from '../config/webUrls';


const ProfessionalLinksScreen = () => {

    const handleRedirect = (url: string) => {
      window.location.href = url; 
    }

    // NOTE: This code here is if I want to Enable Resume Download URL 
    // const handleResumeDownload = (url: string) => {
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.download = 'Luis Santander Resume.pdf'; // Filename for the downloaded file
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // }

    return (
      <div className='professional-links-screen'>
          <div className='professional-links-screen-header'>Professional Links</div>
          <div className='professional-links-screen-body'>
            <div>
                <button onClick={() => handleRedirect(WEB_URLS.linkedin)}>👔LinkedIn</button>
            </div>
            <div>
                <button onClick={() => handleRedirect(WEB_URLS.github)}>😼GitHub</button>
            </div>
          </div>
      </div>
    ); 
}

export default ProfessionalLinksScreen