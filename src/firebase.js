import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAoGsgcMh_bRn7MR8x3yqfM4e0IL_nEt9M",
    authDomain: "lista-de-tareas-47a1a.firebaseapp.com",
    databaseURL: "https://lista-de-tareas-47a1a.firebaseio.com",
    projectId: "lista-de-tareas-47a1a",
    storageBucket: "lista-de-tareas-47a1a.appspot.com",
    messagingSenderId: "793278157560",
    appId: "1:793278157560:web:ea9411988e72be7dd5210d",
    measurementId: "G-HD4M07839Q"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()
  