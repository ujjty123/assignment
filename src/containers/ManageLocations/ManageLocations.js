import React from 'react';
import NoLocation from '../../components/NoLocation/NoLocation';
import classes from './ManageLocations.css';
import LocationList from './LocationList/LocationList';


const ManageCampaigns = (props) => {
    console.log('locations list-->',props.locations);
    return (props.locations.length > 0) ? <LocationList/> : <div className={classes.NoLocation}>
        <NoLocation />
    </div>
};

export default ManageCampaigns;
