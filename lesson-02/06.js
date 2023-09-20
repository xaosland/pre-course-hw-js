let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};
console.log(passportWithAddress.address.city);

let passportWithAddressCopy = Object.assign({}, passportWithAddress);
passportWithAddressCopy.address.city = "Bobryisk"

console.log(passportWithAddressCopy.address.city)