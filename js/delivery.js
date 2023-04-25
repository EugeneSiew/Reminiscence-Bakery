//Set default date in calendar to be 3 days in advance
var available_date = new Date(new Date().setDate(new Date().getDate() + 3)).toISOString().split('T')[0];
document.getElementById("date").setAttribute('min', available_date);

//Validate user's input
function validate() {
    var name = document.getElementById("delivery_name").value.trim();
    var address = document.getElementById("address").value.trim();
    var postcode = document.getElementById("postcode").value.trim();
    var state = document.getElementById("state").value.trim();
    var phone_number = document.getElementById("phone_number").value.trim();
    var date = new Date(document.getElementById("date").value).toISOString().split('T')[0];
    var delivery_info = document.getElementById("delivery_info");
    const hasnumber = /\d/;
    var error;

    //Validate user's name
    if (hasnumber.test(name) || name.length < 2) {
        error = "Name entered is not valid";
        delivery_info.innerHTML = error;
        delivery_info.classList.add("failure");
        return false;
    }

    //Validate user's address
    if (address.length < 10) {
        error = "Address entered is not valid";
        delivery_info.innerHTML = error;
        delivery_info.classList.add("failure");
        return false;
    }

    //Validate the postcode
    if (postcode.length != 5) {
        error = "Postcode entered is not valid";
        delivery_info.innerHTML = error;
        delivery_info.classList.add("failure");
        return false;
    }

    //Validate the phone number
    if (phone_number.length > 12) {
        error = "Phone number entered is not valid";
        delivery_info.innerHTML = error;
        delivery_info.classList.add("failure");
        return false;
    }

    //Validate the date (cannot choose before the current day)
    if (date < available_date) {
        error = "Date entered is invalid. Please select for at least 3 days in advance.";
        delivery_info.innerHTML = error;
        delivery_info.classList.add("failure");
        return false;
    }

    //If all data is correctly input
    alert("Delivery Information Submitted!");
    return true;
}

//Restrict the input for postcode to number only
function checkIsNum(evt) {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
        // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var num_regex = /[0-9]|\./;
    if (!num_regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

//Validate email form
function ValidateEmail() {
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

