const telefone = (sequelize, DataTypes) => {
    const Telefone = sequelize.define('Telefone', {
        telefone: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        clienteCpf: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'clientes', // Nome da tabela referenciada
                key: 'cpf' // Chave primária da tabela referenciada
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }, {
        tableName: 'telefones',
        timestamps: false // desabilita os campos createdAt e updatedAt
    });

    Telefone.associate = (models) => {
        Telefone.belongsTo(models.Cliente, {
            foreignKey: 'clienteCpf',
            as: 'cliente'
        });
    };

    return Telefone;
};

module.exports = telefone;