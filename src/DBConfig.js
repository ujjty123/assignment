export const DBConfig = {
    name: 'LocationAppDB',
    version: 1,
    objectStoresMeta: [
      {
        store: 'locations',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'locationName', keypath: 'locationName', options: { unique: false } },
          { name: 'address1', keypath: 'address1', options: { unique: false } },
          { name: 'address2', keypath: 'address2', options: { unique: false } },
          { name: 'suiteno', keypath: 'suiteno', options: { unique: false } },
          { name: 'city', keypath: 'city', options: { unique: false } },
          { name: 'state', keypath: 'state', options: { unique: false } },
          { name: 'zip', keypath: 'zip', options: { unique: false } },
          { name: 'phone', keypath: 'phone', options: { unique: false } },
          { name: 'timezone', keypath: 'timezone', options: { unique: false } },
        ]
      }
    ]
  };