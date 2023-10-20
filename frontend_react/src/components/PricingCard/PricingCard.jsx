import React from 'react'

import './PricingCard.scss';

const PricingCard = ({title, prices, bgColor}) => {
  return (
    <div style={{backgroundColor: bgColor}} className='pricing-card'>
        <h3 className='pricing-card-title'>{title}</h3>
        <ul className="pricing-items">
        {prices.map((price, index) => (
          <li className="app__flex pricing-item" key={`link-${price + index}`}>
            {price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PricingCard