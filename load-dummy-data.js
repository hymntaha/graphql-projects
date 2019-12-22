const {sequelize} = require('./models/database');
const models = require('./models');

const createData = () => {

}

sequelize.sync({force:true}).then(()=>{
  createData()
})
