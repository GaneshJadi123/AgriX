import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyCyMMUK-ySiuqAstYvasmcB1K8n5Y-B52U",
  
    authDomain: "agrixj.firebaseapp.com",
  
    projectId: "agrixj",
  
    storageBucket: "agrixj.firebasestorage.app",
  
    messagingSenderId: "471959368254",
  
    appId: "1:471959368254:web:68cc677b79e517c425d76f",
  
    measurementId: "G-Z75CF8PCPT"
  
  };

export default firebase.initializeApp(firebaseConfig)