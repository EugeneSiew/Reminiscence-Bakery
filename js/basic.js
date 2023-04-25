// Validate email form
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




