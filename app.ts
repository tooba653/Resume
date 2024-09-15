// src/ts/app.ts

// Function to update profile information
function updateProfile(name: string, profession: string) {
    const nameElement = document.querySelector('.name') as HTMLElement;
    const professionElement = document.querySelector('.profession') as HTMLElement;

    if (nameElement) {
        nameElement.innerText = name;
    }

    if (professionElement) {
        professionElement.innerText = profession;
    }
}

// Function to display an alert when clicking on the contact info
function setupContactAlert() {
    const phoneElement = document.querySelector('.info-section span') as HTMLElement;

    if (phoneElement) {
        phoneElement.addEventListener('click', () => {
            alert(`Phone number: ${phoneElement.innerText}`);
        });
    }
}

// Initialize the page with default content and event listeners
document.addEventListener('DOMContentLoaded', () => {
    updateProfile('Tooba Yameen', 'Student/Teacher');
    setupContactAlert();
});
