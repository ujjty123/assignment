import React from 'react';
import classes from './Date.css';

const date = (props) => {
    return(
        <div >
            <h4 className={classes.header}>Oct 2019, 28</h4>
            <i className={classes.icon}>5 days Ago</i>
        </div>
    );
}

export default date;