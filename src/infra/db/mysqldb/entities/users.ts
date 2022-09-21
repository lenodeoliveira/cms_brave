import sequelize from '@/infra/db/mysqldb/helpers/connection'
import { Model, InferAttributes, InferCreationAttributes, DataTypes } from 'sequelize'

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare name: string
    declare email: string
    declare password: string
    declare createdAt: Date
    declare updatedAt: Date
}

User.init(
    {
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
        sequelize
    }
)

export async function saveUser () {
    const user = await User.create({ name: 'Lennon', email: 'lenodeoliveira@gmail.com', password: '12345678'})
    console.log(JSON.stringify(user, null, 4))
}
