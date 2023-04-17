import { Router } from 'express';
import { getClient, createClient, updateClient } from '../controllers/client.controllers.js'
const router = Router()

router.get('/client', getClient);
router.post('/client', createClient);
router.put('/client', updateClient);

export default router