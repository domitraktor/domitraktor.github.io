import { monkey } from "./constants.js"
import { checkIfSpecialSign, checkIfUpperCase } from "./helpers.js"

document.addEventListener("DOMContentLoaded", function (event) {
    const email = document.querySelector("#email")
    const username = document.querySelector("#username")
    const password = document.querySelector("#password")
    const form = document.querySelector("form")
    const termsOfServiceCheckbox = document.querySelector(
        "#termsOfServiceCheckbox"
    )

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        //1. emailValidation
        //2. usernameValidation
        //3. passwordValidation
        if (email.value.includes(monkey)) {
            console.log("Ok malpa")
            const emailWithMonkeyExists =
                document.querySelector("#email-validation-message") !== null
            if (emailWithMonkeyExists) {
                document.querySelector("#email-validation-message").remove()
            }
            email.classList.remove("validation-error")
        } else {
            if (document.querySelector("#email-validation-message") === null) {
                console.log("email zy")
                const paragraphAfterEmail = document.createElement("p")
                paragraphAfterEmail.innerText = "Provide a valid e-mail address"
                email.insertAdjacentElement("afterend", paragraphAfterEmail)
                paragraphAfterEmail.setAttribute(
                    "id",
                    "email-validation-message"
                )

                email.classList.add("validation-error")
            }
        }

        if (username.value.length >= 3) {
            console.log("Ok")
            const userNameLongerThanThreeExists =
                document.querySelector("#username-validation") !== null
            if (userNameLongerThanThreeExists) {
                document.querySelector("#username-validation").remove()
                username.classList.remove("validation-error")
            }
        } else {
            username.classList.add("validation-error")
            console.log("Username must be longer than two characters")
            if (document.querySelector("#username-validation") === null) {
                if (username.value.length < 3) {
                    const usernameAfterSecondInput = document.createElement("p")
                    usernameAfterSecondInput.innerText =
                        "Username must be longer than two characters"
                    username.insertAdjacentElement(
                        "afterend",
                        usernameAfterSecondInput
                    )
                    usernameAfterSecondInput.setAttribute(
                        "id",
                        "username-validation"
                    )
                }
            }
        }

        let numberOfErrorsForPassword = 0

        if (checkIfSpecialSign(password.value)) {
            console.log("Okejka sdfs")
            const passwordWithOneSpecialCharExists =
                document.querySelector("#password-validation") !== null
            if (passwordWithOneSpecialCharExists) {
                document.querySelector("#password-validation").remove()
            }
        } else {
            numberOfErrorsForPassword++
            console.log("źle")
            if (document.querySelector("#password-validation") === null) {
                const passwordWithSpecialChar = document.createElement("p")
                passwordWithSpecialChar.innerText =
                    "Password must contain one special sign(!,@,#,$,%,^,&,*)"
                password.insertAdjacentElement(
                    "afterend",
                    passwordWithSpecialChar
                )
                passwordWithSpecialChar.setAttribute(
                    "id",
                    "password-validation"
                )
            }
        }

        if (password.value.length >= 8) {
            console.log("Okejka")
            const passwordWithEigthCharExists =
                document.querySelector("#passwordLength-validation") !== null

            if (passwordWithEigthCharExists) {
                document.querySelector("#passwordLength-validation").remove()
            }
        } else {
            numberOfErrorsForPassword++

            console.log("Wpisz min. osiem znaków")
            if (document.querySelector("#passwordLength-validation") === null) {
                const passwordLength = document.createElement("p")
                passwordLength.innerText =
                    "Password must be at least eight characters long"
                password.insertAdjacentElement("afterend", passwordLength)
                passwordLength.setAttribute("id", "passwordLength-validation")
            }
        }

        if (checkIfUpperCase(password.value)) {
            console.log("okejka")

            const passwordUpperCaseValidationExists =
                document.querySelector("#passwordUpperCase-validation") !== null

            if (passwordUpperCaseValidationExists) {
                document.querySelector("#passwordUpperCase-validation").remove()
            }
        } else {
            numberOfErrorsForPassword++
            console.log("Wpisz min.jedną dużą literę")
            if (
                document.querySelector("#passwordUpperCase-validation") === null
            ) {
                const upperCasePassword = document.createElement("p")
                upperCasePassword.innerText =
                    "Password must contain at least one upper case letter"
                password.insertAdjacentElement("afterend", upperCasePassword)
                upperCasePassword.setAttribute(
                    "id",
                    "passwordUpperCase-validation"
                )
            }
        }

        if (numberOfErrorsForPassword === 0) {
            password.classList.remove("validation-error")
        } else {
            password.classList.add("validation-error")
        }

        if (termsOfServiceCheckbox.checked) {
            console.log("ok")
        } else {
            console.log("Trzeba zatwierdzić")
        }
    })
})
