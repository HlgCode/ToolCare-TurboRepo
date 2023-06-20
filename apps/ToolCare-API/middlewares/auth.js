/* eslint-disable turbo/no-undeclared-env-vars */
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const key = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        res.status(403).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, key);
        req.user = decoded;
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    return next();
};

module.exports = verifyToken;