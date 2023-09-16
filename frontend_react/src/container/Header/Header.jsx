import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }

  }
}

const Header = () => {
  return (
    <div id='home' className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='-text'>Hello, I am</p>
              <h1 className='head-text'>Micael</h1>
            </div>
          </div>

          <div className='tag-cmp app__flex'>
            <p className='p-text'>Full Stack</p>
            <p className='p-text'>Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profileDetegledane} alt="profile_bg" />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay-circle'
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
        {[images.abc, images.canvas, images.clown, images.reading].map((circle, index) => (
          <motion.div
            whileTap={{ rotate: index % 2 == 0 ? 360 : -360 }}
            transition={{ duration: 0.7}}
            className='circle-cmp app__flex'
            key={`circle-${index}`}
            style={{backgroundColor: '#fffdf'}}
          >
            <img src={circle} alt="circle" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');