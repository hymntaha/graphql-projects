const express = require("express");
const app = express();
const { ApolloServer, gql } = require("apollo-server-express");
const users = require("./data").users;
const cars = require("./data").cars;
const me = users[0];

const typeDefs = gql`
  type Query {
    users: [User]
    user(id: ID!): User
    cars: [Car]
    car(id: ID!): Car
    me: User
  }

  type User {
    id: ID!
    name: String!
		car: [Car]
  }

  type Car {
    id: ID!
    make: String!
    model: String!
    color: String!
    owner: User!
  }
`;

const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }) => {
      const user = users.filter(user => user.id === id);
      return user[0];
    },
    cars: () => cars,
    car: (parent, { id }) => {
      const car = cars.filter(car => car.id === id);
      return car[0];
    },
    me: () => me
  },
  Car: {
    owner: parent => users[parent.ownedBy - 1]
  },
	User: {
  	car: parent => parent.cars.map(carId => cars[carId -1])
	}
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

app.listen(3333, () =>
  console.info("Apollo GraphQL server is running on port 3333")
);
