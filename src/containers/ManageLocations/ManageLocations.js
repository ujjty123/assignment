import React from 'react';
import NoLocation from '../../components/NoLocation/NoLocation';
import classes from './ManageLocations.css';
import LocationList from './LocationList/LocationList';


const ManageCampaigns = (props) => {
    return (
        (props.locations.length > 0) ?
            <LocationList
                list={props.locations} onDelete={props.deleteLocation}
                onEdit={props.updateLocation} />
            : <div className={classes.NoLocation}>
                <NoLocation />
            </div>)
};

export default ManageCampaigns;
