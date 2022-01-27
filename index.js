// import our restraunts 
const restraunts = require('./restraunts.json');

//import a set of tools to talk to firebase and firestore

const { initializeApp, applicationDefault, cert} = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require ('firebase-admin/firestore');

//import our credentials
const credentials = require('./credentials.json');
// const { Certificate } = require('crypto');

// connect to Firestore services
initializeApp({
    credential: cert(credentials)
});
// connect to firestore 
const db = getFirestore();

// create a collection called "restraunts"


// add each restraunts
db.collection('restraunts').add(restraunts[1])
 .then(doc => {
     console.log('Added Restraunt', doc.id)
 })
 .catch(err => {console.error(err)
});