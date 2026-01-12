function isValidName(name) {
    const nameRegex = /^[A-Za-zÄÖÜäöüß]+(?:-[A-Za-zÄÖÜäöüß]+)*(?:\s+[A-Za-zÄÖÜäöüß]+(?:-[A-Za-zÄÖÜäöüß]+)*)+$/;
    return nameRegex.test(name);
}

function validateName() {
    const nameInput = document.getElementById('name');
    const errorMessage = document.getElementById('name-error');

    const name = nameInput.value.trim();

    if (isValidName(name)) {
        errorMessage.textContent = '';
    } else if (name === "") {
        errorMessage.textContent = '';
    } else {
        errorMessage.innerHTML = 'Bitte geben Sie einen gültigen Namen in diesem Format ein: <br><br>"Max Mustermann (Vorname Nachname)"';
    }
}


function isValidLocation(location){
    const locationRegex = /^[A-Za-z\s]+ \d{4,6}$/;
    return locationRegex.test(location);
}

function validateLocation() {
    const locationInput = document.getElementById('plz');
    const errorMessage = document.getElementById('plz-error');

    const location = locationInput.value.trim();

    if (isValidLocation(location)) {
        errorMessage.textContent = '';
    }

    else if (location == "") {
        errorMessage.textContent = '';
    }

    else {
        errorMessage.innerHTML = 'Bitte geben Sie einen gültigen Standort in diesem Format ein: <br><br>"Graz 8020"';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateEmail() {
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('email-error');

    const email = emailInput.value.trim();

    if (isValidEmail(email)) {
        errorMessage.textContent = '';
    }

    else if (email == "") {
        errorMessage.textContent = '';
    }

    else {
        errorMessage.textContent = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
}

function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\+\d{2} \d{3} \d{5,}$/;
    return phoneRegex.test(phoneNumber);
}

function formatPhoneNumber(input) {
    let phoneNumber = input.value.replace(/[^+\d]/g, '');

    if (/^\+\d{2}/.test(phoneNumber)) {
        phoneNumber = phoneNumber.replace(/(\+\d{2})(.*)/, '$1 $2');
    }

    if (/^\+\d{2} \d{3}/.test(phoneNumber)) {
        phoneNumber = phoneNumber.replace(/(\+\d{2} \d{3})(.*)/, '$1 $2');
    }

    input.value = phoneNumber;
}


function validatePhoneNumber() {
    const phoneInput = document.getElementById('phone');
    const errorMessage = document.getElementById('phone-error');

    formatPhoneNumber(phoneInput);

    const phoneNumber = phoneInput.value.trim();

    if (isValidPhoneNumber(phoneNumber)) {
        errorMessage.textContent = '';
    }

    else if (phoneNumber == "") {
        errorMessage.textContent = '';
    }

    else {
        errorMessage.innerHTML = 'Bitte geben Sie eine gültige Telefonnummer in diesem Format ein: <br><br>"+43 123 4567890"';
    }
}

function validateLocationInput() {
    validateLocation();
}

function validateNameInput() {
    validateName();
}

function validateEmailInput() {
    validateEmail();
}

function validatePhoneInput() {
    validatePhoneNumber();
}

function disableSubmitButton() {
    const submitButton = document.getElementById('submit-button');
    submitButton.disabled = true;
    submitButton.value = 'Bitte warten...';
}

function sendData(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const locationInput = document.getElementById('plz');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const location = locationInput.value.trim();

    if (isValidEmail(email) && isValidPhoneNumber(phone) && isValidName(name) && isValidLocation(location)) {
        disableSubmitButton();
        var form = document.getElementById('contactForm');

        form.submit();
    }
    else {
        alert("Es gibt einen Fehler");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    validateNameInput();
    validateEmailInput();
    validatePhoneInput();
    validateLocationInput();
});

document.getElementById('name').addEventListener('input', validateNameInput);
document.getElementById('email').addEventListener('input', validateEmail);
document.getElementById('plz').addEventListener('input', validateLocationInput);
document.getElementById('phone').addEventListener('input', validatePhoneNumber);
document.getElementById('phone').addEventListener('keydown', function(event) {
    if (event.key === 'Backspmace' && this.value.includes(' ')) {
        this.value = this.value.replace(/\s+$/, '');
    }
});
