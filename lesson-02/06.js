let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportWithAddressCopy = passportWithAddress

passportWithAddressCopy.address.city = "Bobryisk";
console.log(passportWithAddressCopy)