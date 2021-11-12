import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken } from "firebase/auth"
import initializeAuthentication from "../Firebase/Firebase-init";
initializeAuthentication()
const UseFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin ,setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth()
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('')
          const newUser = {email, displayName: name}
          setUser(newUser)
          console.log(userCredential.user)
          //save user to database
          saveUser(email, name)
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {}).catch((error) => {
            
          });
          history.replace('/')
        })
        .catch((error) => {
          
          setAuthError(error.message)
          // ..
        }) 
        .finally(() => setIsLoading(false)) 
    }
    // is admin 
    useEffect(() => {
      fetch(`https://calm-gorge-61039.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    }, [user.email])
    // sign in with google
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = (location, history) => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setAuthError('')
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            const destination = location?.state?.from || '/'
            history.replace(destination)
            // ...
          }).catch((error) => {
            setAuthError(error.message)
            
          }).finally(() => setIsLoading(false));
        
    }
    const logIn = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/'
            history.replace(destination)
            setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false)) ;
    }
    // observe user state
    useEffect(() => {
        const unSubscirbe = onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            getIdToken(user)
            .then(idToken => {
              setToken(idToken)
            })
            } else {
              setUser({})
            }
            setIsLoading(false)
          })
          return () => unSubscirbe;
    }, [])
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            //sign out success
        }).catch((error) => {
            setAuthError(error.message)
        })
        .finally(() => setIsLoading(false))
    }
    const saveUser = (email, displayName) => {
        const user = {email, displayName}
        fetch('https://calm-gorge-61039.herokuapp.com/users', {
          method: 'POST', 
          headers : {'content-type': 'application/json'}, 
          body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }


    return {
        user,
        admin,
        isLoading,
        registerUser,
        signInWithGoogle, 
        logIn,
        logOut,
        authError, 
        token
    }
}
export default UseFirebase;