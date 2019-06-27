const Sequelize = require('sequelize')

const STRING = Sequelize.STRING
const INTEGER = Sequelize.INTEGER
const DATE = Sequelize.DATE


const sequelize = new Sequelize({
    dialect: 'postgres',
    storage: './database.postgres'
  })
  
  //Create the Schema
  const Walks= sequelize.define('walks',
  {
      id:{type: INTEGER, primaryKey: true},
      userId:{type: INTEGER},
      dogId:{type: INTEGER},
      date:{type: DATE},
      duration:{type: INTEGER}
      
  })
  
  module.exports = Walks
  
  sequelize.sync()