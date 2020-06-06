import React, { useState, useCallback } from 'react';
import Layout from './hoc/Layout/Layout';
import Header from './components/UI/Header/Header';
import Modal from './components/UI/Modal/Modal';
import ManageLocations from './containers/ManageLocations/ManageLocations';
import LocationForm from './containers/Forms/LocationForm/LocationForm';

const App = () => {

  let [showAddLocationModal, setAddLocationModal] = useState(false);
  let [showFacilityTimeModal, setFacilityTimeModal] = useState(false);
  

  const addLocationClickHandler = useCallback(() => {
    setAddLocationModal(true);
  }, []);
  const onAddLocationClosed = useCallback(() => {
    setAddLocationModal(false);
  }, []);
  const onFacilityTimeClosed = useCallback(() => {
    setFacilityTimeModal(false);
  }, []);


  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: '#f2f2f2'
    }}>
      <Layout>
        <Modal
          show={showAddLocationModal}>
          <LocationForm cancled={onAddLocationClosed}/>
        </Modal>
        <Modal
          show={showFacilityTimeModal}
          modalClosed={onFacilityTimeClosed}>
          Facility
        </Modal>
        <Header clicked={addLocationClickHandler} />
        <ManageLocations />
      </Layout>
    </div>
  );
}

export default App;
