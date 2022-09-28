import sequelize from '@/infra/db/mysqldb/helpers/connection'
import { User } from './users'
import { Model, InferAttributes, InferCreationAttributes, DataTypes, CreationOptional } from 'sequelize'

export class Content extends Model<InferAttributes<Content>, InferCreationAttributes<Content>> {
    declare id: string
    declare userId: string
    declare title: string
    declare slug: string
    declare body: string
    declare image: CreationOptional<string>
    declare published: number
    declare createdAt: Date
    declare updatedAt: Date
}

Content.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userId: {
            type: new DataTypes.CHAR(36),
            allowNull: false
        },
        title: {
            type: new DataTypes.STRING(255),
            allowNull: false
        },
        slug: {
            type: new DataTypes.STRING(255),
            allowNull: false
        },
        image: {
            type: new DataTypes.STRING(255),
            allowNull: true
        },
        body: {
            type: new DataTypes.STRING(255),
            allowNull: false
        },
        published: {
            type: new DataTypes.STRING(255),
            allowNull: false
        },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    },
    {
        tableName: 'contents',
        sequelize
    }
)

Content.belongsTo(User)