let form = document.getElementById('userForm');
let errorMessage = document.getElementById('errorMessage');
let submitButton = document.getElementsByName('commit')[0];

let fname = document.getElementById('user_fname');
let lname = document.getElementById('user_lname');
let email = document.getElementById('user_email');

function isValidEmail(email) {
    return (email.match(/[a-zA-Z0-9]+(@)[a-zA-Z0-9]+/i));
}

function isValidName(name) {
    return (name.length > 0 && name.length < 20);
}

function checkEmail(updatedField) {
    errorMessage.innerText = "";
    if (updatedField === email && !isValidEmail(updatedField.value)) {
        updatedField.style.border = 'inset red 2px';
        errorMessage.innerText +=  '"' + updatedField.value + "\" is not a valid email. Emails need to be have proper email formatting \n";
    } else {
        updatedField.style.borderWidth = '1px 2px 2px 1px';
        updatedField.style.borderStyle = 'inset';
        updatedField.style.borderColor = 'rgb(238, 238, 238)';

    }
}

function checkName(updatedField) {
    errorMessage.innerText = "";
    if (updatedField !== email && !isValidName(updatedField.value)) {
        errorMessage.innerText += '"' + name + "\" is not a valid name. Names should be less than 20 characters and more than zero. \n";
        updatedField.style.border = 'inset red 2px';
    } else {
        updatedField.style.borderWidth = '1px 2px 2px 1px';
        updatedField.style.borderStyle = 'inset';
        updatedField.style.borderColor = 'rgb(238, 238, 238)';
    }
}

function checkUpdatedForm(updatedField) {
    if (isValidEmail(email.value) && isValidName(lname.value) && isValidName(fname.value)) {
        submitButton.disabled = false;
    } else {
        //Need to reestablish disabled submit if the field has been updated in an invalid way
        submitButton.disabled = true;
    }
}

fname.addEventListener('focusout', (event) => {
    checkName(fname);
    checkUpdatedForm(fname);
});


lname.addEventListener('focusout', (event) => {
    checkName(lname);
    checkUpdatedForm(lname);
});


email.addEventListener('focusout', (event) => {
    checkEmail(email);
    checkUpdatedForm(email);
});
