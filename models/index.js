const {sequelize} = require('./database');

const UserModel = sequelize.import('./user');
const CarModel = sequelize.import('./car');

const models = {
  User: UserModel,
  Car: CarModel
}


module.exports = models;
