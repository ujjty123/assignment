import React from 'react';
import classes from './Campaign.css';

const campaign = (props) => {
    return (
        <div >
            <figure className={classes.figure}>
                <img className={classes.image} src={props.logo} alt="" />
            </figure>
            <div className={classes.info}>
                <h3 className={classes.header}>{props.name}</h3>
                <i className={classes.icon}>{props.region}</i>
            </div>
        </div>
    )
};

export default campaign;