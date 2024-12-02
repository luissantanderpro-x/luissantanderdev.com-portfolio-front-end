import React, { useState } from 'react'; 

// MARK: Component 

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
    };

    // TODO: Work on Handling Form Submission. 

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        if (isValidEmail(formData.email)) {
            console.log('submitted to server');
            
            // TODO: Work on Logic that points to the backend in order to handle data. 
        } else {
            console.log('Not Valid Email'); 
        }
    };

    return (
      <div className='contact-screen'>
          <div className='contact-screen-header'>Contact Me</div>
          <form className='contact-screen-body' onSubmit={handleSubmit}>
            <label 
              htmlFor="name" 
              className='contact-screen-body-name-label'>
                Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className='contact-screen-body-name-field'
            />
            <label 
              htmlFor="email" 
              className='contact-screen-body-email-label'>
                Email:
            </label>
            <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='contact-screen-body-email-field'
            />
            <label 
              htmlFor="message"
              className='contact-screen-body-message-label'>
                Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className='contact-screen-body-message-textarea'
              maxLength={200}
            />
            <button 
              type="submit" 
              className='contact-screen-body-submit-button'>
                Submit
            </button>
            </form>
      </div>
    ); 
}

export default ContactMeScreen