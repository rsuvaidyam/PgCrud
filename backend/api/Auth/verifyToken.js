const JWT = require('jsonwebtoken');
const JWT_SECRET = 'shlrgrgrhgrhOIWUEIWUEKSLCM';

module.exports = async (req, res, next) => {
    try {
        let { token } = req.headers;
        if (token) {
            let decoded = JWT.verify(token, JWT_SECRET);
            req.decoded = decoded;
            next()
        } else {
            return res.status(401).json({ message: 'unauthorize token' });
        }
    } catch (error) {
        return res.status(401).json({ message: error });
    }
}