const special = ["`", "!", "@", "#", "$", "^", "&", "*"]
const monkey = "@"

function checkIfSpecialSign(password) {
    return special.some((char) => password.includes(char))
}

function isUpperCase(myString) {
    return /[A-Z]/.test(myString)
}
function checkIfUpperCase(passedPassword) {
    let isOneUpperCased = false

    passedPassword.split("").forEach((letter) => {
        if (isUpperCase(letter) == true) {
            isOneUpperCased = true
        }
    })

    return isOneUpperCased
}

document.addEventListener("DOMContentLoaded", function (event) {
    const email = document.querySelector("#email")
    const username = document.querySelector("#username")
    const password = document.querySelector("#password")
    const form = document.querySelector("form")

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
            }
        }

        if (username.value.length >= 3) {
            console.log("Ok")
            const userNameLongerThanThreeExists =
                document.querySelector("#username-validation") !== null
            if (userNameLongerThanThreeExists) {
                document.querySelector("#username-validation").remove()
            }
        } else {
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

        if (checkIfSpecialSign(password.value)) {
            console.log("Okejka sdfs")
            const passwordWithOneSpecialCharExists =
                document.querySelector("#password-validation") !== null
            if (passwordWithOneSpecialCharExists) {
                document.querySelector("#password-validation").remove()
            }
        } else {
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
    })
})
