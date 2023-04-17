import express from 'express';
import clientRoutes from './routes/client.routes.js'

const app = express()

app.use(express.json())
app.use(clientRoutes)

export default app