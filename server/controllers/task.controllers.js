import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    try {
        const task = await Task.find()
        res.send(task)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTask = async (req, res) => {
    try {
        const updaDateTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.send(updaDateTask)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if (!task) return res.sendStatus(404)
        return res.json(task)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}