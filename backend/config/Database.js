import { Sequelize } from "sequelize";

const db = new Sequelize('cloud_notes', 'panji', 'panjiadmin', {
    host:'34.16.61.200',
    dialect: 'mysql'
});

export default db;