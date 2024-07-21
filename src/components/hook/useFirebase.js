import {
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    GithubAuthProvider, 
    signOut,} from "firebase/auth";
import { useState } from "react";

import firebaseInitialize from "../Firebase/firebase.init";

firebaseInitialize();




const useFirebase = () => {
       
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    // const [admin, setAdmin] = useState(false);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

//google
    const signInWithGoogle = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
           
  // Github
    const signInWithGithub = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setAuthError('');
                const destination = location?.state?.from || '/ourServices';
                navigate(destination);

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    
    //log-out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })

            .finally(() => setIsLoading(false));

    }           
     
    return {
        user,
        isLoading,
        authError,
        signInWithGoogle,
        signInWithGithub,
        logOut


    }
};

export default useFirebase;