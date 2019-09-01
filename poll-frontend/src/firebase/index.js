import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyDVxpjoQm-24JZG6uPWkp2WefVmDL8bRwM",
    authDomain: "amtolitfirebase.firebaseapp.com",
    databaseURL: "https://amtolitfirebase.firebaseio.com",
    projectId: "amtolitfirebase",
    storageBucket: "gs://amtolitfirebase.appspot.com",
    messagingSenderId: "739886085107",
    appId: "1:739886085107:web:f86fe18cc9d03796"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage()

  export {
      storage, firebase as default
  }