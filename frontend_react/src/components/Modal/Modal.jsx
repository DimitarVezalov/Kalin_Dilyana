import React from 'react';
import { motion } from 'framer-motion';

import './Modal.scss';

const Modal = ({ selected, setSelected, urlFor }) => {

    if (!selected) {
        return <></>;
    }

    const show = () => {
        console.log(selected.description.length);
    }

    return (
        <div className='app__modal-overlay' onClick={() => setSelected(null)}>
            <div className='app__modal-container'>
                <div className='app__modal-card' onClick={(e) => e.stopPropagation()}>
                    <motion.div
                        className='app__modal-header'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.3, type: 'spring', stiffness: 200 }}
                        onClick={show()}
                    >
                        <h2 className='bold-text' style={{ marginTop: 20 }}>{selected.title}</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, type: 'tween' }}
                        className='app__modal-body'
                    >
                        <img src={urlFor(selected.imgUrl)} alt={selected.title} className='app__modal-img' />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.3, type: 'spring', stiffness: 200 }}
                        className='app__modal-footer'
                    >

                        <p className='p-text' style={{ marginTop: 10 }}>{selected.description}</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Modal;