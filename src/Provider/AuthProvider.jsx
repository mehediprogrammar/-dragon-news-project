import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase_confige";

export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const [loding, setLoding] = useState(true)


     const createUser = (email, password) =>{
        setLoding(true)
         return createUserWithEmailAndPassword(auth, email, password);
     }

     const sinIn = (email, password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password);
     }


     const logOut = () => {
          setLoding(true)
        return signOut(auth)
       
        
     }


    useEffect(()=>{
         const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user in the auth state changed', currentUser)
            setUser(currentUser)
            setLoding(false)

           });
           return () =>{
            unSubscribe ();
           }

    },[])




    const AuthInfo = {
         user, 
         loding,
         createUser,
         sinIn,
         logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;