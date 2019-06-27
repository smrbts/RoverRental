const Sequelize = require('sequelize')

const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER


const sequelize = new Sequelize({
    dialect: 'postgres',
    storage: './database.postgres'
  })
  
  //Create the Schema
  const Dogs = sequelize.define('dogs',
  {
      id:{type: INTEGER, primaryKey: true},
      name:{type: STRING},
      age:{type: INTEGER},
      gender:{type: STRING},
      breed:{type: STRING},

  })
  
  module.exports = Dogs
  
  sequelize.sync()