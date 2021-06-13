import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVP6DGr41mxlp45ociEpPINxoljuSrgGM",
    authDomain: "crwn-db-a3621.firebaseapp.com",
    projectId: "crwn-db-a3621",
    storageBucket: "crwn-db-a3621.appspot.com",
    messagingSenderId: "761019109673",
    appId: "1:761019109673:web:20cc6747dc58bb57f4e738",
    measurementId: "G-CC7BNK26HC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) {
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData });
        }
        catch (error) {
            console.log('error creating user ', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;