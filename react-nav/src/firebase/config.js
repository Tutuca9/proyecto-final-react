import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA1gHDHpAyn9YrlI5o3zZulpguZjXiubos",
  authDomain: "reac-nav.firebaseapp.com",
  projectId: "reac-nav",
  storageBucket: "reac-nav.appspot.com",
  messagingSenderId: "344862778091",
  appId: "1:344862778091:web:49b2cd0fc8f6743e0d14ae"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}