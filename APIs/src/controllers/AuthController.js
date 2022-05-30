const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = require('../models/User');

const register = async(req, res) => {
    try {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!req.body.email) return res.status(400).json('Email is required');

        if (!regex.test(req.body.email)) return res.status(400).json('Invalid email');

        const checkEmail = await userSchema.User.findOne({ email: req.body.email });
        if (checkEmail) return res.status(400).json('Email already exist');

        if (!req.body.password) return res.status(400).json('Password is required');

        if (req.body.password.length < 8) return res.status(400).json('Password must be at least 8 characters');

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = new userSchema.User({
            email: req.body.email,
            password: hashPassword,
        });

        const newUser = await user.save();
        res.status(200).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const login = async(req, res) => {
    try {
        const user = await userSchema.User.findOne({ email: req.body.email });
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