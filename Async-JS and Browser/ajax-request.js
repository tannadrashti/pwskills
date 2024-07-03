// Create a new instance of XMLHttpRequest
let xhr = new XMLHttpRequest();

// Define the type of request (GET) and the URL
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// Set up a function to handle the response
xhr.onload = function() {
  if (xhr.status === 200) {
    // Parse the JSON response
    let users = JSON.parse(xhr.responseText);
    
    // Extract and log the names of the users
    users.forEach(user => {
      console.log(user.name);
    });
  } else {
    console.error("Request failed with status code:", xhr.status);
  }
};

// Handle network errors
xhr.onerror = function() {
  console.error("Request failed due to a network error");
};

// Send the request
xhr.send();
