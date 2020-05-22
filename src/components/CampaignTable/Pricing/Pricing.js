import React from 'react';
import viewprice from '../../../assets/images/Price.png';
import classes from './Pricing.css';

const pricing = (props) => {
    return(
        <div onClick={props.onPurchase} style={{'cursor':'pointer'}}>
            <img className={classes.icon} src={viewprice} alt=""/>
            <span className={classes.text}>View Pricing</span>
        </div>
    );
};

export default pricing;