const app = angular.module("app", ["oc.lazyLoad", "ui.router", "angularCSS", "ngAnimate"]);

//firebase auth
firebase.initializeApp({
  apiKey: "AIzaSyA-Q8d34UTHpaPVlM3lWdH2QLj5P7R5yqw",
  authDomain: "fawn-test.firebaseapp.com",
  databaseURL: "https://fawn-test.firebaseio.com",
  projectId: "fawn-test",
  storageBucket: "fawn-test.appspot.com",
  messagingSenderId: "931880964179"
});

