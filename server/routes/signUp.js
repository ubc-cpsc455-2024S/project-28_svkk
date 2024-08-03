var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const users = require('../model/user');


// check for email existing
router.post('/checkEmail', async (req,res) => {
    const {email} = req.body;
    try {
        const user = await users.findOne({email});
        if (user) {
            return res.status(400).json({ msg: 'Email already exists' });
        }
        res.status(200).json({ msg: 'Email is available' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

// regular users
router.post('/', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await users.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new users({
            id: uuidv4(),
            firstName,
            lastName,
            email,
            password: hashedPassword,
            isGoogleUser: false,
        })
        await newUser.save();
        res.status(200).json({ msg: 'Email is available, signup successful', email: email });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// google users
router.post('/google', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await users.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = new users({
            id: uuidv4(),
            firstName,
            lastName,
            email,
            password: hashedPassword,
            isGoogleUser: true,
        })
        await newUser.save();
        res.status(200).json({ msg: 'Email is available, signup successful', email: email });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;