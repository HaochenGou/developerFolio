import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as serviceWorker from "./serviceWorker";

const firebaseConfig = {
    apiKey: "AIzaSyAeCAI8OO1creP22V6Qe3NRRNTJBkLtQTs",
    authDomain: "canadian-website-design-40f4e.firebaseapp.com",
    databaseURL: "https://canadian-website-design-40f4e-default-rtdb.firebaseio.com",
    projectId: "canadian-website-design-40f4e",
    storageBucket: "canadian-website-design-40f4e.appspot.com",
    messagingSenderId: "180584071825",
    appId: "1:180584071825:web:cd5b704c186d75fb34f530",
    measurementId: "G-M1C147D6JP"
  };
  

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
