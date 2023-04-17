import { Router } from 'express';
import { getAgent, createAgent, updateAgent } from '../controllers/agent.controllers.js'
const router = Router()

router.get('/agent', getAgent);
router.post('/agent', createAgent);
router.put('/agent', updateAgent);

export default router