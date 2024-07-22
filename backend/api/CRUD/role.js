let role = require('../../modals/Role')

module.exports = {
    getRole: async (req, res) => {
        try {
            let Role = await role.findAll()
            return res.json(Role);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    postRole: async (req, res) => {
        try {
            let name = req.body;
            if (name) {
                let Role = await role.create(req.body)
                return res.status(200).json({ message: `Role successfull created`, Role: Role })
            } else {
                return res.status(400).json({ message: `name ,email,username and password are require` })

            }

        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    putRole: async (req, res) => {
        try {
            id = req.params.id
            let Role = await role.update(req.body, { where: { id: id } })
            return res.json(Role);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteRole: async (req, res) => {
        try {
            id = req.params.id
            let Role = await role.destroy({ where: { id: id } })
            return res.json(Role);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}