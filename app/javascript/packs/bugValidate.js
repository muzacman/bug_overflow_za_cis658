let form = document.getElementById('bugForm');
let errorMessage = document.getElementById('errorMessage');
let submitButton = document.getElementsByName('commit')[0];

let bugTitle = document.getElementById('bug_title');
let bugDescription = document.getElementById('bug_description');

function isValidText(text) {
    return (text.length > 0);
}

function checkText(updatedField) {
    errorMessage.innerText = "";
    if (!isValidText(updatedField.value)) {
        errorMessage.innerText += '"' + name + "\" is not a valid entry.";
        if (updatedField === bugDescription) {
            errorMessage.innerText += " Description should be less than 20 characters and more than zero. \n";
        } else if (updatedField === bugTitle) {
            errorMessage.innerText += " Title should be less than 20 characters and more than zero. \n";
        }
        updatedField.style.border = 'inset red 2px';
    } else {
        updatedField.style.borderWidth = '1px 2px 2px 1px';
        updatedField.style.borderStyle = 'inset';
        updatedField.style.borderColor = 'rgb(238, 238, 238)';
    }
}

function checkUpdatedForm(updatedField) {
    if (isValidText(bugTitle.value) && isValidText(bugDescription.value)) {
        submitButton.disabled = false;
    } else {
        //Need to reestablish disabled submit if the field has been updated in an invalid way
        submitButton.disabled = true;
    }
}

bugTitle.addEventListener('focusout', (event) => {
    checkText(bugTitle);
    checkUpdatedForm(bugTitle);
});


bugDescription.addEventListener('focusout', (event) => {
    checkText(bugDescription);
    checkUpdatedForm(bugDescription);
});