import * as firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_PORTFOLIO_APP_KEY,
  authDomain: process.env.REACT_APP_PORTFOLIO_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PORTFOLIO_PROJECT_ID,
  storageBucket: process.env.REACT_APP_PORTFOLIO_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_PORTFOLIO_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PORTFOLIO_APP_ID,
  measurementId: process.env.REACT_APP_PORTFOLIO_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
