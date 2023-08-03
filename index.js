const dbconfig = require('../config/dbconfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USERNAME,
    dbconfig.PASSWORD,{
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        operatorsAliases: false,
    }
)
sequelize.authenticate()
.then(() => {
    console.log('connected')
})
.catch(err => {
    console.log('Error'+ err)
})

const db ={}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./userModel.js')(sequelize, DataTypes)
db.course = require('./courseModel.js')(sequelize, DataTypes)
db.subscriptions = require('./subscriptionsModel.js')(sequelize, DataTypes)

db.sequelize.sync({force: false})
.then(() => {
    console.log('yes re-sync done')
})

module.exports = db
