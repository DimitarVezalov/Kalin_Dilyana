import React from 'react';
import { motion } from 'framer-motion';

import './List.scss';

const Card = ({ setSelected, item, urlFor, classNames }) => {

    const maxChar = 50;

    const shortenText = (text) => {
        
        if(text.lastIndexOf(" ") === -1 && text.length > 22){
            return text.substring(0, 19) + "..."
        }

        if (text.length > maxChar) {
            text = text.substring(0, maxChar);
            text = text.substring(0, Math.min(text.length, text.lastIndexOf(" "))) + " . . .";
        }
        return text;
    }

    return (

        <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className={classNames}
            onClick={() => {setSelected(item)}}
        >
            <img src={urlFor(item.imgUrl)} alt={item.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{shortenText(item.title, this)}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{shortenText(item.description, this)}</p>
        </motion.div>

    )
};

const List = ({ setSelected, items, urlFor, classNames }) => {

    return (
        <>
            {items.map((item, index) => (
                <Card key={item + index} setSelected={setSelected} classNames={classNames} urlFor={urlFor} item={item} ></Card>
            ))}
        </>
    );
}

export default List;