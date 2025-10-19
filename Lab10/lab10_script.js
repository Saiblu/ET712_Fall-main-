console.log("Lab 10 script file is connected");

// collect the form element and inputs
let myform = document.querySelector(".myform");
let username = document.querySelector("#username");
let greeting = document.querySelector(".greeting");
let display_username = document.querySelector(".display_username");
let username_error_msg = document.querySelector(".username_error_msg");
let btnsubmit = document.querySelector(".btnsubmit") || (myform ? myform.querySelector('[type="submit"]') : null);

// disable submit on load
window.addEventListener("load", function() {
    if (btnsubmit) btnsubmit.disabled = true;
});

// form submit handler
if (myform) {
    myform.addEventListener("submit", function(event) {
        event.preventDefault();

        const usernamevalue = (username && username.value) ? username.value.trim() : "";

        if (usernamevalue === "") {
            alert("Please enter a username.");
            return;
        }

        // show greeting and display the name (uppercase)
        if (greeting) greeting.style.display = "block";
        if (display_username) display_username.textContent = usernamevalue.toUpperCase();

        // clear the username field and disable submit until next valid input
        if (username) username.value = "";
        if (btnsubmit) btnsubmit.disabled = true;
        if (username_error_msg) username_error_msg.textContent = "";
    });
}

// input validation: enable/disable submit and show error messages
if (username) {
    username.addEventListener("input", function() {
        const value = username.value.trim();
        const len = value.length;
        let valid = false;

        if (!username_error_msg) {
            // ensure we don't throw later
            username_error_msg = document.querySelector(".username_error_msg");
        }

        if (len === 0) {
            if (username_error_msg) username_error_msg.textContent = "Name is required.";
        } else if (len < 5) {
            if (username_error_msg) username_error_msg.textContent = "Name must be at least 5 characters.";
        } else if (len > 20) {
            if (username_error_msg) username_error_msg.textContent = "Name must be 20 characters or fewer.";
        } else {
            valid = true;
            if (username_error_msg) username_error_msg.textContent = "";
        }

        if (btnsubmit) btnsubmit.disabled = !valid;
    });
}