import React from 'react';

import blueStackLogo from '../../assets/images/blue-stack-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={blueStackLogo} alt="Blue Stack play Bigger" />
    </div>
);

export default logo;