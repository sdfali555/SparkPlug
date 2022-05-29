const firebaseConfig = {
    apiKey: "AIzaSyDjhFq4srGn9KlifhMiHstBhgAJW1zN7D0",
    authDomain: "sparkplug-dc12e.firebaseapp.com",
    projectId: "sparkplug-dc12e",
    storageBucket: "sparkplug-dc12e.appspot.com",
    messagingSenderId: "1013297197966",
    appId: "1:1013297197966:web:c8e92ab7038a57993a6adf"
  };
  
  firebase.initializeApp(firebaseConfig);
  const auth =  firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
	promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }
  function signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
  }
//   function jump(){
// 	window.location.href("https://shrivastavpiyush23.github.io/Edi-Code/editor.html")
//   }
  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })