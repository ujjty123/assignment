import React from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import classes from './ManageCampaigns.css';
import campgainIcon1 from '../../assets/images/Bitmap.png';
import viewprice from '../../assets/images/Price.png';
import csv from '../../assets/images/file.png';
import report from '../../assets/images/statistics-report.png';
import schedule from '../../assets/images/calendar.png';
const manageCampaigns = (props) => {
    return(
        <div>
            <h1>Manage Campaigns</h1>
            <nav className={classes.nav}>
                <NavigationItems />
            </nav>
            <div className={classes.listcontainer}>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Campaign</th>
                            <th>View</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div  className={classes.date}><h5>Oct 2019, 28</h5><i>5 days Ago</i></div></td>
                            <td>
                                <div  className={classes.campaign}>
                                    <figure><img src={campgainIcon1} alt=""/></figure>
                                    <div>
                                        <h6>Auto Chess</h6>
                                        <i>US</i>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div  className={classes.viewsection}>
                                    <img src={viewprice} alt=""/>
                                    <span>View Pricing</span>
                                </div>
                            </td>
                            <td>
                                <div className={classes.action}>
                                    <div  className={classes.actioncell}>
                                        <img src={csv} alt=""/>
                                        <span>CSV</span>
                                    </div>
                                    <div className={classes.actioncell}>
                                         <img src={report} alt=""/>
                                        <span>Report</span>
                                    </div>
                                    <div className={classes.actioncell}>
                                        <img src={schedule} alt=""/>
                                        <span>Schedule Again</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default manageCampaigns;
