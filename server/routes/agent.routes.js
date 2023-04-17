import { Router } from 'express';
import { getAgents, createAgent, updateAgent } from '../controllers/agent.controllers.js'
const router = Router()

router.get('/agent', getAgents);
router.post('/agent', createAgent);
router.put('/agent', updateAgent);

export default router