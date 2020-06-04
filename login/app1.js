var firebaseConfig = {
    apiKey: "AIzaSyCdKtyy9sBsJ9rgatNMv_g_oEFkrmhMXNQ",
    authDomain: "peter-1-9b137.firebaseapp.com",
    databaseURL: "https://peter-1-9b137.firebaseio.com",
    projectId: "peter-1-9b137",
    storageBucket: "peter-1-9b137.appspot.com",
    messagingSenderId: "595599457775",
    appId: "1:595599457775:web:9e1a6d5113c83541058a1a",
    measurementId: "G-K7T63613K4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const auth = firebase.auth();
  var email;
  
  function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("Signed Up");
    closeCurrentTab();
  
  }
  
  
  
  function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    //closeCurrentTab();
    
    //window.location.href = "D:/web/peter1/index.html";
    alert("Signed in as " + email.value);
    //closeCurrentTab();
    
  }
  
  
  function signOut(){
    
    auth.signOut();
    alert("Signed Out");
    closeCurrentTab();
    
  }

  function closeCurrentTab(){
    close();
  }
  
  
auth.onAuthStateChanged(function(user){
    
    if(user){
      
      email = user.email;
      alert("Active User " + email);
      //closeCurrentTab();

      
      //Take user to a different or home page

      //is signed in
      
    }
    else{
      
      alert("No Active User");
      //no user is signed in
    }

  });
  



