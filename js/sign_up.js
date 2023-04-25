// Validate sign up form
function validate() {
    var name = document.getElementById("sign_up_name").value.trim();
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("sign_up_email").value.trim();
    var password = document.getElementById("sign_up_password").value.trim();
    var confirm_pass = document.getElementById("confirm_password").value.trim();
    var signup_info = document.getElementById("signup_info");
    const hasnumber = /\d/;
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const pass_regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var error;

    //Validate user's name
    if (hasnumber.test(name) || name.length < 2){
        error = "Name entered is not valid";
        signup_info.innerHTML = error;
        signup_info.classList.add("failure");
        return false;
    }

    //Validate user's username
    if (username.length < 5){
        error = "Username entered is not valid. Please include more than 5 characters";
        signup_info.innerHTML = error;
        signup_info.classList.add("failure");
        return false;
    }

    //Validate the email
    if (!email_regex.test(email)) {
        error = "Email entered is not valid";
        signup_info.innerHTML = error;
        signup_info.classList.add("failure");
        return false;
    }
    
    //Validate the password
    if (!pass_regex.test(password)) {
        error = "Password entered is not valid. Please include 7 to 15 characters and at least 1 number and a special character";
        signup_info.innerHTML = error;
        signup_info.classList.add("failure");
        return false;
    }

    //Validate confirm password
    if(confirm_pass !== password) {
        error = "Passwords does not match";
        signup_info.innerHTML = error;
        signup_info.classList.add("failure");
        return false;
    }

    //If all data is correctly input
    alert("Sign Up Successful!");
    return true;
}

