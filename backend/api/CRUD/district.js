let dist = require('../../modals/District')

module.exports = {
    getDist: async (req, res) => {
        let { state_id } = req.headers;
        try {
            let Dist = await dist.findAll({ where: { state_id: state_id } })
            return res.json(Dist);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    postDist: async (req, res) => {
        try {

            let { name, state_id } = req.body
            if (name && state_id) {
                let Dist = await dist.create(req.body)
                return res.status(200).json({ message: `District successfull created`, District: Dist })
            } else {
                return res.status(400).json({ message: `Bad Request: district and state_id require` })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    putDist: async (req, res) => {
        try {
            id = req.params.id
            let Dist = await dist.update(req.body, { where: { id: id } })
            return res.json(Dist);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteDist: async (req, res) => {
        try {
            id = req.params.id
            let Dist = await dist.destroy({ where: { id: id } })
            return res.json(Dist);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}