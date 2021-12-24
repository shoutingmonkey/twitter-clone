import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC-nXo3v8TEob9gb2744jT0PdSoqOlFI0k",
  authDomain: "linkedin-clone-7e9b6.firebaseapp.com",
  databaseURL: "https://linkedin-clone-7e9b6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "linkedin-clone-7e9b6",
  storageBucket: "linkedin-clone-7e9b6.appspot.com",
  messagingSenderId: "287033765118",
  appId: "1:287033765118:web:a9436f4690a5998a0049af"
};

    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;