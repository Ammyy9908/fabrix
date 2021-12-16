import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyArbGCaoC5bKOoWJs4EHLkF3y0WqT62r8g",
    authDomain: "fabrik-6abc8.firebaseapp.com",
    projectId: "fabrik-6abc8",
    storageBucket: "fabrik-6abc8.appspot.com",
    messagingSenderId: "46499430783",
    appId: "1:46499430783:web:179ceb2a610fbd72785a4a",
    measurementId: "G-P6RSEM7WWF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const storage = firebaseApp.storage();
  export {storage};