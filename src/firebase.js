import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCkv4w-tL7bykMmyM9xcZrl84-F_3zcrYA",
    authDomain: "movimientos-suchiar.firebaseapp.com",
    databaseURL: "https://movimientos-suchiar-default-rtdb.firebaseio.com",
    projectId: "movimientos-suchiar",
    storageBucket: "movimientos-suchiar.appspot.com",
    messagingSenderId: "528417293012",
    appId: "1:528417293012:web:1cc50f9003a374d40bf141",
    measurementId: "G-TLV4BME8KJ"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener instancia de Firestore
const firestore = getFirestore(app);

export default firestore;