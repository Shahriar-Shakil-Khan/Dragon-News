import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] =useState(null);

    const createUser = (email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password);
    }


    const signIn = (email,password)=>{

        return signInWithEmailAndPassword(auth,email,password);

    }


    const logOut=()=>{
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    }, []);

    const authData = { user, setUser, createUser, logOut , signIn };
    return (

            <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>

    );
};

export default AuthProvider;

