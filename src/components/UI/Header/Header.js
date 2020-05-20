import React from 'react';

import classes from './Header.css';
import Logo from '../../Logo/Logo';


const header = ( props ) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
    </header>
);

export default header;