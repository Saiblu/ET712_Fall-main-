console.log("Lab 10 script file is connected");

// collect the form element and inputs
let myform = document.querySelector("#form1");
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

// password focus/blur (use lowercase event names and check element exists)
const inputpassword = document.querySelector("#password");
if (inputpassword) {
    inputpassword.addEventListener("focus", function() {
        inputpassword.classList.add("active_input_valid");
    });

    inputpassword.addEventListener("blur", function() {
        inputpassword.classList.remove("active_input_valid");
    });
}

// --- shuffled word game ---
const originalWord = "javascript";

// function to shuffle the word
function shuffleWord(word) {
    // simple Fisher-Yates style shuffle using sort is acceptable for this assignment
    return word.split('').sort(function(){ return Math.random() - 0.5; }).join('');
}

// show shuffled word in the DOM if element exists
const shuffledWordResult = shuffleWord(originalWord);
const shuffledWordElement = document.querySelector("#shuffledWord");
if (shuffledWordElement) {
    shuffledWordElement.textContent = shuffledWordResult;
}
console.log("Shuffled word:", shuffledWordResult);

// collect the guess input and feedback elements (only once)
const guessInputField = document.querySelector("#guessInput");
const wordFeedbackEl = document.querySelector("#wordfeedback");

// add the input event listener safely
if (guessInputField && wordFeedbackEl) {
    guessInputField.addEventListener("input", function() {
        // collect characters from input and convert to lowercase
        const guess = (guessInputField.value || "").trim().toLowerCase();

        if (guess === originalWord) {
            wordFeedbackEl.textContent = "Correct! You guessed the word.";
            wordFeedbackEl.classList.add("active_input_valid");
            wordFeedbackEl.classList.remove("active_input_invalid");
            wordFeedbackEl.style.color = "green";
        } else {
            wordFeedbackEl.textContent = "Incorrect, try again.";
            wordFeedbackEl.classList.add("active_input_invalid");
            wordFeedbackEl.classList.remove("active_input_valid");
            wordFeedbackEl.style.color = "red";
        }
    });
}

// Lab exercise: username availability checker
(function () {
    var takenUsernames = ['admin', 'user123', 'testuser', 'guest', 'peterpan'];

    var labForm = document.getElementById('labExerciseForm');
    var labInput = document.getElementById('lab_username');
    var labFeedback = document.getElementById('lab_username_feedback');
    var labSubmit = document.getElementById('lab_submit');

    function checkAvailability(value) {
        var name = (value || '').trim().toLowerCase();
        if (name === '') return null; // no input
        return takenUsernames.indexOf(name) === -1;
    }

    if (labInput) {
        labInput.addEventListener('input', function () {
            var val = labInput.value;
            var available = checkAvailability(val);

            if (available === null) {
                labFeedback.textContent = '';
                labFeedback.className = 'lab-feedback';
                if (labSubmit) labSubmit.disabled = true;
                return;
            }

            if (available) {
                labFeedback.textContent = 'Username is available.';
                labFeedback.className = 'lab-feedback available';
                if (labSubmit) labSubmit.disabled = false;
            } else {
                labFeedback.textContent = 'Username is taken. Try another.';
                labFeedback.className = 'lab-feedback unavailable';
                if (labSubmit) labSubmit.disabled = true;
            }
        });

        // optional focus/blur visual
        labInput.addEventListener('focus', function () { labInput.classList.add('focus'); });
        labInput.addEventListener('blur', function () { labInput.classList.remove('focus'); });
    }

    if (labForm) {
        labForm.addEventListener('submit', function (ev) {
            ev.preventDefault();
            var val = labInput ? labInput.value : '';
            var available = checkAvailability(val);
            if (available) {
                labFeedback.textContent = 'Registered successfully with "' + val.trim() + '".';
                labFeedback.className = 'lab-feedback available';
                labForm.reset();
                if (labSubmit) labSubmit.disabled = true;
            } else {
                labFeedback.textContent = 'Cannot register. Username is unavailable.';
                labFeedback.className = 'lab-feedback unavailable';
            }
        });
    }

    // initialize submit disabled
    if (labSubmit) labSubmit.disabled = true;
})();
