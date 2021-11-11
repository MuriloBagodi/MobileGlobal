// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFyGNmgL94s3cyvGHKIcAHSHDLgRWgpqA",
  authDomain: "chalengeglobal.firebaseapp.com",
  projectId: "chalengeglobal",
  storageBucket: "chalengeglobal.appspot.com",
  messagingSenderId: "238280142634",
  appId: "1:238280142634:web:7418103d1dea9283097853",
  measurementId: "G-C5WP3YWYGC"
};

let app;
if(firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig)
    console.log('Firebase Initialized')
}else{
    app = firebase.app()
}


const auth = firebase.auth()

export {auth}
