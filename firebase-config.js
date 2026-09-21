import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB25VaErJEsI3VLBeb52cpczKRmEWC4fEs",
    authDomain: "pak-earning-site.firebaseapp.com",
    projectId: "pak-earning-site",
    storageBucket: "pak-earning-site.firebasestorage.app",
    messagingSenderId: "830671389706",
    appId: "1:830671389706:web:16ab555ffdd85cff70cbf3"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

export { db, collection, addDoc };
