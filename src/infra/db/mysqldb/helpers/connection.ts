import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('cms_brave', 'root', 'example', {
    host: 'db',
    dialect: 'mysql'
})

export default sequelize