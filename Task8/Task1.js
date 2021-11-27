function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

function containsAt(str, elements) {
    for (var i = 0; i <= elements.length; i++) {
        if (str.indexOf(elements[i]) !== -1) {
            return true;
        }
    }
    return false;
}

function generatePassword() {
    let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let passwordLength = randomInteger(6, 20);
    let password = "";
    for (var i = 0; i <= passwordLength; i++) {
        let randomIndex = randomInteger(0, chars.length - 1);
        password += chars[randomIndex];
    }
    while (!containsAt(password, numbers) || !containsAt(password, lowerLetters) || !containsAt(password, upperLetters)) {
        if (!containsAt(password, numbers)) {
            insertOneElement(password, numbers);
        }
        if (!containsAt(password, lowerLetters)) {
            insertOneElement(password, lowerLetters);
        }
        if (!containsAt(password, upperLetters)) {
            insertOneElement(password, upperLetters);
        }
    }

    return password;
}

function insertOneElement(str, elements) {
    let strIndex = randomInteger(0, str.length - 1);
    let elementsIndex = randomInteger(0, elements.length - 1);
    str[strIndex] = elements[elementsIndex];
}

console.log(generatePassword())
