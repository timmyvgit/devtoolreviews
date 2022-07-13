import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNl23meyMFYEOwkPDB59CWdeih4swcUls",
    authDomain: "devtoolreviews-b0f38.firebaseapp.com",
    projectId: "devtoolreviews-b0f38",
    storageBucket: "devtoolreviews-b0f38.appspot.com",
    messagingSenderId: "164485533026",
    appId: "1:164485533026:web:1527c45677a71e7e55b03b"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }