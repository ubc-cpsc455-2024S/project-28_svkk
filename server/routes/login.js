var express = require('express');
var router = express.Router();

const users = require('../model/user');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await users.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'No account with this email exists' });
        }

        // TODO: added hashing later
        if (password !== user.password) {
            return res.status(400).json({ msg: 'Invalid Password' });
        }
        res.status(200).json({ msg: 'Login successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;