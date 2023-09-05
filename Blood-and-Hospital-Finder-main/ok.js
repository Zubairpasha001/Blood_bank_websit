let ok =3;
console.log("ik")



var firebaseConfig = {
  apiKey: "AIzaSyAH53QqQuTJDq0uA7z8WIqTPYsCCZcGBYo",
  authDomain: "st-project-6e221.firebaseapp.com",
  databaseURL: "https://st-project-6e221-default-rtdb.firebaseio.com",
  projectId: "st-project-6e221",
  storageBucket: "st-project-6e221.appspot.com",
  messagingSenderId: "945216389510",
  appId: "1:945216389510:web:75198665418fa7230a6c07",
  measurementId: "G-B4XZ8KK9J5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  

  
  function get() {
    var username = 11;
    
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      
      //alert(data.email)
      document.getElementById("count").innerHTML = data.email;
      document.getElementById("count2").innerHTML = data.password;
      document.getElementById("count3").innerHTML = data.username;
      document.getElementById("count4").innerHTML = data.say_something;
      console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
      console.log(data.favourite_food);
  
    })
    alert(data.email)
    
  }
  
 
 get();

 document.getElementById("Blood").onclick = function(){
  window.location.href="a.html"
 }