let benef = require('../../modals/Beneficiary')

module.exports = {
    getBeneficiary: async (req, res) => {
        let user_id = req.decoded.id
        try {
            let Benef = await benef.findAll({where:{user_id}})
            return res.json(Benef);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    postBeneficiary: async (req, res) => {
        let user_id = req.decoded.id
        try {
            let { state, district, block, village, first_name, email, mobile,gender,Education } = req.body
            if (state && district && block && village && first_name && email && mobile) {
                let Benef = await benef.create({ state, district, block, village, first_name, email, mobile, user_id,gender,Education })
                return res.status(200).json({ message: `Beneficiary successfull created`, Beneficiary: Benef })
            } else {
                return res.status(400).json({ message: `Bad request: stste,district,block,village, first_name ,email and mobile are required` })
            }
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    putBeneficiary: async (req, res) => {
        try {
            id = req.params.id
            let Benef = await benef.update(req.body, { where: { id: id } })
            return res.status(200).json({ message: `Beneficiary Update:`, Beneficiary: Benef })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    deleteBeneficiary: async (req, res) => {
        try {
            id = req.params.id
            let Benef = await benef.destroy({ where: { id: id } })
            return res.json(Benef);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}