var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

const users = require('../model/user');

// finds email -> need parameter for path?
router.post('/', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await users.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Email already exists' });
        }

        const newUser = new users({
            id: uuidv4(),
            firstName,
            lastName,
            email,
            password,
        })
        await newUser.save();
        res.status(200).json({ msg: 'Email is available, signup successful', email: email });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;