import React from 'react';
import classes from './NoLocation.css'
import AddLocationIcon from '../../assets/images/location_icon.png';

const NoLocation = () => {
    return <div className={classes.Main}>
            <img className={classes.Icon} src={AddLocationIcon} alt=""/>
            <h3>Kindly Add Your Location First</h3>
            <p>There is no location added right now</p>
        </div>
};

export default NoLocation;