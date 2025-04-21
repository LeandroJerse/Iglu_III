const agendamento = (sequelize, DataTypes) => {
    const Agendamento = sequelize.define('Agendamento', {
        manicure: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'colaboradores', // Nome da tabela referenciada
                key: 'cpf' // Chave primária da tabela referenciada
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        cliente: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'clientes', // Nome da tabela referenciada
                key: 'cpf' // Chave primária da tabela referenciada
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        horario: {
            type: DataTypes.DATE,
            allowNull: false
        },
        servicos: {
            type: DataTypes.ENUM('Manicure', 'Pedicure', 'Esmaltação', 'Alongamento', 'Outro'),
            allowNull: false
        }
    }, {
        tableName: 'agendamentos',
        timestamps: false, // desabilita os campos createdAt e updatedAt
        indexes: [
            {
                unique: true,
                fields: ['manicure', 'horario'] // Define a chave composta
            }
        ]
    });

    Agendamento.associate = (models) => {
        Agendamento.belongsTo(models.Colaborador, {
            foreignKey: 'manicure',
            as: 'colaborador'
        });
        Agendamento.belongsTo(models.Cliente, {
            foreignKey: 'cliente',
            as: 'cliente'
        });
    };

    return Agendamento;
};

module.exports = agendamento;