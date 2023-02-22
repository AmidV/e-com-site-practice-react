import { initializeApp  } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';
import { 
    getFirestore, 
    doc, 
    getDoc,
    setDoc 
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBC53H0W_XAUDSOKo1fOA2-RnoaHPySdAY",  
    authDomain: "e-crown-practice-db.firebaseapp.com",  
    projectId: "e-crown-practice-db",  
    storageBucket: "e-crown-practice-db.appspot.com",  
    messagingSenderId: "263246194182",  
    appId: "1:263246194182:web:5c581ac32b5ae0f6e34587"  
  };
     
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup( auth, provider );

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('Error creating a new user:', error.message);
        }
    }

    return userDocRef;
  };
