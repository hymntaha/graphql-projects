const resolvers = {
  Query: {
    users: () => users,
    user: (parent, { id }) => {
      const user = users.filter(user => user.id === id);
      return user[0];
    },
    me: () => me
  },
  Mutation: {
    makeUser: (parent, { id, name }) => {
      const user = {
        id,
        name
      };
      users.push(user);
      return user;
    },
    removeUser: (parent, { id }) => {
      let found = false;
      users.filter(user => {
        if (user.id === id) {
          found = true;
        } else {
          return user;
        }
      });
      if (found) {
        return true;
      } else {
        return false;
      }
    },
  User: {
    car: parent => parent.cars.map(carId => cars[carId - 1])
  }
};

module.exports = resolvers;
