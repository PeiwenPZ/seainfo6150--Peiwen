"use strict";
//IIFE
(function () {
    //Your code here:

    document.addEventListener("DOMContentLoaded", function () {
        const form = document.querySelector('.registration-form');
        const submit = document.querySelector(".submit");


        //check if empty for name fields
        const nameError = document.querySelector('#name-error');
        const nameInput = document.querySelector("#name");
        const nameGroupEl = document.getElementById("nameGroup");
        nameError.classList.add("hidden");

        nameInput.addEventListener("blur", (event) => {
            if (!nameInput.value) {
                nameError.classList.remove("hidden");
            } else {
                nameError.classList.add("hidden");
            }
        });

        //check if empty for email
        const emailInput = document.querySelector('#email');
        const emailError = document.querySelector('#email-error');
        emailInput.addEventListener("blur", (e) => {
            if (!emailInput.value) {
                emailError.innerText = " Email is Required";
            } else {
                emailError.innerText = "";
            }
        });






        //check if email and confirm email are the same
        const confirmEmail = document.querySelector('#confirm-email');
        const confirmError = document.querySelector('#confirm-email-error');
        confirmEmail.addEventListener("blur", () => {

        });


        //check if empty in submit
        const formEl = document.querySelector("#registration-form");
        formEl.addEventListener('submit', (e) => {
            let isFormInvalid = false;
            if (!nameInput.value) {
                isFormInvalid = true;
                nameError.classList.remove("hidden");
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



    });


})();

    //check each field
    //check if empty for the name

    //add event listener for the email

    //add event listener for the confirm email

    //add event listener for the submit


