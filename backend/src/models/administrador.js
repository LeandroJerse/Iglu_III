const administrador = (sequelize, DataTypes) => {
    const Administrador = sequelize.define('Administrador', {
        cpf: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'administrador',
        timestamps: false // desabilita os campos createdAt e updatedAt
    });
    return Administrador;
}
module.exports = administrador;