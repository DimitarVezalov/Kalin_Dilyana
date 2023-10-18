import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';

const Pricing = () => {
  return (
    <>
        <h2 className='head-text'>Нашите <span>услуги и цени</span></h2>
    </>
  )
}

export default AppWrap(
    MotionWrap(Pricing, 'app__pricing'),
    'pricing',
    'app__primarybg'
);