import { Sequelize } from 'sequelize'
export class MyqslConnection {
    private static connection: Sequelize
    static async connect(dbDatabase: string, dbUserName: string, dbPassword: string, dbHost: string): Promise<void> {
        const sequelize = new Sequelize(dbDatabase, dbUserName, dbPassword, {
            host: dbHost,
            dialect: 'mysql'
        })
        this.connection = sequelize
        sequelize.authenticate()
        console.log('Connection has been established successfully.')
    }

    static instance(): Sequelize {
        return this.connection
    }
}