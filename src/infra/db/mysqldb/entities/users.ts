import sequelize from '@/infra/db/mysqldb/helpers/connection'
import { Model, InferAttributes, InferCreationAttributes, CreationOptional, DataTypes } from 'sequelize'

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: string
    declare name: string
    declare email: string
    declare role: CreationOptional<string>
    declare status: CreationOptional<number>
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
        role: {
            type: new DataTypes.STRING(128),
            allowNull: true,
            defaultValue: 'user'
        },
        status: {
            type: new DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 1
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
            type: new DataTypes.INTEGER,
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

User.hasMany(Content)
Content.belongsTo(User)