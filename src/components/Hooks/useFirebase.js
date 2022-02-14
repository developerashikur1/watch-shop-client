import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile, onAuthStateChanged,signOut, getIdToken  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Shared/Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState();
    const [authError, setAuthError] = useState('');
    const [loading, setLoading] = useState(true);
    const [token, setToken]  = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // google sign in method
    const googleSignInMethod = (location, navigate) =>{
        setLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const direct = location.state?.from ? location.state?.from : '/';
            navigate(direct);
            saveUser(result?.user?.email, result?.user?.displayName, 'PUT' )
            console.log(result.user)
            setAuthError('')

        })
        .catch(error=>{ 
            setAuthError(error.message)
        })
        .finally(()=>setLoading(false))
    };


    // email password register in method
    const emailPassRegisterMethod = (email, password, displayName, navigate) =>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential=>{
            // if(userCredential.user?.email){
                const newUser = {displayName, email};
                setUser(newUser);
                saveUser(email, displayName, 'POST')
                setAuthError('');
                updateProfile(auth.currentUser, {displayName: displayName})
                .then(() => {
                })
                .catch((error) => {
                    setAuthError(error.message)
                });
                navigate('/');
                console.log(userCredential.user)
            // }else{
            //     return;
            // }

        })
        .catch(error=>{
            setAuthError(error.message);
        })
        // setUserName(displayName)
        .finally(()=>setLoading(false))
    };



    //  signed in user
    useEffect(()=>{
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            if(user?.email){
                setUser(user)
                getIdToken(user)
                .then(idToken=>{
                    setToken(idToken)
                })
                setAuthError('')

            }
            else{
                setUser({});
            }
            setLoading(false)
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
    const signInUsingUserPassword = (email, password, location, navigate) =>{
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          setAuthError('');
          const user = userCredential.user;
          console.log(user)
          // ...
        //   redirect after login 
        if(userCredential.user?.email){
                const direct = location.state?.from ? location.state?.from : '/';
                navigate(direct);
        }

        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=>setLoading(false))
    }


    // sign out method
     const logOut = () =>{
         setLoading(true)
        signOut(auth).then(() => {
            setAuthError('')
            setUser({})
        }).catch((error) => {
          // An error happened.
          setAuthError(error.message);
        })
        .finally(()=>setLoading(false))
     }


    //  save user to database
    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('https://glacial-escarpment-72720.herokuapp.com/users',{
            method:method,
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>setAdmin(data))
    }

    // get admin
    useEffect(()=>{
        fetch(`https://glacial-escarpment-72720.herokuapp.com/users/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data))
        
    },[user?.email])


    return{
        googleSignInMethod,
        emailPassRegisterMethod,
        signInUsingUserPassword,
        user,
        logOut,
        loading,
        token,
        authError,
        admin,
    }
};

export default useFirebase;
