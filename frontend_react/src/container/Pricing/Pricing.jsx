import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper';
import { PricingCard } from '../../components';

import './Pricing.scss';

const Pricing = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const query = '*[_type == "priceCards"]'

    client.fetch(query)
      .then((data) => setItems(data))
  }, []);

  return (
    <>{items.length && (

      <div className='app__pricing'>
        {console.log(items)}
        <h2 className='head-text'>Ето и <span>нашите цени</span></h2>
        <div className='app__pricing-container'>
          <div className='app__pricing-layout'>
            {items.map((item, index) => (
              <motion.div
                key={`${item.title + index}`}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={[{scale: 1.2}]}
                transition={{ duration: 0.5, type: 'tween' }}
              >
                <PricingCard

                  title={item.title}
                  prices={item.prices}
                  bgColor={item.bgColor}
                />
              </motion.div>

            ))}
          </div>
        </div>
      </div>
    )}

    </>
  )
}

export default AppWrap(
  MotionWrap(Pricing, 'app__pricing'),
  'pricing',
  'app__primarybg'
);



