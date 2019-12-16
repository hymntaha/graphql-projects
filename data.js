let users = [
  {
    id: 1,
    name: "Taco",
    cars:[1,2]
  },
  {
    id: 2,
    name: "Susan",
    cars: []
  },
  {
    id: 3,
    name: "Steven",
    cars: [3]
  }
];

let cars = [
  {
    id: 1,
    make: "Ford",
    model: "Focus",
    color: "red",
    ownedBy: 1
  },
  {
    id: 2,
    make: "Mercedes",
    model: "C300",
    color: "white",
    ownedBy: 1
  },
  {
    id: 3,
    make: "Tesla",
    model: "Cybertruck",
    color: "silver",
    ownedBy: 3
  }
];

module.exports = {
  users,
  cars
};
