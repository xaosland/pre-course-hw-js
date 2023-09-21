let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let MarriedCopy = Object.assign(passportMarried,{married: true});

console.log(passportMarried); 
console.log(MarriedCopy); 
console.log(MarriedCopy.married);