import React from 'react';
import { motion } from 'framer-motion';

import './Modal.scss';

const Modal = ({ selected, setSelected, urlFor }) => {

    if (!selected) {
        return <></>;
    }

    return (
        <div className='app__modal-container' onClick={() => setSelected(null)}>
            <div className='app__flex app__modal-card' >
                <div onClick={(e) => e.stopPropagation()} className='app__modal-item'>
                    <img src={urlFor(selected.imgUrl)} alt={selected.title} />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1, type: 'spring', stiffness: 200}}
                        className='app__modal-info'
                    >
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{selected.title}</h2>
                        <p className='p-text' style={{ marginTop: 10 }}>{selected.description}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Modal;