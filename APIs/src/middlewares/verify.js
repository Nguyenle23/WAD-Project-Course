const jwt = require('jsonwebtoken');

const verify = async(req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.status(403).json('Token is not valid');

            return req.user = user;
            next();
        });
    } else {
        return res.status(401).json('You are not authenticated');
    }
    next();
}

module.exports = verify