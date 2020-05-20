import React from 'react';
import classes from './CampaignTable.css';
import Date from './Date/Date';
import Campaign from './Campaign/Campaign';
import Pricing from './Pricing/Pricing';
import Actions from './Actions/Actions';

const campaignTable = (props) => {
    return (
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
                        <td>
                            <Date />
                        </td>
                        <td>
                            <Campaign />
                        </td>
                        <td>
                            <Pricing />
                        </td>
                        <td>
                            <Actions />
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    );
}

export default campaignTable;