// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyCSLXM28S1OISklTZaHQhVN8_nmfIHKRfc',
  authDomain: 'learning-nestjs-80fc0.firebaseapp.com',
  projectId: 'learning-nestjs-80fc0',
  storageBucket: 'learning-nestjs-80fc0.appspot.com',
  messagingSenderId: '542797643826',
  appId: '1:542797643826:web:dcf42755ffc7adf1063c2b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDatabase = getDatabase(app);
