const user = (sequelize, DataTypes) =>{
  const User = sequelize.define('user',{
    name:{
      type: DataTypes.STRING
    }
  })
}

module.exports = user;
