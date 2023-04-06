import { special } from "./constants.js"

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
