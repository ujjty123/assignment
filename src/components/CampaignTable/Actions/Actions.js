import React from 'react';
import csv from '../../../assets/images/file.png';
import report from '../../../assets/images/statistics-report.png';
import schedule from '../../../assets/images/calendar.png';
import classes from './Actions.css';

const actions = (props) => {
    return (
        <div className={classes.action}>
            <div className={classes.margin}>
                <img className={classes.icon} src={csv} alt="" />
                <span >CSV</span>
            </div>
            <div className={classes.margin}>
                <img className={classes.icon} src={report} alt="" />
                <span >Report</span>
            </div>
            <div className={classes.margin}>
                <img className={classes.icon} src={schedule} alt="" />
                <span >Schedule Again</span>
            </div>
        </div>
    )
};

export default actions;