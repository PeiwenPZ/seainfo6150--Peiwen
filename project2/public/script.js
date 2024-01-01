"use strict";
(function () {
    const modalEl = document.querySelector(".modal");
    const openEl = document.querySelectorAll(".subscribe-button");
    const cancelEl = document.querySelector('#cancel');

    //nav bar
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        console.log('hello');
        navLinks.classList.toggle('show');
    });

    //famous shiba page
    //select all subscribe
    openEl.forEach(button => {
        button.addEventListener('click', (e) => {
            console.log('<dialog> element is supported.');
            modalEl.showModal();
        });
    });

    cancelEl.addEventListener('click', () => {
        modalEl.close();
    });

    const emailInput = document.querySelector('#email');
    const emailError = document.querySelector('#email-error');
    const confirmEmail = document.querySelector('#confirm');
    const confirmError = document.querySelector('#confirm-email-error');


    //check if empty for email
    emailInput.addEventListener("blur", (e) => {
        if (!emailInput.value.includes('@')) {
            emailError.innerText = 'Email must contain "@"';
        } else {
            confirmError.innerText = "";
        }
    });


    confirmEmail.addEventListener("blur", () => {
        if (confirmEmail.value !== emailInput.value) {
            confirmError.innerText = "Confirm Email must match Email";
        } else {
            confirmError.innerText = "";
        }

    });

    const formEl = document.querySelector("#subscribe-form");
    formEl.addEventListener('submit', (e) => {
        let isFormInvalid = false;
        if (!emailInput.value) {
            isFormInvalid = true;
            emailError.innerText = "Email is Required";
        } else {
            confirmError.innerText = "";
        }

        if (!emailInput.value.includes('@')) {
            isFormInvalid = true;
            emailError.innerText = 'Email must contain "@"';
        } else {
            confirmError.innerText = "";
        }

        //check if email and confirm email are the same
        if (confirmEmail.value !== emailInput.value) {
            isFormInvalid = true;
            confirmError.innerText = "Confirm Email must match Email";
        } else {
            confirmError.innerText = "";
        }

        if (isFormInvalid) {
            e.preventDefault();
        }
    });


})();