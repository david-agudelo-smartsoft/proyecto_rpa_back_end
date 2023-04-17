import { Router } from 'express';
import { getAgents, getAgent, createAgent, updateAgent } from '../controllers/agent.controllers.js'
const router = Router()

router.get('/agent', getAgents);
router.post('/agent', createAgent);
router.put('/agent/:id', updateAgent);
router.get('/agent/:id', getAgent);

export default router