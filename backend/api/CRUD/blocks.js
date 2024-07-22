let block = require('../../modals/Blocks')

module.exports = {
    getBlock: async (req, res) => {
        let { dist_id } = req.headers;
        try {
            let Block = await block.findAll({ where: { dist_id: dist_id } })
            return res.json(Block);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    postBlock: async (req, res) => {
        try {
            let { name, dist_id, state_id } = req.body
            if (name && dist_id && state_id) {
                let Block = await block.create(req.body)
                return res.status(200).json({ message: `Block successfull created`, Block: Block })
            } else {
                return res.status(400).json({ message: `BlockName, state_id and dist_id name require` })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    putBlock: async (req, res) => {
        try {
            id = req.params.id
            let Block = await block.update(req.body, { where: { id: id } })
            return res.json(Block);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteBlock: async (req, res) => {
        try {
            id = req.params.id
            let Block = await block.destroy({ where: { id: id } })
            return res.json(Block);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}