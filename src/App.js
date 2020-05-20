import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import ManageCampaigns from './containers/ManageCampaigns/ManageCampaigns';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <ManageCampaigns/>
        </Layout>
      </div>
    );
  }
}

export default App;
