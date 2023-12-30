const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipcode = document.querySelector('#zipcode');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm-password');

function checkEmail() {
    const error = document.querySelector('.email-error');
    if (email.validity.typeMismatch) {
        error.textContent = 'Must be an email address.';
        error.classList.remove('hidden');
      } else if (email.validity.tooShort) {
        error.textContent = 'Email must be longer than 5 characters.';
        error.classList.remove('hidden');
      } else {
        if (!error.classList.contains('hidden')) {
            error.classList.add('hidden');
        } else {
            return;
        }
      }
}

function checkCountry() {
    const error = document.querySelector('.country-error');
    if (country.validity.tooShort) {
        error.textContent = 'Must be longer than 3 characters.';
        error.classList.remove('hidden');
    } else if (country.validity.tooLong) {
        error.textContent = 'Must be shorter than 57 characters.';
        error.classList.remove('hidden');
    } else {
        if (!error.classList.contains('hidden')) {
            error.classList.add('hidden');
        } else {
            return;
        }
    }
}

function checkZipcode() {
    const error = document.querySelector('.zipcode-error');
    if (zipcode.validity.tooShort || zipcode.validity.tooLong) {
        error.textContent = 'Must be 5 characters long.';
        error.classList.remove('hidden');
    } else {
        if (!error.classList.contains('hidden')) {
            error.classList.add('hidden');
        } else {
            return;
        }
    }
}

function passwordRegExp(str) {
    return /^(?=[a-zA-Z0-9#@$?!-]{8,}$)(?=.?[a-z])(?=.?[A-Z])(?=.?[0-9])./.test(
      str
    );
  }

async function checkPassword() {
    const error = document.querySelector('.password-error');
    const regex = /^(?=.*?[0-9])(?=.*\W).*$/;
    const test = await regex.test(password.value)
    if (password.validity.tooShort) {
        error.textContent = 'Password must be at least 10 characters.';
        error.classList.remove('hidden');
    } else if (test === false) {
        error.textContent = 'Password must contain at least one number and one special character.';
        error.classList.remove('hidden');
    } else if(test === true) {
        error.textContent = '';
        console.log('working');
    }
}

function checkConfirmPass() {
    const error = document.querySelector('.confirm-password-error');
    if (password.value !== confirmPass.value) {
        error.textContent = 'Passwords must match';
        error.classList.remove('hidden');
    } else {
        if (!error.classList.contains('hidden')) {
            error.classList.add('hidden');
        } else {
            return;
        }
    }
}

email.addEventListener('input', checkEmail);
country.addEventListener('input', checkCountry);
zipcode.addEventListener('input', checkZipcode);
password.addEventListener('input', checkPassword);
confirmPass.addEventListener('input', checkConfirmPass);