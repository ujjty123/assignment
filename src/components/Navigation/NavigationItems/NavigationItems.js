import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import LangContext from '../../../context/LangContext';

const NavigationItems = () => (
    <LangContext.Consumer>
        {(value) => (
            <React.Fragment>
                <ul className={classes.NavigationItems}>
                    <NavigationItem link="/upcoming">{value.tabs.tab1}</NavigationItem>
                    <NavigationItem link="/live">{value.tabs.tab2}</NavigationItem>
                    <NavigationItem link="/past">{value.tabs.tab3}</NavigationItem>
                </ul>
            </React.Fragment>
        )
        }
    </LangContext.Consumer>
);

export default NavigationItems;