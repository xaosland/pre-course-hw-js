let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarriedCopy = Object.assign ({}, passportMarried)
passportMarriedCopy["married"] = true;

console.log(passportMarried);
console.log(passportMarriedCopy);