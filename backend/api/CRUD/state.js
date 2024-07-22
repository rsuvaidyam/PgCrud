let state = require('../../modals/State')

module.exports = {
    getState: async (req, res) => {

        try {
            let State = await state.findAll({})
            return res.json(State);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    postState: async (req, res) => {
        try {
            let { name } = req.body
            if (name) {
                let State = await state.create(req.body)
                return res.status(200).json({ message: `State successfull created`, State: State })
            } else {
                return res.status(400).json({ message: `State name require` })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    putState: async (req, res) => {
        try {
            id = req.params.id
            let State = await state.update(req.body, { where: { id: id } })
            return res.json(State);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteState: async (req, res) => {
        try {
            state_id = req.params.state_id
            let State = await state.destroy({ where: { state_id: state_id } })
            return res.json(State);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}