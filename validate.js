var users = {
    "charmaintan08@gmail.com": "123",
    "charmaintan04@gmail.com": "1234"
}

//hasOwnProperty is used to check if a given property name exist 
function loginUser() {
    // Get the input values
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pwd").value;
    var nricInput = document.getElementById("nric").value;
    var patternNric = /^[TSGF][0-9]{7}[A-Z]$/;
    // Check if the username and password are valid
    if (! (users.hasOwnProperty(username) && users[username] == password)) {
        // Invalid credentials, show an error message
        document.getElementById("error-msg").textContent = "Invalid username or password.";
        return false;
    }
    if (!patternNric.test(nricInput)) {
        document.getElementById("error-msg").textContent = "Invalid Nric";
        return false;
    }
    alert("Login successful!");
    return true;
}
