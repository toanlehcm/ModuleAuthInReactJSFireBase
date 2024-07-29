// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase/compat/app';

// Configure Firebase.
const firebaseConfig = {
  apiKey: 'AIzaSyCVciy0imK-HCeA9fJDTtRHhSeIpRxuWS4',
  authDomain: 'authreactjsfirebaseui.firebaseapp.com',
  // ...
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth }
export default firebaseApp