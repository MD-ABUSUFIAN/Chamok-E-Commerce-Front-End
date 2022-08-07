import { useEffect, useState } from "react";
import {signInWithPopup,signOut,signInWithEmailAndPassword,createUserWithEmailAndPassword , getAuth,GoogleAuthProvider,GithubAuthProvider,onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail} from "firebase/auth";
import firebaseInitialization from "../Pages/Firebase/firebase.init";
firebaseInitialization()





const useFirebase=()=>{
    const auth = getAuth(); 
    const [user,setUser]=useState([]);
    const[error,setError]=useState('');
    


//Email Registation Authentication
const emailRegister=(data)=>{
  createUserWithEmailAndPassword (auth, data?.email, data?.password,data?.displayName)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user)
    emailVarification()
    setError('')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    setError(error.message) 
  })}

  //Email Varification

  const emailVarification=()=>{
    sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log("varification send your email")
  });
  };

  //Password reset

  const resetPassword=(email)=>{
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('reset password',email)
      })
      .catch((error) => {
       
        setError(error.message)
        // ..
      });
  }


  //Email Login Authentication

  const emailLogin=(data)=>{
    signInWithEmailAndPassword(auth, data.email,data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user)
    setError('')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    setError(error.message)
  });
  }

  

//google Login Authentication
const googleLogin=()=>{
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    setUser(result.user) 
    setError('')
  }).catch((error) => {
    setError(error.message)
  })}

  //gitHub Login Authentication
  const gitHubLogin=()=>{
    const gitHubProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitHubProvider)
   .then((result) => {
    setUser(result.user)
    setError('')
  }).catch((error) => {
    setError(error.message)
  })}



//on-Auth state change observer

useEffect(()=>{
  const unsubcribe=onAuthStateChanged(auth, (user) => {
    if (user) {
        setUser(user)
    } else {
      setUser({})
    }
  });

  return ()=>unsubcribe;
},[])

  //Logout Authentication
  const logOut=()=>{
    signOut(auth).then(() => {
      setUser({})
     }).catch((error) => {
   setError(error.message)});
   
  }

return{
    user,
    error,
    emailRegister,
    emailLogin,
    googleLogin,
    gitHubLogin,
    logOut,
    resetPassword
}
}
export default useFirebase;