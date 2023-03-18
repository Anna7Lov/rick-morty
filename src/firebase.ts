import { initializeApp } from 'firebase/app';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAwv84c8G25hYgcbW3_yUtwzjpJcfhYEGU',
  authDomain: 'rick-morty-c1913.firebaseapp.com',
  projectId: 'rick-morty-c1913',
  storageBucket: 'rick-morty-c1913.appspot.com',
  messagingSenderId: '148344228498',
  appId: '1:148344228498:web:837a41c4473effe8e3744b'
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
export const facebookAuthProvider = new FacebookAuthProvider();
