import { Sequelize } from "sequelize";

const db = new Sequelize('cloud_notes', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
});

export default db;