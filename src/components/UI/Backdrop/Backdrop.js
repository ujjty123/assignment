import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <React.Fragment>
        <div className={[classes.BackdropHeader,classes[props.form]].join(' ')}></div>
        <div className={[classes.BackdropMain,classes[props.form]].join(' ')}></div>
        </React.Fragment> : null
);

export default backdrop;