import { Router } from 'express';
import { getTasks, getTask, updateTask } from '../controllers/task.controllers.js'
const router = Router()

router.get('/task', getTasks);
router.put('/task/:id', updateTask);
router.get('/task/:id', getTask);

export default router