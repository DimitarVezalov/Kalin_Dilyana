import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isformSubmitted, setIsformSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData;

  const handleChageInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  const handleSubmitt = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsformSubmitted(true);
      })
  }

  return (
    <>
      <h2 className='head-text'>Contact us</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:wopopo13@gmail.com" className='p-text'>wopopo13@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +35987602022" className='p-text'>+35987602022</a>
        </div>
      </div>
      {
        !isformSubmitted ?
          <div className='app__footer-form app__flex'>
            <div className='app__flex'>
              <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChageInput} />
            </div>
            <div className='app__flex'>
              <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChageInput} />
            </div>
            <div>
              <textarea className='p-text' placeholder='Your Message' name='message' value={message} rows='10' cols='50' onChange={handleChageInput} />
            </div>
            <button type='button' className='p-text' onClick={handleSubmitt}>{loading ? 'Sending' : 'Send Message'}</button>
          </div>
          : <div>
            <h3 className='head-text'>Thank you for your email!</h3>
          </div>
      }
    </>
  );
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);