
import { initializeApp } from 'firebase/app'
import {
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    onAuthStateChanged,
} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  /*  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL
    */
   apiKey : "AIzaSyChQw21EUzyczhjyW0FlWL5-x5s86fPsVs"
    , authDomain : "business-card-maker-bde46.firebaseapp.com"
    , projectId : "https://business-card-maker-bde46-default-rtdb.firebaseio.com"
    , databaseURL : "business-card-maker-bde46"

  };

const firebaseApp = initializeApp(firebaseConfig)

class AuthService {
  login(providerName) {
    let provider
    if (providerName === 'Google') provider = new GoogleAuthProvider()
    if (providerName === 'Github') provider = new GithubAuthProvider()
    const auth = getAuth()
    return signInWithPopup(auth, provider)
  }

  logout(){
    //firebase.auth().signOut();
  }

 /* onAuthChange(onUserChanged) {
    return onAuthStateChanged(user => {
      onUserChanged(user);
    })
  } */
}

export default AuthService