// Validate the log in form
function validate() {
    var username = document.getElementById("login_username").value.trim();
    var password = document.getElementById("login_password").value.trim();
    var login_info = document.getElementById("login_info");
    const pass_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var error;
    var success;

    //Validate user's username
    if (username.length < 5){
        error = "Username entered is not valid. Please include more than 5 characters";
        login_info.innerHTML = error;
        login_info.classList.add("failure");
        return false;
    }
    
    //Validate the password
    if (!pass_regex.test(password)) {
        error = "Password entered is not valid. Please include 7 to 15 characters and at least 1 number and a special character";
        login_info.innerHTML = error;
        login_info.classList.add("failure");
        return false;
    }

    //If all data is correctly input
    alert("Log In Successful!");
    return true;
}

// Validate the email form
function ValidateEmail() 
{
    var email = document.getElementById("email").value;
    var display_msg = document.getElementById("email_error");

    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email_regex.test(email)) {
        msg = "Email entered is not valid";
        display_msg.innerHTML = msg;
        display_msg.classList.add("failure");
        return false;
    }

    else {
        alert("Email Successfully Submitted!");
        return true;
    }
    
}
