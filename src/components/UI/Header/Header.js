import React from 'react';
import Button from '../Button/Button'
import classes from './Header.css';


const Header = ( props ) => {
    console.log('header');
    return(
    <header className={classes.Toolbar}>
        <h2 className={classes.Heading}>Locations</h2>
        <Button
            btnType="AddLocation"
            clicked={props.clicked}
        >+ Add Location</Button>
    </header>
)};

export default Header;