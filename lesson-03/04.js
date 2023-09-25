const users = [
  {
    id: 1,
    name: "John",
    surName: "Doe",
    address: "123 Main St",
  },
  {
    id: 2,
    name: "Jane",
    surName: "Smith",
    address: "456 Elm St",
  },
  {
    id: 3,
    name: "Tom",
    surName: "Johnson",
    address: "789 Oak St",
  },
];

users.forEach((user) => {
  console.log(user.address);
});
