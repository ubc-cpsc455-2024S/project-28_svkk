var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const users = require('../model/user');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('869398522193-9j7n8el0o9p36t14mvck3f1vg0f91l4q.apps.googleusercontent.com');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

router.get('/', async (req,res) => {
    try {
        res.status(200).send("Success");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

// normal
router.post('/', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await users.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'No account with this email exists' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (password === "" ||!isMatch) {
            return res.status(400).json({ msg: 'Invalid Password' });
        }

        const tokenPayload = {
            userID: user._id,
            email: user.email,
            isGoogleUser: user.isGoogleUser
        };
        const jwtToken = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json(
            {
                msg: 'Login successful',
                token: jwtToken,
                user: {
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName
                }
            });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/google', async (req, res) => {
    const { token } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: '869398522193-9j7n8el0o9p36t14mvck3f1vg0f91l4q.apps.googleusercontent.com'
        });
        const payload = ticket.getPayload();

        // checks if sign-in email is in database
        let user = await users.findOne({ email: payload.email });

        // if its not, send to account creation
        if (!user) {
            // If the user does not exist, create a new one
            return res.status(400).json({
                msg: 'User not found. Please sign up.',
                email: payload.email
            });
        }

        const tokenPayload = {
            userID: user._id,
            email: user.email,
            isGoogleUser: user.isGoogleUser
        };

        const jwtToken = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            msg: 'Login successful',
            token: jwtToken,
            user: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;