import { Router } from 'express';
import { getClients, getClient, createClient, updateClient } from '../controllers/client.controllers.js'
const router = Router()

router.get('/client', getClients);
router.post('/client', createClient);
router.put('/client/:id', updateClient);
router.get('/client/:id', getClient);

export default router