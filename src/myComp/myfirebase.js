import firebase from "firebase/compat/app";
import 'firebase/compat/database';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDyJBWaWkJ3eUD03N8av0kjplL_Yjouq0Q",
  authDomain: "quickshare-9b0be.firebaseapp.com",
  databaseURL: "https://quickshare-9b0be-default-rtdb.firebaseio.com",
  projectId: "quickshare-9b0be",
  storageBucket: "quickshare-9b0be.appspot.com",
  messagingSenderId: "767909244875",
  appId: "1:767909244875:web:61283d8c640f023a20d04e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export const storage = firebase.storage();
export default firebase
