import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {

  const btn = useRef()
  const form = useRef();

  const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
  const [isformSubmitted, setIsformSubmitted] = useState(false);
  const [loading, setLoading] = useState(false)

  const { user_name, user_email, message } = formData;

  //update input fields
  const handleChageInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  //Enable/Disable button
  const disableButton = () => {
    if (user_name === '' || user_email === '' || message === '') {
      return true;
    }
    return false;
  }
    


  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs.sendForm(process.env.REACT_APP_EMAIlJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAIlJS_PUBLIC_KEY)
      .then((result) => {
        setIsformSubmitted(true);
      }, (error) => {
        console.log(error.text);
      }).finally(() => {
        setTimeout(() => {
          setIsformSubmitted(false);
        }, 3000);
        setLoading(false);
        setFormData({ user_name: '', user_email: '', message: '' });
      });


  };


  return (
    <>
      <h2 className='head-text'>Свържете се <span>с нас</span></h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href="mailto:gmail.com" className='p-text'>detegledane@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +359883344442" className='p-text'>+359883344442</a>
        </div>
      </div>
      {
        !isformSubmitted ?
          <form ref={form} onSubmit={sendEmail} className='app__footer-form app__flex'>

            <div className='app__flex'>
              <input className='p-text' type="text" placeholder='Your Name' name='user_name' value={user_name} onChange={handleChageInput} />
            </div>
            <div className='app__flex'>
              <input className='p-text' type="email" placeholder='Your Email' name='user_email' value={user_email} onChange={handleChageInput} />
            </div>
            <div>
              <textarea className='p-text' placeholder='Your Message' name='message' value={message} rows='10' cols='50' onChange={handleChageInput} />
            </div>
            <button ref={btn} disabled={disableButton()} className='p-text' type='submit' >{loading ? 'Sending' : 'Send Message'}</button>
          </form>
          : <div>
            <h3 className='head-text'>Thank you <span>for your email!</span></h3>
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