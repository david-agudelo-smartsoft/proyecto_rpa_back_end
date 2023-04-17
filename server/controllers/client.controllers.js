import Client from '../models/client.model.js'

export const getClients = async (req, res) => {
    try {
        const client = await Client.findx()
        res.send(client)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createClient = async (req, res) => {
    try {
        const { name, status, identifier } = req.body
        const Newclient = new Client({ name, status, identifier })
        await Newclient.save()
        return res.json(Newclient)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateClient = async (req, res) => {
    try {
        const updaDateCliente = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.send(updaDateCliente)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getClient = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id)
        if (!client) return res.sendStatus(404)
        return res.json(client)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}