import { Router } from 'express';
import { getClients, getClient, createClient, updateClient } from '../controllers/client.controllers.js'
const router = Router()

router.get('/client', getClients);
router.post('/client', createClient);
router.put('/client', updateClient);

export default router