// src/ts/app.ts
// Function to update profile information
function updateProfile(name, profession) {
    var nameElement = document.querySelector('.name');
    var professionElement = document.querySelector('.profession');
    if (nameElement) {
        nameElement.innerText = name;
    }
    if (professionElement) {
        professionElement.innerText = profession;
    }
}
// Function to display an alert when clicking on the contact info
function setupContactAlert() {
    var phoneElement = document.querySelector('.info-section span');
    if (phoneElement) {
        phoneElement.addEventListener('click', function () {
            alert("Phone number: ".concat(phoneElement.innerText));
        });
    }
}
// Initialize the page with default content and event listeners
document.addEventListener('DOMContentLoaded', function () {
    updateProfile('Tooba Yameen', 'Student/Teacher');
    setupContactAlert();
});
