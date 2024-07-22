let vill = require('../../modals/Village')

module.exports = {
    getVill: async (req, res) => {
        let { block_id } = req.headers;
        try {
            let Vill = await vill.findAll({ where: { block_id: block_id } })
            return res.json(Vill);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    postVill: async (req, res) => {
        try {
            let { name, block_id } = req.body
            if (name && block_id) {
                let Vill = await vill.create(req.body)
                return res.status(200).json({ message: `Village successfull created`, Village: Vill })
            } else {
                return res.status(400).json({ message: `villageName and block_id successfull created` })

            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    putVill: async (req, res) => {
        try {
            id = req.params.id
            let Vill = await vill.update(req.body, { where: { id: id } })
            return res.json(Vill);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteVill: async (req, res) => {
        try {
            id = req.params.id
            let Vill = await vill.destroy({ where: { id: id } })
            return res.json(Vill);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}