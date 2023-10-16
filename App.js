// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

console.log("tttttttttttttttttttttttt");

// Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAf0mMFgOI87zqmI_vkzzM1uPCCmj9NwJI",
    authDomain: "test-23ade.firebaseapp.com",
    projectId: "test-23ade",
    storageBucket: "test-23ade.appspot.com",
    messagingSenderId: "550122100809",
    appId: "1:550122100809:web:b9bd2c21139cc2f2b08798",
    measurementId: "G-JQVZEN48NR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("ttttttttt")
// messaging
const messaging = getMessaging();
const vapidKey = 'BPcAOx9D58yJ_2N4VV1ISgjw79fyVr2PSwGJ6qONV-5NBoY_oujXuCsNCpPB28ML3_itCVzIZ0Vm9u6RWIFaHGo'
getToken(messaging, { vapidKey: vapidKey }).then((currentToken) => {
if (currentToken) {
    // 取得 currentToken，需傳回 server
    console.log('get currentToken');
    console.log(currentToken);
} else {
    console.log('No registration token available. Request permission to generate one.');
}
}).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
});

document.addEventListener('DOMContentLoaded', function() {
const loadEl = document.querySelector('#load');
// // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
// // The Firebase SDK is initialized and available here!
//
// firebase.auth().onAuthStateChanged(user => { });
// firebase.database().ref('/path/to/ref').on('value', snapshot => { });
// firebase.firestore().doc('/foo/bar').get().then(() => { });
// firebase.functions().httpsCallable('yourFunction')().then(() => { });
// firebase.messaging().requestPermission().then(() => { });
// firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
// firebase.analytics(); // call to activate
// firebase.analytics().logEvent('tutorial_completed');
// firebase.performance(); // call to activate
//
// // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

try {
    let app = firebase.app();
    let features = [
      'auth', 
      'database', 
      'firestore',
      'functions',
      'messaging', 
      'storage', 
      'analytics', 
      'remoteConfig',
      'performance',
    ].filter(feature => typeof app[feature] === 'function');
    loadEl.textContent = `Firebase SDK loaded with ${features.join(', ')}`;
    
} catch (e) {
    console.error(e);
    loadEl.textContent = 'Error loading the Firebase SDK, check the console.';
}
});

console.log("tttttttttttttttt");