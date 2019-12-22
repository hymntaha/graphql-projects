const {sequelize} = require('./models/database');
const models = require('./models');

const createData = async () => {
  await models.User.create({
    name: 'Taha',
    cars: [{
      make: 'Mercedes',
      model: 'C300',
      color: 'black'
    }]
  }, {
    include:[models.Car]
  })

  await models.User.create({
    name: 'Susan',
    cars: [{
      make: 'Toyota',
      model: 'Corolla',
      color: 'white'
    }]
  }, {
    include:[models.Car]
  })

  await models.User.create({
    name: 'Steven',
    cars: [{
      make: 'Fiat',
      model: '500',
      color: 'yellow'
    },{
      make: 'Ford',
      model: 'Focus',
      color:'Green'
    }]
  }, {
    include:[models.Car]
  })
}

sequelize.sync({force:true}).then(async()=>{
  try{
    await createData();
    process.exit()
  } catch(e) {
    console.log(e);
  }
})
