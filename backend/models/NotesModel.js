import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;
const Notes = db.define('notes', {
    title: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.TEXT,
    },
    userId: {
        type: DataTypes.INTEGER,
    }
},{
    freezeTableName: true,
});

export default Notes;

(async () => {
    await db.sync();
})();