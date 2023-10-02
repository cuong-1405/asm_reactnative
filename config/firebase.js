// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWW-Qohq4Y_hrhqA7nZUCqzbUVRoq7vKk",
  authDomain: "reactnative-aee5d.firebaseapp.com",
  projectId: "reactnative-aee5d",
  storageBucket: "reactnative-aee5d.appspot.com",
  messagingSenderId: "449332794664",
  appId: "1:449332794664:web:2c420ea9b6fe398f3f6c1d",
  measurementId: "G-SE4H2X0L4J",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = getAuth(app);
const app = firebase.initializeApp(firebaseConfig);
export default app;
