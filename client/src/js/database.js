import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('editorDb')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('editorDb', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// add content to the database
export const putDb = async (content) => {

    // Create a connection to the database database and version we want to use.
    const contactDb = await openDB('editorDb', 1);
  
    // Create a new transaction and specify the database and data privileges.
    const tx = contactDb.transaction('editorDb', 'readwrite');
  
    // Open up the desired object store.
    const store = tx.objectStore('editorDb');
  
    // Use the .add() method on the store and pass in the content.
    return await store.add(content);
 
};

// get all the content from the database
export const getDb = async () => {

    // Create a connection to the database database and version we want to use.
    const contactDb = await openDB('editorDb', 1);
  
    // Create a new transaction and specify the database and data privileges.
    const tx = contactDb.transaction('editorDb', 'readonly');
  
    // Open up the desired object store.
    const store = tx.objectStore('editorDb');
  
    // Use the .getAll() method to get all data in the database.
    return await store.getAll();
};

initdb();
