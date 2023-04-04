const special = ['`', '!', '@', '#', '$', '^', '&', '*']
const monkey = '@'

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

    passedPassword.split('').forEach((letter) => {
        if (isUpperCase(letter) == true) {
            isOneUpperCased = true
        }
    })

    return isOneUpperCased
}

document.addEventListener('DOMContentLoaded', function (event) {
    const email = document.querySelector('#email')
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')
    const form = document.querySelector('form')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        //1. emailValidation
        //2. usernameValidation
        //3. passwordValidation

        if (email.value.includes(monkey)) {
            console.log('Ok')

            //tutaj mozna usuwac wczesniejszy komunikat o blednym
        } else {
            if (document.querySelector('#email-validation-message') === null) {
                const paragraphAfterEmail = document.createElement('p')
                paragraphAfterEmail.innerText = 'Provide a valid e-mail address'
                email.insertAdjacentElement('afterend', paragraphAfterEmail)
                paragraphAfterEmail.setAttribute(
                    'id',
                    'email-validation-message'
                )
            }
        }

        if (username.value.length >= 3) {
            console.log('Ok')
        } else {
            console.log('Username must be longer than two characters')
        }
        if (document.querySelector('#username-validation') === null) {
            if (username.value.length < 3) {
                const usernameAfterSecondInput = document.createElement('p')
                usernameAfterSecondInput.innerText =
                    'Username must be longer than two characters'
                username.insertAdjacentElement(
                    'afterend',
                    usernameAfterSecondInput
                )
                usernameAfterSecondInput.setAttribute(
                    'id',
                    'username-validation'
                )
            }
        }

        if (checkIfOneChar(password.value)) {
            console.log('Okejka')
        } else {
            console.log('Daj znak specjalny')
        }

        if (document.querySelector('#password-validation') === null) {
            const passwordWithSpecialChar = document.createElement('p')
            passwordWithSpecialChar.innerText =
                'Password must contain one special sign(!,@,#,$,%,^,&,*)'
            password.insertAdjacentElement('afterend', passwordWithSpecialChar)
            passwordWithSpecialChar.setAttribute('id', 'password-validation')
        }

        if (password.value.length >= 8) {
            console.log('Okejka')
        } else {
            console.log('Wpisz min. osiem znaków')
        }

        if (checkIfUpperCase(password.value)) {
            console.log('okejka')
        } else {
            console.log('Wpisz min.jedną dużą literę')
        }
    })
})
