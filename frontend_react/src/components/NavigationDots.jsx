import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'pricing', 'work', 'testimonials', 'contact', 'location'].map((item, index) => (
                <a 
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? {backgroundColor: "#08b808"} : {}}
                /> 
            ))}
        </div>
    )
}

export default NavigationDots