const cliente = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
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
        tableName: 'clientes',
        timestamps: false // desabilita os campos createdAt e updatedAt
    });
    return Cliente;
}
module.exports = cliente;