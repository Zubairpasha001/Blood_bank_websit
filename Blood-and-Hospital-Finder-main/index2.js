let ok = 3;
console.log("ok")
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
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var say_something = document.getElementById('say_something').value
    var favourite_food = document.getElementById('favourite_food').value
   
  
    database.ref('users/' + username).set({
      email : email,
      password : password,
      username : username,
      say_something : say_something,
      favourite_food : favourite_food
    })
  
    alert('Saved')
  }
  
  document.getElementById("get").onclick = function(){
   
    var username = document.getElementById('username').value
    console.log("ok")
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()

   // alert(data.email)
    document.getElementById("count").innerHTML = data.email;
    console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
    //console.log(data.favourite_food);
  
    })
  }


  function get() {
    var username = document.getElementById('username').value
    console.log("ok")
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      document.getElementById("count").innerHTML = data.email;
     // alert(data.email)
      console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
      console.log(data.favourite_food);
  
    })
    alert(data.email)
    
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }
