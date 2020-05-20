import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="#" active>Upcoming Campaigns</NavigationItem>
        <NavigationItem link="#">Live Campaigns</NavigationItem>
        <NavigationItem link="#">Past Campaigns</NavigationItem>
    </ul>
);

export default navigationItems;