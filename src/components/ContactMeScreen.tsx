import React, { useState } from 'react'; 

interface FormData {
    name: string, 
    email: string, 
    message: string
}

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[a-zA-Z]+\.[a-zA-Z]+$/;
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

        setFormData({
          ...formData,
          [name]: value
        }); 
    }

    // TODO: Work on Handling Form Submission. 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        if (isValidEmail(formData.email)) {
            console.log('submitted to server');
            
            // TODO: Work on Logic that points to the backend in order to handle data. 
        } else {
            console.log('Not Valid Email'); 
        }
        
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
              maxLength={200}
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

export default ContactMeScreen