import React, { useState } from 'react'; 
import APIController from '../controllers/APIController';
import { SERVER_API_URLS } from '../config/serverApiUrls';
import ValidatorUtils from '../utils/ValidatorUtils';

// MARK: Types 

import { ContactMeFormDataTypes } from '../types';

// MARK: Component 

const ContactMeScreen = () => {
    const [isVisible, setIsVisible] = useState(true); 
    const [contactBanner, setContactBanner] = useState(''); 
    const [formData, setFormData] = useState<ContactMeFormDataTypes>({
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        if (ValidatorUtils.isValidEmail(formData.email)) {
            const api = new APIController(); 
            const payload = {
              data: {
                name: formData.name, 
                email: formData.email, 
                message: formData.message 
              }
            }

            const result = await api.handlePostRequest(payload, SERVER_API_URLS.contact_submit);

            setIsVisible(false); 
             
            if (!result.error) {
                const { message } = result.data;
                setContactBanner(message); 
            } else {
                setContactBanner(result.error); 
            }

        } else {
            setContactBanner('Not Valid Email....'); 
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
            <div className='contact-screen-body-contact-banner'>{contactBanner}</div>
            {
              isVisible && 
              <button 
                type="submit" 
                className='contact-screen-body-submit-button'>
                  Submit
              </button>
            }
            </form>
      </div>
    ); 
}

export default ContactMeScreen