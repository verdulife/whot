const app = angular.module("app", [
  "oc.lazyLoad",
  "ui.router",
  "angularCSS",
  "ngAnimate"
]);

//firebase auth
firebase.initializeApp({
  apiKey: "AIzaSyDPZFKTsxYUqNShRrTKIj6zPqTsvfq2-Sk",
  authDomain: "whot-app.firebaseapp.com",
  databaseURL: "https://whot-app.firebaseio.com",
  projectId: "whot-app",
  storageBucket: "",
  messagingSenderId: "694627066943"
});
