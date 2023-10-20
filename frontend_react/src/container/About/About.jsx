import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import { Modal, List } from '../../components';


import './About.scss';



const About = () => {

  const [abouts, setAbouts] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, []);


  return (
    <>
      <h2 className='head-text'>При нас забавлението <span>и образуванието</span> <br /> вървят <span>ръка за ръка</span></h2>
      <div className='app__profiles' >
        <List setSelected={setSelected} items={abouts} urlFor={urlFor} classNames={'app__profile-item'}/>
        <Modal selected={selected} setSelected={setSelected} urlFor={urlFor}/>
      </div>
     
    </>
  );
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);