let passport = {
  name: "Petr",
  surname: "Petrov",
};

console.log(passport);
let passportCopy = Object.assign({}, passport);
passportCopy.name = "Ivan";

console.log(passportCopy);