import { Router } from 'express';
import { getTasks, getTask, createTask, updateTask } from '../controllers/task.controllers.js'
const router = Router()

router.get('/task', getTasks);
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.get('/task/:id', getTask);

export default router