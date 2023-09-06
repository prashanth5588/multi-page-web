

const firebaseConfig = {
    apiKey: "AIzaSyB5LoFZffpe_hAb9mJR0LYH5e_YcW65LaE",
    authDomain: "multipageapplication.firebaseapp.com",
    databaseURL: "https://multipageapplication-default-rtdb.firebaseio.com",
    projectId: "multipageapplication",
    storageBucket: "multipageapplication.appspot.com",
    messagingSenderId: "544324576644",
    appId: "1:544324576644:web:506b3832e76f39f62ba9d1",
    measurementId: "G-SMW26R3MXK"
  };
  
  // Initialize Firebase


 firebase.initializeApp(firebaseConfig);

 userName = localStorage.getItem("userName");
 mobileNumber = localStorage.getItem("mobile");
 password = localStorage.getItem("password");
 gender = localStorage.getItem("gender");
 documents = localStorage.getItem("documents");
 account = localStorage.getItem("account");

 console.log(userName);

 let containerElement = document.getElementById("detailsEle");

 let valuesArray = [userName,mobileNumber, password, gender, documents, account]

 function deatails() {

    let paraElement = document.createElement("p");
    paraElement.textContent = "prashanth"

    console.log(paraElement);
    
    containerElement.appendChild(paraElement);
    

 }

 deatails();

 function addItem() {
    itemName = document.getElementById("item_name").value;

    firebase.database().ref("/").child(itemName).update({
        purpose: "adding Item name" 
    });

    localStorage.setItem("itemName",itemName);
 }
  
