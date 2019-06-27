const express = require('express')
const cors = require ('cors')
const Users = require('./models/Users')
const Dogs = require('./models/Dogs')
const Walks = require('./models/Walks')


const app = express()

app.use(express.json())
app.use(cors())

Walks.belongsTo(Users)
Users.hasMany(Walks)

Walks.belongsTo(Dogs)
Dogs.hasMany(Walks)

Users.belongsToMany(Dogs, {through: Walks})
Dogs.belongsToMany(Users, {through: Walks})


// Use Routes
app.use('/dogs', require('./routes/dogs'));
app.use('/walks', require('./routes/walks'));
app.use('/users', require('./routes/users'));
app.use('/auth', require('./routes/auth'));


//Listener Port 9999
const port = 9999
app.listen(port,() => {console.log(`I am listening at ${port}`)})