import {
    validateEmail,
    validateUsername,
    validatePassword,
    validateCheckbox,
} from "./helpers.js"

document.addEventListener("DOMContentLoaded", function () {
    const emailDOMElement = document.querySelector("#email")
    const usernameDOMElement = document.querySelector("#username")
    const passwordDOMElement = document.querySelector("#password")
    const form = document.querySelector("form")
    const termsOfServiceCheckboxDOMElement = document.querySelector(
        "#termsOfServiceCheckbox"
    )

    form.addEventListener("submit", (event) => {
        event.preventDefault()

        const isEmailValidationOkay = validateEmail(emailDOMElement)
        const isUsernameValidationOkay = validateUsername(usernameDOMElement)
        const isPasswordValidationOkay = validatePassword(passwordDOMElement)
        const isCheckboxValidationOkay = validateCheckbox(
            termsOfServiceCheckboxDOMElement
        )

        if (
            isEmailValidationOkay &&
            isUsernameValidationOkay &&
            isPasswordValidationOkay &&
            isCheckboxValidationOkay
        ) {
            form.remove()
            const descriptionBeforeForm = document.querySelector(
                "#descriptionBeforeForm"
            )
            const successMessage = document.createElement("p")
            successMessage.innerText =
                "Thank you for signing up. Please check your email."
            descriptionBeforeForm.insertAdjacentElement(
                "afterend",
                successMessage
            )
            successMessage.setAttribute("id", "successMeassage")
        }
    })
})
