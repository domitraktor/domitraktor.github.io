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

        const cleanupPreviousValidationMsg = (id, inputElement) => {
            const previousValidationMsgExists =
                document.querySelector(id) !== null
            if (previousValidationMsgExists) {
                document.querySelector(id).remove()
            }
            inputElement.classList.remove("validation-error")
        }

        if (email.value.includes(monkey)) {
            cleanupPreviousValidationMsg("#email-validation-message", email)
        } else {
            cleanupPreviousValidationMsg("#email-validation-message", email)
            const paragraphAfterEmail = document.createElement("p")
            paragraphAfterEmail.innerText = "Provide a valid e-mail address"
            email.insertAdjacentElement("afterend", paragraphAfterEmail)
            paragraphAfterEmail.setAttribute("id", "email-validation-message")

            email.classList.add("validation-error")
        }

        if (username.value.length >= 3) {
            cleanupPreviousValidationMsg(
                "#username-validation-message",
                username
            )
        } else {
            cleanupPreviousValidationMsg(
                "#username-validation-message",
                username
            )
            const usernameAfterSecondInput = document.createElement("p")
            usernameAfterSecondInput.innerText =
                "Username must be longer than two characters"
            username.insertAdjacentElement("afterend", usernameAfterSecondInput)
            usernameAfterSecondInput.setAttribute(
                "id",
                "username-validation-message"
            )
            username.classList.add("validation-error")
        }

        let numberOfErrorsForPassword = 0

        if (checkIfSpecialSign(password.value)) {
            cleanupPreviousValidationMsg("#password-validation", password)
        } else {
            cleanupPreviousValidationMsg("#password-validation", password)
            numberOfErrorsForPassword++
            const passwordWithSpecialChar = document.createElement("p")
            passwordWithSpecialChar.innerText =
                "Password must contain one special sign(!,@,#,$,%,^,&,*)"
            password.insertAdjacentElement("afterend", passwordWithSpecialChar)
            passwordWithSpecialChar.setAttribute("id", "password-validation")
        }

        if (password.value.length >= 8) {
            cleanupPreviousValidationMsg("#passwordLength-validation", password)
        } else {
            cleanupPreviousValidationMsg("#passwordLength-validation", password)
            numberOfErrorsForPassword++
            const passwordLength = document.createElement("p")
            passwordLength.innerText =
                "Password must be at least eight characters long"
            password.insertAdjacentElement("afterend", passwordLength)
            passwordLength.setAttribute("id", "passwordLength-validation")
        }

        if (checkIfUpperCase(password.value)) {
            cleanupPreviousValidationMsg(
                "#passwordUpperCase-validation",
                password
            )
        } else {
            cleanupPreviousValidationMsg(
                "#passwordUpperCase-validation",
                password
            )
            numberOfErrorsForPassword++
            const upperCasePassword = document.createElement("p")
            upperCasePassword.innerText =
                "Password must contain at least one upper case letter"
            password.insertAdjacentElement("afterend", upperCasePassword)
            upperCasePassword.setAttribute("id", "passwordUpperCase-validation")
        }

        if (numberOfErrorsForPassword === 0) {
            password.classList.remove("validation-error")
        } else {
            password.classList.add("validation-error")
        }

        if (termsOfServiceCheckbox.checked) {
            return true
        } else {
            return false
        }
    })
})
