import React from 'react'; 

const ProfessionalLinksScreen = () => {

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
      <div className='professional-links-screen'>
          <div className='professional-links-screen-header'>Professional Links</div>
          <div className='professional-links-screen-body'>
            <button onClick={handleResumeDownload}>📑Resume</button>
            <button onClick={handleRedirect}>👔LinkedIn</button>
          </div>
      </div>
    ); 
}

export default ProfessionalLinksScreen