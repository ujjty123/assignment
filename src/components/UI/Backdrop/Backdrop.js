import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <React.Fragment>
        <div className={classes.BackdropHeader}></div>
        <div className={classes.BackdropMain}></div>
        </React.Fragment> : null
);

export default backdrop;