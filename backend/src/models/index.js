const sequelize = require('../config/sequelize.js');
const Curso = require('./curso.js')(sequelize, require('sequelize').DataTypes);
const Aluno = require('./aluno.js')(sequelize, require('sequelize').DataTypes);

const db = {
    sequelize: sequelize,
    Sequelize: sequelize.Sequelize,
    Curso: Curso,
    Aluno: Aluno
};

module.exports = db;