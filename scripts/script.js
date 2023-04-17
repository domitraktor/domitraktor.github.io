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

        validateEmail(emailDOMElement)

        validateUsername(usernameDOMElement)

        validatePassword(passwordDOMElement)

        validateCheckbox(termsOfServiceCheckboxDOMElement)
    })
})
