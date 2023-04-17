import Agent from '../models/agent.model.js'

export const getAgents = async (req, res) => {
    try {
        const agent = await Agent.find()
        res.send(agent)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createAgent = async (req, res) => {
    try {
        const { name, status } = req.body
        const NewAgent = new Agent({ name, status })
        await NewAgent.save()
        return res.json(NewAgent)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateAgent = async (req, res) => {
    try {
        const updaDateAgent = await Agent.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.send(updaDateAgent)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAgent = async (req, res) => {
    try {
        const agent = await Agent.findById(req.params.id)
        if (!agent) return res.sendStatus(404)
        return res.json(agent)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}