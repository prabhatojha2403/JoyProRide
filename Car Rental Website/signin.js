// document.getElementById("signin-form").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     // Perform form validation and sign-in logic here
    
//     // Example: Validate if username and password are not empty
//     var username = document.getElementById("username").value;
//     var password = document.getElementById("password").value;
    
//     if (username === "" || password === "") {
//       alert("Please enter a username and password.");
//       return;
//     }
    
//     // Example: Perform sign-in logic
//     alert("Sign in successful!");
    
//     // You can redirect to another page or perform additional actions here
//   });
  // In-memory database simulation
// var users = [];

// document.getElementById("signin-form").addEventListener("submit", function(event) {
//   event.preventDefault();
  
//   // Perform form validation and sign-in logic here
  
//   // Example: Validate if username and password are not empty
//   var username = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
  
//   if (username === "" || password === "") {
//     alert("Please enter a username and password.");
//     return;
//   }
  
//   // Example: Check if the user exists in the database
//   var existingUser = users.find(function(user) {
//     return user.username === username && user.password === password;
//   });
  
//   if (existingUser) {
//     alert("Sign in successful!");
//   } else {
//     // Example: Add the user to the database
//     users.push({ username: username, password: password });
//     alert("User created successfully!");
//   }
  
//   // You can redirect to another page or perform additional actions here
// });
<!DOCTYPE html>
<html>
<head>
  <title>Main Page</title>
</head>
<body>
  <h1>Welcome to the Main Page!</h1>
  <div id="profile-container"></div>

  <script src="script.js"></script>
</body>
</html>
Next, update the JavaScript code in script.js to include the redirection logic and dynamically create the user's profile on the main page:

javascript
Copy code
document.getElementById("signin-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Perform form validation and sign-in logic here

  // Example: Validate if username and password are not empty
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please enter a username and password.");
    return;
  }

  // Example: Check if the user exists in the database
  var existingUser = users.find(function(user) {
    return user.username === username && user.password === password;
  });

  if (existingUser) {
    alert("Sign in successful!");

    // Redirect to the main page
    window.location.href = "main.html";
  } else {
    // Example: Add the user to the database
    users.push({ username: username, password: password });
    alert("User created successfully!");

    // Redirect to the main page
    window.location.href = "main.html";
  }
});

// Check if the user is signed in on the main page
if (window.location.pathname === "/main.html") {
  // Example: Get the signed-in user from the database (you would typically use server-side code for this)
  var signedInUser = users[users.length - 1]; // Assuming the last user in the array is the signed-in user

  // Example: Create the user's profile on the main page
  var profileContainer = document.getElementById("profile-container");
  var profileHTML = "<h2>Profile</h2>";
  profileHTML += "<p><strong>Username:</strong> " + signedInUser.username + "</p>";
  profileHTML += "<p><strong>Password:</strong> " + signedInUser.password + "</p>";
  profileContainer.innerHTML = profileHTML;
}