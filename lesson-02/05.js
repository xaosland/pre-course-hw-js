let passport = { name: "Petr", surname: "Petrov" };
console.log(passport.name);
let passportCopy = { ...passport, name: "Ivan" };
console.log(passportCopy.name);
