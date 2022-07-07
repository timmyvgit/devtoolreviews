import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPf4j-6_qBLL0VAvM9Ulcpefc5Sgtd5xI",
  authDomain: "devtoolreviews.firebaseapp.com",
  databaseURL: "https://devtoolreviews-default-rtdb.firebaseio.com",
  projectId: "devtoolreviews",
  storageBucket: "devtoolreviews.appspot.com",
  messagingSenderId: "450877033597",
  appId: "1:450877033597:web:f7b2404655cc7a3412b514"
})

const  db = firebaseApp.firestore()

const auth = firebase.auth()

export {}