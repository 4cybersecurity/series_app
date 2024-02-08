import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    projectId: process.env.REACT_APP_projectId,
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// A firebase method to create a user
export const createUser = async (email, password) => {
    try {
        let userCredential
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log(userCredential);
    } catch (err) {
        console.log(err.message);
    }


};

