import firebase from "./FirebaseConfig";

const auth = firebase.auth();

const registerUser = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

const loginUser = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
};

const logoutUser = () => {
    return auth.signOut();
};

const resetPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
};

const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider);
};

const subscribeToAuthChanges = (callback) => {
    return auth.onAuthStateChanged((user) => {
        callback(user);
    });
};

const FireBaseAuthService = {
    registerUser,
    loginUser,
    logoutUser,
    resetPassword,
    loginWithGoogle,
    subscribeToAuthChanges,
};

export default FireBaseAuthService;
