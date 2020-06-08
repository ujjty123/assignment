import React, { useState, useCallback, useEffect } from 'react';
import Layout from './hoc/Layout/Layout';
import Header from './components/UI/Header/Header';
import Modal from './components/UI/Modal/Modal';
import ManageLocations from './containers/ManageLocations/ManageLocations';
import LocationForm from './containers/Forms/LocationForm/LocationForm';
import FacilityTimeForm from './containers/Forms/FacilityTimeForm/FacilityTimeForm';
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
  const { deleteRecord } = useIndexedDB('locations');
  const { update } = useIndexedDB('locations');

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

  const onFacilityTimeFocus = useCallback(() => {
    setFacilityTimeModal(true);
  }, []);

  const onLocationSave = useCallback((data) => {
    add(data).then(
      event => {
        setAddLocationModal(false);
        getAll().then(locationsFromDB => {
          setLocations(locationsFromDB);
        });
      },
      error => {
        alert('error please try again');
      }
    );
  }, [add, getAll]);

  const onLocationDelete = useCallback((data) => {
    deleteRecord(data.id).then(event => {
      getAll().then(locationsFromDB => {
        setLocations(locationsFromDB);
      });
    });
  }, [deleteRecord, getAll]);

  const onLocationUpdate = useCallback((data) => {
    delete data.tableData;
    update(data).then(event => {
      console.log('Edited!');
    });
  }, [update]);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: '#f2f2f2'
    }}>
      <Layout>
        <Modal
          show={showAddLocationModal}
          form ="Location">
          <LocationForm
            save={onLocationSave}
            cancled={onAddLocationClosed}
            facilityFocus={onFacilityTimeFocus} />
        </Modal>
        <Modal
          show={showFacilityTimeModal}
          form ="Facility">
          <FacilityTimeForm
            cancled={onFacilityTimeClosed}
          />
        </Modal>
        <Header clicked={addLocationClickHandler} />
        <ManageLocations
          locations={locations}
          deleteLocation={onLocationDelete}
          updateLocation={onLocationUpdate}
        />
      </Layout>
    </div>
  );
}

export default App;
