const Sequelize = require('sequelize')

const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER


const sequelize = new Sequelize({
    dialect: 'postgres',
    storage: './database.postgres'
  })
  
  //Create the Schema
  const Users = sequelize.define('users',
  {
      id:{type: INTEGER, primaryKey: true},
      username: {type: STRING},
      password: {type: STRING},
      first_name: {type: STRING},
      last_name: {type: STRING},
      phone_number: {type: INTEGER},
      address: {type: STRING},
  })
  
  module.exports = Users
  
  sequelize.sync()