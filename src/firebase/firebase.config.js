import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAJAoCdq4GB-BdKAnQxNuku3YYdsftLis",
  authDomain: "iit-bd.firebaseapp.com",
  projectId: "iit-bd",
  storageBucket: "iit-bd.firebasestorage.app",
  messagingSenderId: "664835907536",
  appId: "1:664835907536:web:ac6c6a9fb8870aeeb5a3d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;