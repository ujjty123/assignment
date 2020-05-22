import React from 'react';
import classes from './CampaignTable.css';
import Date from './Date/Date';
import Campaign from './Campaign/Campaign';
import Pricing from './Pricing/Pricing';
import Actions from './Actions/Actions';

const CampaignTable = (props) => {
    let tableData = [...props.tableData];
    const renderData = tableData.map((item) => {
        return <tr key={item.id}>
            <td>
                <Date days={item.days} />
            </td>
            <td>
                <Campaign
                    logo={item.image}
                    name={item.name}
                    region={item.region} />
            </td>
            <td>
                <Pricing price={item.price} onPurchase={() => props.onPurchase({
                    image: item.image,
                    name: item.name,
                    price: item.price
                })} />
            </td>
            <td>
                <Actions id={item.id} onSchedule={(date) => props.onSchedule(date, item.id)} />
            </td>
        </tr>
    })
    return (
        (props.tableData.length > 0) ? <div className={classes.listcontainer}>
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
                    {renderData}
                </tbody>
            </table>
        </div> : <h1>No data found</h1>
    );
}

export default CampaignTable;