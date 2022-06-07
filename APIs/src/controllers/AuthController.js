const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userModel = require('../models/User');

const register = async(req, res) => {

    try {
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = new userModel.User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const login = async(req, res) => {
    try {
        const user = await userModel.User.findOne({ email: req.body.email });
        if (!user) return res.status(401).json('No account exist');

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(401).json('Invalid password');

        const { password, ...info } = user._doc;

        const accessToken = jwt.sign({ _id: user._id, isAdmin: user.isAdmin },
            process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5d' });

        res.status(200).json({...info, accessToken });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

module.exports = {
    register,
    login
}