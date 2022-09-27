import { MyqslConnection } from '@/infra/db/mysqldb/helpers/connection'
import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize'

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: string
    declare name: string
    declare email: string
    declare password: string
    declare createdAt: Date
    declare updatedAt: Date
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        password: {
            type: new DataTypes.STRING(128),
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        tableName: 'users',
        sequelize: MyqslConnection.instance()
    }
)
