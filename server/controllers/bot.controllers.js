import Bot from '../models/bot.model.js'

export const getBots = async (req, res) => {
    try {
        const bot = await Bot.find()
        res.send(bot)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createBot = async (req, res) => {
    try {
        const { name, status, version, compatibility, ttlRequest, ttlResult, maximumAttempts } = req.body
        const NewBot = new Bot({ name, status, version, compatibility, ttlRequest, ttlResult, maximumAttempts })
        await NewBot.save()
        return res.json(NewBot)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateBot = async (req, res) => {
    try {
        const updaDateBot = await Bot.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.send(updaDateBot)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getBot = async (req, res) => {
    try {
        const bot = await Bot.findById(req.params.id)
        if (!bot) return res.sendStatus(404)
        return res.json(bot)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}