import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication()
const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

   //google 
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
    }
    
    //github
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
            })

    }

// email-password
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
    }




useEffect( () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
           setUser(user)
        } 
        else {
            setUser({})
        }
    });
}, [auth])



    const logOut = () => {
        signOut(auth)
        .then(() => { })
    }



return {
    user,
    signInWithGoogle,
    signInWithGithub,
    logOut,
    processLogin

}
};


export default useFirebase;