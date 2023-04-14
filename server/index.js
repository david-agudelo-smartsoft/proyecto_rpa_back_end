import express from 'express';
import clientRoutes from './routes/client.routes.js'
import { connectDB } from './database.js'
import { PORT } from './config.js'
const app = express()
connectDB();


app.use(clientRoutes)


app.listen(PORT);
console.log('Server in running port: ', PORT);
