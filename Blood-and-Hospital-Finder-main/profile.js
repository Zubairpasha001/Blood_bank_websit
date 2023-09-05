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
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var age = document.getElementById('age').value
    var gender = document.getElementById('gender').value
    var bio = document.getElementById('bio').value
   
    database.ref('users/' + username).set({
      name : name,
      email : email,
      password : password,
      age : age,
      gender : gender,
      bio : bio
    })
  
    alert('Saved')
  }
  document.getElementById("save").onclick = function(){
  window.location.href="in.html"
   
    var age = document.getElementById('age').value
    console.log("ok")
    var user_ref = database.ref('users/' + age)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()

   // alert(data.email)
    document.getElementById("count").innerHTML = data.email;
    console.log(Number(data.email)  *(gender) * Number(data.password));
    //console.log(data.favourite_food);
  
    })
  }


  function get() {
    var age = document.getElementById('age').value
    console.log("ok")
    var user_ref = database.ref('users/' + age)
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
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + name).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var name = document.getElementById('name').value
  
    database.ref('users/' + name).remove()
  
    alert('deleted')
  }
