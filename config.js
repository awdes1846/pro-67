import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD44o76_-o363rbyvCjP3vGOyQAKDaFcxc",
    authDomain: "pro-67-8b2e9.firebaseapp.com",
    projectId: "pro-67-8b2e9",
    storageBucket: "pro-67-8b2e9.appspot.com",
    messagingSenderId: "567116213557",
    appId: "1:567116213557:web:680a0d44c55ebce3b5307c"
  };
  
  // Initialize Firebase
  firebaseConfig  = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();