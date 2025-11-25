// Basic form validation and simple gallery navigation (no advanced features used).

/* FORM VALIDATION */
(function () {
    var form = document.getElementById('hwForm');
    var nameEl = document.getElementById('name');
    var emailEl = document.getElementById('email');
    var passEl = document.getElementById('password');

    var errName = document.getElementById('err-name');
    var errEmail = document.getElementById('err-email');
    var errPass = document.getElementById('err-password');
    var success = document.getElementById('form-success');

    // simple email regex (class-level)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function clearErrors() {
        errName.textContent = '';
        errEmail.textContent = '';
        errPass.textContent = '';
        success.textContent = '';
    }

    if (form) {
        form.addEventListener('submit', function (ev) {
            ev.preventDefault();
            clearErrors();

            var valid = true;
            var nameVal = (nameEl.value || '').trim();
            var emailVal = (emailEl.value || '').trim();
            var passVal = (passEl.value || '');

            // Name: must not be empty
            if (nameVal === '') {
                errName.textContent = 'Name is required.';
                valid = false;
            }

            // Email: must match regex
            if (emailVal === '') {
                errEmail.textContent = 'Email is required.';
                valid = false;
            } else if (!emailRegex.test(emailVal)) {
                errEmail.textContent = 'Enter a valid email (name@example.com).';
                valid = false;
            }

            // Password: at least 5 chars and contain one of # $ %
            if (passVal.length < 5) {
                errPass.textContent = 'Password must be at least 5 characters.';
                valid = false;
            } else if (passVal.indexOf('#') === -1 && passVal.indexOf('$') === -1 && passVal.indexOf('%') === -1) {
                errPass.textContent = 'Password must contain one of: #, $, %';
                valid = false;
            }

            if (valid) {
                success.textContent = 'Form submitted successfully.';
                // clear fields (interaction only, not actually submitting)
                nameEl.value = '';
                emailEl.value = '';
                passEl.value = '';
            }
        });
    }
})();

/* CARD GALLERY NAVIGATION */
(function () {
    var btnLeft = document.getElementById('btnLeft');
    var btnRight = document.getElementById('btnRight');
    var cards = document.getElementById('cards');
    var viewport = document.getElementById('viewport');

    if (!cards || !viewport) return;

    var totalCards = cards.children.length;
    var visible = 3;
    var pageCount = Math.ceil(totalCards / visible); // for 6 cards -> 2 pages
    var index = 0; // 0..pageCount-1

    function update() {
        // shift by index * 100% of viewport width
        cards.style.transform = 'translateX(-' + (index * 100) + '%)';
    }

    if (btnRight) {
        btnRight.addEventListener('click', function () {
            index = (index + 1) % pageCount;
            update();
        });
    }

    if (btnLeft) {
        btnLeft.addEventListener('click', function () {
            index = (index - 1 + pageCount) % pageCount;
            update();
        });
    }

    // ensure layout is correct on resize: no advanced logic needed because CSS uses percentages
    window.addEventListener('resize', function () {
        update();
    });
})();