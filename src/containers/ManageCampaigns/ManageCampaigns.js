import React from 'react';
import NavigationItems from '../../components/Navigation/NavigationItems/NavigationItems';
import classes from './ManageCampaigns.css';
import CampaignTable from '../../components/CampaignTable/CampaignTable';


const manageCampaigns = (props) => {
    return(
        <div>
            <h1>Manage Campaigns</h1>
            <nav className={classes.nav}>
                <NavigationItems />
            </nav>
            <CampaignTable/>
        </div>
    );
}

export default manageCampaigns;
