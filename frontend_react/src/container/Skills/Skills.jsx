import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss';

const Skills = () => {

  const [experiences, setExperiences] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const expQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(expQuery)
      .then((data) => {
        setExperiences(data);
      })

      client.fetch(skillsQuery)
      .then((data) => {
        setSkills(data);
      })

  }, [])
  

  return (
    <>
      <h2 className='head-text'>Skills and Experince</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1]}}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skills.name}
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name}/>
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
            {experiences?.map((exp) => (
              <motion.div
                className='app__skills-exp-item'
                key={exp.year}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{exp.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {exp.works.map((work) => (
                    <>
                      <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: 0.5}}
                        className='app__skills-exp-work'
                        key={work.name}
                      >
                        <h4 
                          data-tooltip-id={work.name}
                          data-tooltip-content={work.desc}
                          data-tooltip-place='top-start'
                          data-tooltip-delay-show={150}
                          data-tooltip-delay-hide={150}
                          className='bold-text'>{work.name}
                        </h4>
                        <p className='p-text'>{work.company}</p>
                      </motion.div>
                      <Tooltip
                        id={work.name}
                        className='skills-tooltip'
                      >
                      </Tooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);