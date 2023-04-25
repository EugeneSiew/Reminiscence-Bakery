// Validate contact us form
function validate() {
    var name = document.getElementById("contact_name").value.trim();
    var email = document.getElementById("contact_email").value.trim();
    var feedback = document.getElementById("feedback").value.trim();
    var feedback_info = document.getElementById("feedback_info");
    const hasnumber = /\d/;
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var error;

    //Validate user's name
    if (hasnumber.test(name) || name.length < 2){
        error = "Name entered is not valid";
        feedback_info.innerHTML = error;
        feedback_info.classList.add("failure");
        return false;
    }

    //Validate the email
    if (!email_regex.test(email)) {
        error = "Email entered is not valid";
        feedback_info.innerHTML = error;
        feedback_info.classList.add("failure");
        return false;
    }
    
    //Validate the feedback message
    if (feedback.length < 2) {
        error = "Feedback entered is not valid";
        feedback_info.innerHTML = error;
        feedback_info.classList.add("failure");
        return false;
    }

    //If all data is correctly input
    alert("Feedback Form Submitted!");
    return true;
}


//Validate email form
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



