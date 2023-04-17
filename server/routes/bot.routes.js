import { Router } from 'express';
import { getBots, getBot, createBot, updateBot } from '../controllers/bot.controllers.js'
const router = Router()

router.get('/bot', getBots);
router.post('/bot', createBot);
router.put('/bot/:id', updateBot);
router.get('/bot/:id', getBot);

export default router