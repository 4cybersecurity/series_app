import {initializeApp} from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    sendPasswordResetEmail
} from "firebase/auth";
import {toastErrorNotify, toastSuccessNotify, toastWarnNotify} from "../helpers/ToastNotify";


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
export const createUser = async (email, password, navigate, displayName) => {
    try {
        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        // A firebase method to update a user

        await updateProfile(auth.currentUser, {
            displayName: displayName
        })
        navigate("/");
        toastSuccessNotify("Registered successfully!")
    } catch (err) {
        toastErrorNotify(err.message);
    }
};

export const signIn = async (email, password, navigate) => {
    try {
        let userCredential = await signInWithEmailAndPassword(auth, email, password);
        toastSuccessNotify("Logged in successfully!")
        navigate("/");
    } catch (err) {
        toastErrorNotify(err.message);
    }
};

export const logOut = () => {
    signOut(auth)
        .then((res) => {
            console.log(res);
            toastSuccessNotify("Logged out successfully!")
            // Sign-out successful.
        }).catch((error) => {
        toastErrorNotify(error.message);
        // An error happened.
    });
}

export const userObserver = (setCurrentUser) => {
    //Firebase method that checks if the user signed in or not and if it changes responds the new user.
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user)

        } else {
            setCurrentUser(false)
        }
    });
}

//enable google sign-in
//* => Authentication => settings => Authorized domains => add domain
//! After deploying the project, to use google sign-in add the deploy link to domain list
export const signUpProvider = (navigate) => {
    //firebase method that enables google sign-in
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
            toastSuccessNotify("Logged in successfully!")
            navigate("/");
        }).catch((error) => {
        console.log(error);
        toastErrorNotify(error)
    });

}

export const forgotPassword = (email) => {
    //? A firebase method to reset password by using email
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            toastWarnNotify("Please check your mail box!");
            // alert("Please check your mail box!");
        })
        .catch((err) => {
            toastErrorNotify(err.message);
            // alert(err.message);
            // ..
        });
};
