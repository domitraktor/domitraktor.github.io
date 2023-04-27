import { monkey, special } from "./constants.js"

export const checkIfSpecialSign = (password) => {
    return special.some((char) => password.includes(char))
}

const isUpperCase = (myString) => {
    return /[A-Z]/.test(myString)
}

export const checkIfUpperCase = (passedPassword) => {
    let isOneUpperCased = false

    passedPassword.split("").forEach((letter) => {
        if (isUpperCase(letter) == true) {
            isOneUpperCased = true
        }
    })

    return isOneUpperCased
}

const cleanupPreviousValidationMsg = (id, inputElement) => {
    const previousValidationMsgExists = document.querySelector(id) !== null
    if (previousValidationMsgExists) {
        document.querySelector(id).remove()
    }
    inputElement.classList.remove("validation-error")
}

export const validateEmail = (emailDOMElement) => {
    if (emailDOMElement.value.includes(monkey)) {
        cleanupPreviousValidationMsg(
            "#email-validation-message",
            emailDOMElement
        )
        return true
    } else {
        cleanupPreviousValidationMsg(
            "#email-validation-message",
            emailDOMElement
        )
        const paragraphAfterEmail = document.createElement("p")
        paragraphAfterEmail.innerText = "Provide a valid e-mail address"
        emailDOMElement.insertAdjacentElement("afterend", paragraphAfterEmail)
        paragraphAfterEmail.setAttribute("id", "email-validation-message")

        emailDOMElement.classList.add("validation-error")
        return false
    }
}

export const validateUsername = (usernameDOMElement) => {
    if (usernameDOMElement.value.length >= 3) {
        cleanupPreviousValidationMsg(
            "#username-validation-message",
            usernameDOMElement
        )
        return true
    } else {
        cleanupPreviousValidationMsg(
            "#username-validation-message",
            usernameDOMElement
        )
        const usernameAfterSecondInput = document.createElement("p")
        usernameAfterSecondInput.innerText =
            "Username must be longer than two characters"
        usernameDOMElement.insertAdjacentElement(
            "afterend",
            usernameAfterSecondInput
        )
        usernameAfterSecondInput.setAttribute(
            "id",
            "username-validation-message"
        )
        usernameDOMElement.classList.add("validation-error")
        return false
    }
}

export const validatePassword = (passwordDOMElement) => {
    let numberOfErrorsForPassword = 0

    if (checkIfSpecialSign(passwordDOMElement.value)) {
        cleanupPreviousValidationMsg("#password-validation", passwordDOMElement)
    } else {
        cleanupPreviousValidationMsg("#password-validation", passwordDOMElement)
        numberOfErrorsForPassword++
        const passwordWithSpecialChar = document.createElement("p")
        passwordWithSpecialChar.innerText =
            "Password must contain one special sign(!,@,#,$,%,^,&,*)"
        passwordDOMElement.insertAdjacentElement(
            "afterend",
            passwordWithSpecialChar
        )
        passwordWithSpecialChar.setAttribute("id", "password-validation")
    }

    if (passwordDOMElement.value.length >= 8) {
        cleanupPreviousValidationMsg(
            "#passwordLength-validation",
            passwordDOMElement
        )
    } else {
        cleanupPreviousValidationMsg(
            "#passwordLength-validation",
            passwordDOMElement
        )
        numberOfErrorsForPassword++
        const passwordLength = document.createElement("p")
        passwordLength.innerText =
            "Password must be at least eight characters long"
        passwordDOMElement.insertAdjacentElement("afterend", passwordLength)
        passwordLength.setAttribute("id", "passwordLength-validation")
    }

    if (checkIfUpperCase(passwordDOMElement.value)) {
        cleanupPreviousValidationMsg(
            "#passwordUpperCase-validation",
            passwordDOMElement
        )
    } else {
        cleanupPreviousValidationMsg(
            "#passwordUpperCase-validation",
            passwordDOMElement
        )
        numberOfErrorsForPassword++
        const upperCasePassword = document.createElement("p")
        upperCasePassword.innerText =
            "Password must contain at least one upper case letter"
        passwordDOMElement.insertAdjacentElement("afterend", upperCasePassword)
        upperCasePassword.setAttribute("id", "passwordUpperCase-validation")
    }

    if (numberOfErrorsForPassword === 0) {
        passwordDOMElement.classList.remove("validation-error")
        return true
    } else {
        passwordDOMElement.classList.add("validation-error")
        return false
    }
}

export const validateCheckbox = (termsOfServiceCheckboxDOMElement) => {
    if (termsOfServiceCheckboxDOMElement.checked) {
        cleanupPreviousValidationMsg(
            "#checkbox-validation",
            termsOfServiceCheckboxDOMElement
        )
        return true
    } else {
        cleanupPreviousValidationMsg(
            "#checkbox-validation",
            termsOfServiceCheckboxDOMElement
        )
        const termofService = document.querySelector("#termsOfServiceContainer")
        const CheckboxDupa = document.createElement("p")
        CheckboxDupa.innerText = "Please accept terms"
        termofService.insertAdjacentElement("afterend", CheckboxDupa)
        CheckboxDupa.setAttribute("id", "checkbox-validation")
        return false
    }
}
