import React from 'react';
import classes from './Date.css';

const date = (props) => {
    return(
        <div >
            <h3 className={classes.header}>{props.days.split('-')[0]}</h3>
            <i className={classes.icon}>{props.days.split('-')[1]}</i>
        </div>
    );
}

export default date;