const Sequelize = require('sequelize');
const configDatabase = require('./database.js');

const sequelize = new Sequelize(configDatabase)

module.exports = sequelize; //exporta a conexão com o banco de dados