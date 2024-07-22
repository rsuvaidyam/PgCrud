let user = require('../../modals/User')

module.exports = {
    getUser: async (req, res) => {
        try {
            let User = await user.findAll({})
            return res.status(200).json({ message: `User list`, Users: User })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    postUser: async (req, res) => {
        try {
            let { name, email, role_id, username, password } = req.body;
            if (name && email && username && role_id && password) {
                let User = await user.create(req.body)
                return res.status(200).json({ message: `User successfull created`, users: User })
            } else {
                return res.status(400).json({ message: `name ,email,username,role_id and password are require` })

            }

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    putUser: async (req, res) => {
        try {
            id = req.params.id
            let User = await user.update(req.body, { where: { id: id } })
            return res.status(200).json({ message: `User Update:`, users: User })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteUser: async (req, res) => {
        try {
            id = req.params.id
            let User = await user.destroy({ where: { id: id } })
            return res.json(User);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}