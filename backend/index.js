import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
import User from './models/UserModel.js';
import Notes from './models/NotesModel.js';
import router from './routes/index.js';

dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
    await db.sync();
} catch (error) {
    console.error('Error: ', error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5001, () => console.log('Server up and running on port 5000 ...'));