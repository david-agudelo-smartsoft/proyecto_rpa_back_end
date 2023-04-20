import express from 'express';
import clientRoutes from './routes/client.routes.js'
import agentRoutes from './routes/agent.routes.js'
import botRoutes from './routes/bot.routes.js'
import taskRoutes from './routes/task.routes.js'
import cors from 'cors'; // Importa la librería cors

const app = express();

app.use(cors()); // Usa cors como middleware
app.use(express.json());
app.use(clientRoutes)
app.use(agentRoutes)
app.use(botRoutes)
app.use(taskRoutes)

export default app;
