import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHXgS31xDJfkUztLoeqrGqCfFV9AhjTsE",
  authDomain: "shopify-ecommerce.firebaseapp.com",
  databaseURL: "https://shopify-ecommerce.firebaseio.com",
  projectId: "shopify-ecommerce",
  storageBucket: "shopify-ecommerce.appspot.com",
  messagingSenderId: "588814448166",
  appId: "1:588814448166:web:d94a71f98310ed436b98e7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
