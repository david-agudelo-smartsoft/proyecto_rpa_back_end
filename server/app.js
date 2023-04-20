import express from 'express';
import cors from 'cors'; // Importa la librería cors
import clientRoutes from './routes/client.routes.js';

const app = express();

app.use(cors()); // Usa cors como middleware
app.use(express.json());
app.use(clientRoutes);

export default app;
