import React from 'react';
import campgainIcon1 from '../../../assets/images/Bitmap.png';
import classes from './Campaign.css';

const campaign = (props) => {
    return (
        <div >
            <figure className={classes.figure}>
                <img className={classes.image} src={campgainIcon1} alt="" />
            </figure>
            <div className={classes.info}>
                <h5 className={classes.header}>Auto Chess</h5>
                <i className={classes.icon}>US</i>
            </div>
        </div>
    )
};

export default campaign;