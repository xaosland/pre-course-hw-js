let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let marriedCopy = { ...passportMarried} 
marriedCopy.married = true;
 
console.log(passportMarried); 
console.log(marriedCopy);