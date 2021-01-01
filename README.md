## 2 lazy to set up a env file for a complete project so follow these steps

### Step 1
> git clone 
### Step 2
> from root 
> mkdir src/firebase
> touch src/firebase/firebase.js
### Step 3
> inside of src/firebase/firebase.js
> copy paste this crap

> import firebase from "firebase/app";
> import "firebase/firestore";

> const firebaseConfig = {
>   apiKey: 
>   authDomain: 
>   databaseURL: 
>   projectId: 
>   storageBucket: 
>   messagingSenderId: 
>   appId: "1",
>   measurementId: ""
> };
> // Initialize Firebase
> firebase.initializeApp(firebaseConfig);
> 
> export const firestore = firebase.firestore();
> 
> export default firebase;

### Step 4?
> I mean i dont use this project anymore sooo idk what Im doing next but hey she should be good to go.
> like a well cared for 97' buick, does she run....mmmm kinda but hey. She runs.