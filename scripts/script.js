const special = ["`", "!", "@", "#", "$", "^", "&", "*"]
const monkey = "@"

function checkIfOneChar(password) {
    let isOneCharPresent = false
    special.forEach((char) => {
        if (password.includes(char)) {
            isOneCharPresent = true
        }
    })
    return isOneCharPresent
}

function isUpperCase(myString) {
    return myString == myString.toUpperCase()
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
        const emailWithMonkeyExists =
            document.querySelector("#email-validation-message") !== null
        if (emailWithMonkeyExists) {
            document.querySelector("#email-validation-message").remove()
        }
        if (email.value.includes(monkey)) {
            console.log("Ok")

            //tutaj mozna usuwac wczesniejszy komunikat o blednym
        } else {
            if (document.querySelector("#email-validation-message") === null) {
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

        const passwordUpperCaseValidationExists =
            document.querySelector("#passwordUpperCase-validation") !== null

        if (passwordUpperCaseValidationExists) {
            document.querySelector("#passwordUpperCase-validation").remove()
        }

        const passwordWithOneSpecialCharExists =
            document.querySelector("#password-validation") !== null

        if (passwordWithOneSpecialCharExists) {
            document.querySelector("#passwordUpperCase-validation").remove()
        }

        const passwordWithEigthCharExists =
            document.querySelector("#passwordLength-validation") !== null

        if (passwordWithEigthCharExists) {
            document.querySelector("#passwordLength-validation").remove()
        }

        if (checkIfOneChar(password.value)) {
            console.log("Okejka")
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
