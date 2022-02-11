import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile, onAuthStateChanged,  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Shared/Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState();

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

        })
        .catch(error=>{ 
            console.log(error.message)
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
                updateProfile(auth.currentUser, {displayName: displayName})
                .then(() => {
                }).catch((error) => {
                });
            }

        })
        .catch(error=>{
            console.log(error.message)
        })
        // setUserName(displayName)
    };



    //  signed in user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user?.email){
                setUser(user);
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
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          console.log(error.message);
        });
    }



    return{
        googleSignInMethod,
        emailPassRegisterMethod,
        signInUsingUserPassword,
    }
};

export default useFirebase;
