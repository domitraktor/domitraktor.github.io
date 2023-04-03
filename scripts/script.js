document.addEventListener("DOMContentLoaded", function (event) {
    const email = document.querySelector("#email");
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const form = document.querySelector("form");

    const special = ["`", "!", "@", "#", "$", "^", "&", "*"];

    function checkIfOneChar(password) {
        let isOneCharPresent = false
        special.forEach(char => {
            if (password.includes(char)) {
                isOneCharPresent = true
            }
        })
        return isOneCharPresent

    }

    function isUpperCase(myString) {
        return myString == myString.toUpperCase();
    }
    function checkIfUpperCase(passedPassword) {
        let isOneUpperCased = false;

        passedPassword.split("").forEach((letter) => {
            if (isUpperCase(letter) == true) {
                isOneUpperCased = true;
            }
        });

        return isOneUpperCased;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const monkey = "@";
        if (email.value.includes(monkey)) {
            console.log("Ok");
        } else {
            console.log("Provide a valid e-mail address");
        }


        if (document.querySelector('#email-validation-message') === null) {
            const paragraphAfterEmail = document.createElement("p")
            paragraphAfterEmail.innerText = "Provide a valid e-mail address"
            email.insertAdjacentElement("afterend", paragraphAfterEmail)
            paragraphAfterEmail.setAttribute("id", "email-validation-message")

        }




        if (username.value.length >= 3) {
            console.log("Ok");
        } else {
            console.log("Username must be longer than two characters");
        }




        if (checkIfOneChar(password.value)) {
            console.log("Okejka")
        } else {
            console.log("Daj znak specjalny")
        }

        if (password.value.length >= 8) {
            console.log("Okejka")
        } else {
            console.log("Wpisz min. osiem znaków")
        }

        if (checkIfUpperCase(password.value)) {
            console.log("okejka")
        } else {
            console.log("Wpisz min.jedną dużą literę")
        }


    })
})
