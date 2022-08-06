import {initializeApp} from 'firebase/app';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from 'firebase/auth';
import {
    toastErrorNotify,
    toastSuccessNotify,
    toastWarnNotify,
} from './toastNotify';
import {getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const database = getDatabase(app);

export const createUser = async (email, password, navigate, displayName) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        //? kullanıcı profilini güncellemek için kullanılan firebase metodu
        await updateProfile(auth.currentUser, {
            displayName: displayName,
        });
        toastSuccessNotify('Registered successfully!');
        navigate('/');
        console.log(userCredential);
    } catch (err) {
        toastErrorNotify(err.message);
    }
};


//! Email/password ile girişi enable yap
export const signIn = async (email, password, navigate) => {
    //? mevcut kullanıcının giriş yapması için kullanılan firebase metodu
    try {
        let userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        navigate('/');
        toastSuccessNotify('Logged in successfully!');
        // sessionStorage.setItem('user', JSON.stringify(userCredential.user));
        console.log(userCredential);
    } catch (err) {
        toastErrorNotify(err.message);
        console.log(err);
    }
};

export const userObserver = (setCurrentUser) => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser({
                id: user.uid,
                name: user.displayName,
                email: user.email
            });
        } else {
            // User is signed out
            setCurrentUser(undefined);
        }
    });
};

export const logOut = () => {
    signOut(auth);
};


export const signUpProvider = (navigate) => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    //? Açılır pencere ile giriş yapılması için kullanılan firebase metodu
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
            navigate('/');
            toastSuccessNotify('Logged in successfully!');
        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error);
        });
};

export const forgotPassword = (email) => {
    //? Email yoluyla şifre sıfırlama için kullanılan firebase metodu
    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            toastWarnNotify('Please check your mail box!');
            // alert("Please check your mail box!");
        })
        .catch((err) => {
            toastErrorNotify(err.message);
            // alert(err.message);
            // ..
        });
};