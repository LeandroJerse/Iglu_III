const colaborador = (sequelize, DataTypes) => {
    const Colaborador = sequelize.define('Colaborador', {
        cpf: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ownerCpf: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'administrador', // Nome da tabela referenciada
                key: 'cpf' // Chave primária da tabela referenciada
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        }
    }, {
        tableName: 'colaboradores',
        timestamps: false // desabilita os campos createdAt e updatedAt
    });

    Colaborador.associate = (models) => {
        Colaborador.belongsTo(models.Administrador, {
            foreignKey: 'ownerCpf',
            as: 'owner'
        });
    };

    return Colaborador;
};

module.exports = colaborador;