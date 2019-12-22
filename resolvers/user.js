const resolvers = {
  Query: {
    users: (parent,args, {models}) => {
      return models.User.findAll();
    },
    user: (parent, { id },{models}) => {
      return models.User.findByPk(id);
    },
    // me: (parent, args, {me}) => me
  },
  Mutation: {
    makeUser: (parent, { id, name },{models}) => {
      const user = {
        name
      };
      return models.User.create(user);
    },
    removeUser: (parent, { id },{models}) => {
      let found = false;
      models.users.filter(user => {
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
    car: (parent,args, {models}) => parent.cars.map(carId => models.cars[carId - 1])
  }
};

module.exports = resolvers;
