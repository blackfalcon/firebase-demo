import firebase from 'firebase';

firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
});

// Validate that .env variables are seen in the app
// console.log(process.env.REACT_APP_API_KEY)
