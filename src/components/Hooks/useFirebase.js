import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile, onAuthStateChanged,signOut  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Shared/Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState();
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();


    // google sign in method
    const googleSignInMethod = () =>{
        
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            // setUser(result.user)
            // const locationTrack = location?.state?.from || "/";
            // history.push(locationTrack);
            // saveUsers(result?.user?.email, result?.user?.displayName, 'PUT' )
            console.log(result.user)
            setAuthError('')

        })
        .catch(error=>{ 
            setAuthError(error.message)
        })
        // .finally(()=>setLoading(false))
    };


    // email password register in method
    const emailPassRegisterMethod = (email, password, displayName) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential=>{
            if(userCredential.user?.email){
                const newUser = {displayName, email};
                setUser(newUser);
                setAuthError('');
                updateProfile(auth.currentUser, {displayName: displayName})
                .then(() => {
                })
                .catch((error) => {
                    setAuthError(error.message)
                });
            }

        })
        .catch(error=>{
            setAuthError(error.message);
        })
        // setUserName(displayName)
    };



    //  signed in user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user?.email){
                setUser(user);
                setAuthError('');
            }
            else{
                setUser({});
            }
        })
        return unsubscribe;
    },[auth])


    // const setUserName = (displayName) =>{
    //     updateProfile(auth.currentUser, {displayName: displayName})
    //     .then((a) => {
    //         console.log(a)
    //         console.log(updateProfile(auth.currentUser))
    //     })
    // }


    // email password sign in method
    const signInUsingUserPassword = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          setAuthError('');
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
            setAuthError(error.message);
        });
    }


    // sign out method
     const logOut = () =>{
        signOut(auth).then(() => {
            setAuthError('')
            setUser({})
        }).catch((error) => {
          // An error happened.
          setAuthError(error.message);
        });
     }


    return{
        googleSignInMethod,
        emailPassRegisterMethod,
        signInUsingUserPassword,
        user,
        logOut,
    }
};

export default useFirebase;
