/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { app } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    // google login
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider);
    };

    // create new user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // log out
    const logOut = () => {
        return signOut(auth).then(() => setUser(null));
    };

    // manage user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoading(false);
                // console.log(currentUser);
            } else {
                setLoading(false);
            }
        });
        return () => unsubscribe()
    }, []);

    const authInfo = { googleLogin, createUser, logIn, logOut, user, loading };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};


export default AuthProvider;