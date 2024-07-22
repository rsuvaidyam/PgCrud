let user = require('../../modals/User')

const JWT = require('jsonwebtoken');
const JWT_SECRET = 'shlrgrgrhgrhOIWUEIWUEKSLCM';

module.exports = {
    login: async (req, res, next) => {
        try {
            let { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({ message: 'username and password are required' });
            };
            let User = await user.findOne({ where: { username, password } });
            if (User) {
                let token = JWT.sign({
                    id: User.id, name: User.name, email: User.email,
                    username: User.username, role_id: User.role_id
                }, JWT_SECRET);
                return res.json({
                    message: 'Login Successful',
                    token: token
                });
            } else {
                return res.status(400).json({ message: 'username and password are incorrect' });
            };
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

}