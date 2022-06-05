import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyCDtIRyfuTPhOk6i1PjUYiCc4JFn0hHsFY",
    authDomain: "netflix-678c0.firebaseapp.com",
    projectId: "netflix-678c0",
    storageBucket: "netflix-678c0.appspot.com",
    messagingSenderId: "846749465990",
    appId: "1:846749465990:web:e2665a3e11f3558a1c0007",
    measurementId: "G-SE8B2769Y2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export { storage };