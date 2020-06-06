import React, { useState, useCallback, useEffect } from 'react';
import Layout from './hoc/Layout/Layout';
import Header from './components/UI/Header/Header';
import Modal from './components/UI/Modal/Modal';
import ManageLocations from './containers/ManageLocations/ManageLocations';
import LocationForm from './containers/Forms/LocationForm/LocationForm';
import { useIndexedDB } from 'react-indexed-db';
import { DBConfig } from './DBConfig.js';
import { initDB } from 'react-indexed-db';
 
initDB(DBConfig);

const App = () => {

  let [showAddLocationModal, setAddLocationModal] = useState(false);
  let [showFacilityTimeModal, setFacilityTimeModal] = useState(false);
  const [locations, setLocations] = useState([]);

  const { add } = useIndexedDB('locations');
  const { getAll } = useIndexedDB('locations');
  
  useEffect(() => {
    getAll().then(locationsFromDB => {
      setLocations(locationsFromDB);
    });
  }, []);

  const addLocationClickHandler = useCallback(() => {
    setAddLocationModal(true);
  }, []);
  const onAddLocationClosed = useCallback(() => {
    setAddLocationModal(false);
  }, []);
  const onFacilityTimeClosed = useCallback(() => {
    setFacilityTimeModal(false);
  }, []);

  const onLocationSave = useCallback((data) => {
    console.log('location save: ', data);
    add(data).then(
      event => {
        // console.log('ID Generated: ', event.target.result);
        setAddLocationModal(false);
      },
      error => {
        alert('error please try again');
      }
    );
  }, [add]);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: '#f2f2f2'
    }}>
      <Layout>
        <Modal
          show={showAddLocationModal}>
          <LocationForm save={onLocationSave} cancled={onAddLocationClosed}/>
        </Modal>
        <Modal
          show={showFacilityTimeModal}
          modalClosed={onFacilityTimeClosed}>
          Facility
        </Modal>
        <Header clicked={addLocationClickHandler} />
        <ManageLocations locations={locations}/>
      </Layout>
    </div>
  );
}

export default App;
